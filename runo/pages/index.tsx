import Home from "../app/components/screens/home/Home";
import {GetStaticProps, NextPage} from "next";
import {CategoryService} from "@/services/CategoryService";

export interface ISliderItems {
  id: number,
  link: string,
  imagePath: string,
  price: number,
  categoryId: number,
  title: string
}

const HomePage: NextPage = ({items}) =>  {
  console.log(items)
  return (
    <Home hits={items}/>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  try {
    const {data} = await CategoryService.hits()
    // console.log(data)
    let items = data.map(item => ({
      id: item.id,
      // title: item.title,
      link: '/products/' + item.id,
      imagePath: 'http://localhost:8000/storage/' + item.images[0].path,
      price: item.price,
      categoryId: item.categoryId,
      title: item.title
      // oldPrice: 60000,
      // sale: 10,
    }))

    return {
      props: {
        items,
      },
      revalidate: 60
    }
  } catch (e) {
    console.log(e);
    return {
      notFound: true
    }
  }
}

export default HomePage
