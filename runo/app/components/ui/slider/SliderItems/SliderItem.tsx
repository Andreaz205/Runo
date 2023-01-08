import React, {FC} from 'react';
import styles from '../Slider.module.scss'
import divan from '/public/images/divan.jpg'
import Image from "next/image";

const SliderItem:FC = ({item}) => {
    return (
        <div className={styles.sliderItem} id={item.id}>

            <div className={styles.slideWrapper}>
                <div className={styles.sliderImageWrapper}>
                    <Image src={item.imagePath} alt='' width='400' height='300'/>
                </div>
                <div>
                    {item.title}
                </div>
                <div>
                    От {item.price} P
                </div>
                {/*<div>*/}
                {/*    sale*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default SliderItem;