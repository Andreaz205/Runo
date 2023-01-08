import React, {FC} from 'react';
import Banner from "../../ui/banner/Banner";
import Meta from "@/utils/meta/Meta";
import Slider from "@/ui/slider/Slider";
import {ISliderItem} from "@/ui/slider/slider.interface";
import {ISliderItems} from "../../../../pages";

const items: ISliderItem[] = [
    {
        title: 'Барселона Blue',
        link: '/products/barcelona-blue',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Brown',
        link: '/products/barcelona-brown',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона White',
        link: '/products/barcelona-white',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Blue',
        link: '/products/barcelona-bluee',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Red',
        link: '/products/barcelona-rede',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Grey',
        link: '/products/barcelona-greye',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Brown',
        link: '/products/barcelona-browne',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона White',
        link: '/products/barcelona-whiteefe',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Blue',
        link: '/products/barcelona-blueef',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Red',
        link: '/products/barcelona-redeefe',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Grey',
        link: '/products/barcelona-greyef',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Brown',
        link: '/products/barcelona-brownef',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона White',
        link: '/products/barcelona-whiteef',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Blue',
        link: '/products/barcelona-blueefc',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Red',
        link: '/products/barcelona-redeefc',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Grey',
        link: '/products/barcelona-greyeef',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Brown',
        link: '/products/barcelona-browneef',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона White',
        link: '/products/barcelona-whiteee',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Red',
        link: '/products/barcelona-red',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
    {
        title: 'Барселона Grey',
        link: '/products/barcelona-grey',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
]
let bannerImages = [
    {
       id: 0
    },
    {
        id: 1
    },
    {
        id: 2
    },
]

const Home :FC<{hits: ISliderItems[]}> = ({hits}) => {
    return (
        <div>
            <Meta
                title='Главная'
                description='Лучшие диваны в Челябинске'
            >
                <Banner bannerImages={bannerImages}/>
                <Slider items={hits} />
            </Meta>
        </div>
    );
};

export default Home;