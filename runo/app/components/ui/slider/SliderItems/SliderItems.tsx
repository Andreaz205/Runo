import React, {FC} from 'react';
import styles from '../Slider.module.scss'
import {ISliderItem} from "@/ui/slider/slider.interface";
import SliderItem from "@/ui/slider/SliderItems/SliderItem";

const SliderItems:FC<{ items: ISliderItem[] }> = ({items}) => {
    return (
        <div className={styles.sliderList}>
            <div className={styles.sliderItems}>
                {items && items.map(item => (
                    <SliderItem key={item.link}/>
                ))}
            </div>
        </div>

    );
};

export default SliderItems;