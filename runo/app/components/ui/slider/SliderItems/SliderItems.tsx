import React, {FC, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import styles from '../Slider.module.scss'
import {ISliderItem} from "@/ui/slider/slider.interface";
import SliderItem from "@/ui/slider/SliderItems/SliderItem";
import {SliderContext} from "@/ui/slider/Slider";
import SliderArrows from "@/ui/slider/SliderArrows/SliderArrows";

const SliderItems:FC<{ items: ISliderItem[] }> = ({items}) => {
    const sliderTrackRef = useRef<null|HTMLDivElement>(null)
    const slider = useRef<null|HTMLDivElement>(null)
    const [clicked, setClicked] = useState(false)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const slideWidth = 420

    const goToSlide = (value: number) => {
        return
    }

    const slideLeft = () => {
        setCurrentSlideIndex((currentSlideIndex - 1) >= 0 ? currentSlideIndex - 1 : 0)
        sliderTrackRef.current.style.cssText = `transition: .3s ease-in-out;transform: translateX(-${(currentSlideIndex - 1) * (slideWidth+20)}px)`
    }

    const slideRight = () => {
        setCurrentSlideIndex(currentSlideIndex + 1)
        sliderTrackRef.current.style.cssText = `transition: .3s ease-in-out;transform: translateX(-${(currentSlideIndex + 1) * (slideWidth+20)}px)`

    }

    const trackWidth = useMemo(() => {
        return items.length * (slideWidth + 20)
    }, [items.length])
    const lastIndex = trackWidth/(slideWidth + 20)
    console.log(trackWidth, lastIndex)

    const align = (currentSlideIndex: number) => {
        let posCurrentSlide = currentSlideIndex * (slideWidth+10+10)
        sliderTrackRef.current.style.cssText = `transition: .3s ease-in-out;transform: translateX(${-posCurrentSlide}px)`
    }

    const getTransformValue = () => {
        let trfRegExp = /[-0-9.]+(?=px)/
        let style = sliderTrackRef.current.style.transform
        return +style.match(trfRegExp);
    }

    const swipeStart = (e: any) => {
        setClicked(true)

        slider.current.posInit = e.clientX
        slider.current.transform = getTransformValue()

        // slider.current?.addEventListener('mousemove', swipeAction)
        // slider.current?.addEventListener('touchmove', swipeAction)
        // slider.current?.addEventListener('mouseup', swipeEnd)
        // slider.current?.addEventListener('touchend', swipeEnd)
    }

    const swipeAction = (e: any) => {
        if (clicked) {
            let transform = e.currentTarget.transform
            let posInit = e.currentTarget.posInit


            let currentTransform = getTransformValue()
            console.log(currentTransform)

            let viewportWidth = sliderTrackRef.current?.offsetWidth
            console.log(viewportWidth)
            setCurrentSlideIndex(Math.trunc(
                currentTransform/(slideWidth + 20)) <= 0
                ? Math.trunc(Math.abs(currentTransform/(slideWidth+10+10))) <= lastIndex -4
                    ? Math.trunc(Math.abs(currentTransform/(slideWidth+10+10)))
                    : lastIndex - 4
                : 0
            )
            console.log(currentSlideIndex)

            sliderTrackRef.current.style.cssText = `transform: translateX(${transform - posInit + e.clientX}px)`

        }

    }

    //TODO Если слайдов меньше 4 тогда изменить функционал отменить слайды

    const swipeEnd = () => {
        setClicked(false)
        align(currentSlideIndex)
        // slider.current?.removeEventListener('mousemove', swipeAction)
        // slider.current?.removeEventListener('touchmove', swipeAction)
        // slider.current?.removeEventListener('mouseup', swipeEnd)
        // slider.current?.removeEventListener('touchend', swipeEnd)
    }

    useEffect(() => {
        slider.current?.addEventListener('mousemove', swipeAction)
        slider.current?.addEventListener('touchmove', swipeAction)
        slider.current?.addEventListener('mouseup', swipeEnd)
        slider.current?.addEventListener('touchend', swipeEnd)

        slider.current?.addEventListener('mousedown', swipeStart)
        slider.current?.addEventListener('touchstart', swipeStart)
        slider.current?.addEventListener('mouseleave', swipeEnd)
        slider.current?.addEventListener('touchcancel', swipeEnd)
        return () => {
            slider.current?.removeEventListener('mousedown', swipeStart)
            slider.current?.removeEventListener('touchstart', swipeStart)
            slider.current?.removeEventListener('mouseleave', swipeEnd)
            slider.current?.removeEventListener('touchcancel', swipeEnd)

            slider.current?.removeEventListener('mousemove', swipeAction)
            slider.current?.removeEventListener('touchmove', swipeAction)
            slider.current?.removeEventListener('mouseup', swipeEnd)
            slider.current?.removeEventListener('touchend', swipeEnd)
        }
    }, [swipeStart, swipeAction, swipeEnd])
    return (
        <>
            <SliderArrows slideLeft={slideLeft} slideRight={slideRight}/>
            <div className={styles.sliderList} ref={slider}>
                <div className={styles.sliderItems} ref={sliderTrackRef}>
                    {items && items.map(item => (
                        <SliderItem key={item.link}/>
                    ))}
                </div>
            </div>
    </>

    );
};

export default SliderItems;