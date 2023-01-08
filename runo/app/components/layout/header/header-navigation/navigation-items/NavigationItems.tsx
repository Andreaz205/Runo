import React, {FC, useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {INavItem} from "./nav-item.interface";
import styles from '../HeaderNavigation.module.scss'
import {NavEnum} from "./nav-enum.interface";
import LinkItem from "./LinkItem";
import headerBottomData from '../../header-bottom/header-bottom.data'


const NavigationItems :FC<{ navItems: INavItem[] }> = ({ activeElement, setActiveElement, setDefaultActiveElement, setBottomLinks}) => {

    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        ref?.current?.addEventListener('mouseleave', setDefaultActiveElement)
        return () => ref?.current?.removeEventListener('mouseleave', setDefaultActiveElement)
    }, [])


    return (
        <div className={styles.navigationWrapper} ref={ref} id='navigation'>
            {headerBottomData.map(item => (
                <div key={item.link} style={{height: '100%'}}>
                    <LinkItem title={item.name} link={item.link} setActiveElement={setActiveElement} activeElement={activeElement} setBottomLinks={setBottomLinks}/>
                </div>
            ))}
        </div>
    );
};

export default NavigationItems;