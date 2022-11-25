import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './Banner.module.scss'
import {IoChevronBack, IoChevronForwardSharp} from "react-icons/io5";
import useWindowSize from "../../../hooks/useWindowSize";

const Banner :FC = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [x, setX] = useState<number>(0)
    const [width, setWidth] = useState<number|undefined>(0)

    const size = useWindowSize();

    useEffect(() => {
        if (size.width > 1920) size.width = 1920
        setX(0)
        console.log(x)
        setWidth(size.width)
    }, [size])

    const slideLeft = () => {
        if (x == 0) return
        ref.current!.style.cssText = `transform: translateX(${x + width}px)`
        setX(x + width)
    }

    const slideRight = () => {
        if (x == -width*2) return
        ref.current!.style.cssText = `transform: translateX(${x - width}px)`
        setX(x - width)
    }
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.banner}>

                <div className={styles.list} ref={ref}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://storge.pic2.me/cm/5120x2880/794/5975d4ccc17ae.jpg"
                            alt="Image"
                        />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://storge.pic2.me/cm/5120x2880/794/5975d4ccc17ae.jpg"
                            alt="Image"
                        />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://storge.pic2.me/cm/5120x2880/794/5975d4ccc17ae.jpg"
                            alt="Image"
                        />
                    </div>
                </div>


                <div className={styles.controls}>
                    <div className={styles.arrowsBlock}>
                        <button className={styles.arrow} onClick={() => slideLeft()}>
                            <IoChevronBack />
                        </button>

                        <div className={styles.description}>
                            Описание
                        </div>

                        <button className={styles.arrow} onClick={() => slideRight()}>
                            <IoChevronForwardSharp />
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;