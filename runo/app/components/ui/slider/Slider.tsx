import React, {createContext, FC, useState} from 'react';
import styles from './Slider.module.scss'
import {ISliderItem} from "@/ui/slider/slider.interface";
import SliderItems from "@/ui/slider/SliderItems/SliderItems";
import SliderArrows from "@/ui/slider/SliderArrows/SliderArrows";


const Slider:FC<{ items: ISliderItem[] }> = ({items}) => {

    const [clicked, setClicked] = useState(false)
    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.heading}>
                <h1>Хиты интернет продаж</h1>
            </div>
            <div className={styles.description}>
                https://habr.com/ru/post/501258/
                В нашем интернет-магазине представлены только тщательно отобранные модели, исключительные диваны – хиты продаж в Москве и по России. Каждая модель дивана из нашего интернет каталога – это воплощение отличного дизайна, легенда мебельной отрасли.
            </div>
            {/*<SliderArrows slideLeft={slideLeft} slideRight={slideRight}/>*/}
            <SliderItems items={items}/>
        </div>
    );
};

export default Slider;