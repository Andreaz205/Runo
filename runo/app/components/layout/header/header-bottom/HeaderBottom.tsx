import React, {useEffect, useRef, useState} from 'react';
import styles from './HeaderBottom.module.scss'
import Details from "./Details";
import headerBottomData from "./header-bottom.data";
import LinkItem from "../header-navigation/navigation-items/LinkItem";
import {NavEnum} from "../header-navigation/navigation-items/nav-enum.interface";
import BottomLinkItem from "./BottomLinkItem";

const HeaderBottom = ({setActiveElement, setIsOpenDetails, isOpenDetails, bottomLinks, setBottomLinks}) => {
    const [term, setTerm] = useState<NavEnum>(NavEnum.goods)
    const ref = useRef<HTMLDivElement | null>(null)

    const enterCallback = (e: any) => {
        console.log(e.relatedTarget)
        setIsOpenDetails(true)
    }

    const leaveCallback = (e: any) => {
        if (e.relatedTarget?.id !== 'navigation' || e.relatedTarget?.parentNode?.parentNode?.id !== 'navigation') {
            setActiveElement(headerBottomData[0].name)
            if (e.relatedTarget?.id !== 'details') {
                setIsOpenDetails(false)
            }
        }
    }

    const setDefaultBottomLinks = () => {
        let defaultValue = headerBottomData[0].items
        setBottomLinks(defaultValue)
    }

    useEffect(() => {
        ref?.current?.addEventListener('mouseenter', enterCallback)
        ref?.current?.addEventListener('mouseleave', leaveCallback)

        return () => {
            ref?.current?.removeEventListener('mouseenter', enterCallback)
            ref?.current?.removeEventListener('mouseleave', leaveCallback)
        }
    }, [])

    return (
        <div className={styles.bottomWrapper} id='header-bottom-wrapper'>
            <div className={styles.bottom}>
                <div className={styles.bottomBlock} >
                    <div className={styles.linksBlock} id='header-bottom' ref={ref}>
                        {bottomLinks && bottomLinks.map(el =>(
                            <BottomLinkItem title={el.title} link={el.link} key={el.link}/>
                        ))}
                        <Details setActiveElement={setActiveElement} setIsOpenDetails={setIsOpenDetails} isOpenDetails={isOpenDetails} setDefaultBottomLinks={setDefaultBottomLinks}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeaderBottom;