import React, {ElementRef, FC, useCallback, useEffect, useRef, useState} from 'react';
import styles from './VerticalImagesLine.module.scss'
import Image from "next/image";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";
import {getTransformValue} from "@/utils/getTransformValue";


export interface IImages{
    id: number
    original: string
}

const VerticalImagesLine:FC<{images: IImages[]}> = ({images}) => {
    const trackRef = useRef<HTMLDivElement|null>(null)

    useEffect(() => {
        trackRef.current?.addEventListener('mousedown', swipeStart)
        trackRef.current?.addEventListener('touchstart', swipeStart)
        return () => {
            trackRef.current?.removeEventListener('mousedown', swipeStart)
            trackRef.current?.removeEventListener('touchstart', swipeStart)
        }
    }, [trackRef])

    const swipeStart = (e: any) => {
        let track = trackRef.current
        // @ts-ignore
        document.initPos = e.clientY
        // @ts-ignore
        document.transform = getTransformValue(track)
        console.log('mousedown')
        document.addEventListener('mouseup', swipeEnd)
        document.addEventListener('mousemove', swipeAction)
    }

    const swipeEnd = () => {
        document.removeEventListener('mouseup', swipeEnd)
        document.removeEventListener('mousemove', swipeAction)
        console.log('mouseup')

    }

    const swipeAction = (e: any) => {
        let transform = e.currentTarget.transform
        let track = trackRef.current
        let initPos = e.currentTarget.initPos
        track!.style.cssText = `transform: translateY(${transform - (initPos - e.clientY)}px)`
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.arrowTop}>
                <button>
                    <SlArrowUp />
                </button>
            </div>

            <div className={styles.area}>
                <div className={styles.track} ref={trackRef}>
                    {images && images.length && images.map(image => (
                        <div className={styles.lineImageWrapper} key={image.id}>
                            <div className={styles.image}>
                                 <Image src={image.original} alt='' fill/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.arrowBottom}>
                <button>
                    <SlArrowDown />
                </button>
            </div>

        </div>
    );
};

export default VerticalImagesLine;