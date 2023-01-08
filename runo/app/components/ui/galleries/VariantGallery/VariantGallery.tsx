import React, {FC} from 'react';
import styles from './VariantGallery.module.scss'
import VerticalImagesLine from "@/ui/galleries/VariantGallery/ImagesLine/VerticalImagesLine";
import Image from "next/image";

const VariantGallery :FC = ({images}) => {

    return (
        <div className={styles.galleryWrapper}>
            <div className={styles.bigImage}>
                <div className={styles.imageContainer}>
                    <Image src={images[0]?.original} alt='' fill/>
                </div>
            </div>
            <VerticalImagesLine images={images}/>
        </div>
    );
};

export default VariantGallery;