import React, {FC} from 'react';
import Banner from "../../ui/banner/Banner";
import Meta from "@/utils/meta/Meta";
import Slider from "@/ui/slider/Slider";
import {ISliderItem} from "@/ui/slider/slider.interface";

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
        link: '/products/barcelona-whitee',
        imagePath: '/some-path',
        price: 50000,
        oldPrice: 60000,
        sale: 10,
    },
]

const Home :FC = () => {
    return (
        <div>
            <Meta
                title='Главная'
                description='Лучшие диваны в Челябинске'
            >
                <Banner />
                <Slider items={items} />
            </Meta>
        </div>
    );
};

export default Home;