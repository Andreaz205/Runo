import React, {FC, useEffect, useState} from 'react';
import Logo from "./logo/Logo";
import HeaderNavigation from "./header-navigation/HeaderNavigation";
import styles from './Header.module.scss'
import HeaderRightArea from "./HeaderRightArea";
import TopHeader from "./top-header/TopHeader";
import HeaderBottom from "./header-bottom/HeaderBottom";
import headerBottomData from "./header-bottom/header-bottom.data";

const Header :FC = () => {
    let firstItem = headerBottomData[0].name
    let firstBottomLinks = headerBottomData[0].items
    const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false)
    const [activeElement, setActiveElement] = useState(firstItem)
    const [bottomLinks, setBottomLinks] = useState(firstBottomLinks)
    // const [doc, setDoc] = useState()

    let doc
    useEffect(() => {
         doc = document
    },[])

    const setDefaultActiveElement = (e: any) => {
        if (e.relatedTarget?.id === 'header-bottom' || e.relatedTarget?.querySelector('a')) {
            return
        }
        setActiveElement(firstItem)
    }

    // let setDefaultActiveElementFromHeaderBottom = (e: any) => {
    //     if (e.relatedTarget?.id !== 'navigation' ) setActiveElement(firstItem)
    // }
    let transformed = false

    const transform = (flag: boolean) => {
        transformed = flag
    }

    const transformOut = () => {
        let middleWrapper = doc.querySelector('#middle-wrapper')
        let headerBottom = doc.querySelector('#header-bottom-wrapper')
        let middleHeader = doc.querySelector('#middle-header')
        let topWrapper = doc.querySelector('#top-header')
        let headerWrapper = doc.querySelector('#header-wrapper')

        headerWrapper.style.cssText = 'transform: translateY(0px); transition: .3s ease-in-out'
        headerBottom.style.cssText = 'transition: .3s ease-in-out; position: absolute; bottom: -50px; width: 100vw'
        transform(false)

    }

    const transformIn = () => {
        let middleWrapper = doc.querySelector('#middle-wrapper')
        let headerBottom = doc.querySelector('#header-bottom-wrapper')
        let middleHeader = doc.querySelector('#middle-header')
        let topWrapper = doc.querySelector('#top-header')
        let headerWrapper = doc.querySelector('#header-wrapper')

        headerWrapper.style.cssText = 'transform: translateY(-35px); transition: .3s ease-in-out'
        headerBottom.style.cssText = 'transition: .3s ease-in-out; position: absolute; bottom: 0; width: 100vw'
        transform(true)
    }


    useEffect(() => {
        const handleScroll = (event: any) => {
            if (window.scrollY > 10) {
                if (!transformed) {
                    transformIn()
                }
            } else {
                if (transformed) {
                    transformOut()

                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.headerPanel} id='header-wrapper'>
            <TopHeader />
            <div style={{height: 50, display: 'flex', justifyContent: 'center'}} id='middle-wrapper'>

                <div className={styles.movingWrapper}>
                    <div className={styles.header} id='middle-header'>

                        <div className={styles.leftNode}>
                            <Logo />
                            <HeaderNavigation activeElement={activeElement} setActiveElement={setActiveElement} setDefaultActiveElement={setDefaultActiveElement} setBottomLinks={setBottomLinks} />
                        </div>

                        <HeaderRightArea />
                    </div>
                </div>


                <HeaderBottom isOpenDetails={isOpenDetails} setIsOpenDetails={setIsOpenDetails} bottomLinks={bottomLinks} setActiveElement={setActiveElement} setBottomLinks={setBottomLinks}/>
            </div>



        </div>


    );
};

export default Header;