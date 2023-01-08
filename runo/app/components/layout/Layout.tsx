import React, {FC, PropsWithChildren, useRef, useState} from 'react';
import Header from "./header/Header";
import styles from './Layout.module.scss'
import Footer from "@/components/layout/footer/Footer";
import Login from "@/ui/login/Login";
import Banner from "@/ui/banner/Banner";
import dynamic from "next/dynamic";
import {useTypedSelector} from "@/hooks/useTypedSelector";

const DynamicLoginPage = dynamic(
    () =>  import('../ui/login/Login'), {ssr: false}
)

const DynamicRegisterPage = dynamic(
    () =>  import('../ui/register/Register'), {ssr: false}
)

const Layout :FC <PropsWithChildren> = ({children}) => {
    const ref = useRef<null|HTMLDivElement>(null)
    // const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<boolean>(false)
    const {isOpenLoginPopup, isOpenRegisterPopup} = useTypedSelector(state => state.user)
    // const [transformed, setTransformed] = useState<boolean>()
    let transformed = false

    const transform = (flag: boolean) => {
        transformed = flag
    }

    const transformUpContent = () => {
        console.log(ref.current)
         ref.current.style.cssText = 'transition: .5s ease-in-out; transform: translateY(0px);'
    }

    const transformDownContent = () => {
        console.log(ref.current)
         ref.current.style.cssText = 'transition: .3s ease-in-out; transform: translateY(0px);'
    }

    return (
        <div className={styles.superWrapper}>

            {
                isOpenLoginPopup ? <DynamicLoginPage />: null
            }

            {
                isOpenRegisterPopup ? <DynamicRegisterPage /> : null
            }

            <Header transformUpContent={transformUpContent} transformDownContent={transformDownContent}/>
            <div className={styles.mainWrapper} ref={ref}>
                {children}
            </div>
            <Footer />
        </div>

    );
};

export default Layout;