import React, {FC} from 'react';
import styles from './VariantPageGallery.module.scss'
import ImageGallery from 'react-image-gallery';

// https://react-responsive-carousel.js.org/

// const images = [
//     {
//         original: 'https://picsum.photos/id/1018/1000/600/',
//         // thumbnail: 'https://picsum.photos/id/1018/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1015/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
// ];

const VariantPageGallery :FC = ({images}) => {
    console.log(images)

    return (
        <div className={styles.wrapper}>
            <div className={styles.gallery}>
                {/*<div className={styles.mainImage}>*/}
                    {/*<div className={styles.imageWrapper}>*/}
                    {/*    <Image src={} alt={} />*/}
                    {/*</div>*/}
                {images && <ImageGallery items={images} showPlayButton={false} lazyLoad={true} additionalClass={styles.image}/>}

                {/*</div>*/}
                {/*<div className={styles.rightBlock}>*/}
                {/*    /!*{images.map(image => (*!/*/}
                {/*    /!*    <div key={image.id}>*!/*/}
                {/*    /!*        <Image src={} alt={}/>*!/*/}
                {/*    /!*    </div>*!/*/}
                {/*    /!*))}*!/*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default VariantPageGallery;