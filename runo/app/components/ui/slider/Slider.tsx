import React, {FC} from 'react';
import styles from './Slider.module.scss'
import {ISliderItem} from "@/ui/slider/slider.interface";
import SliderItems from "@/ui/slider/SliderItems/SliderItems";


const Slider:FC<{ items: ISliderItem[] }> = ({items}) => {
    return (
        <div className={styles.sliderWrapper}>
            <SliderItems items={items}/>
        </div>
    );
};

export default Slider;