import React, {FC, PropsWithChildren, useRef, useState} from 'react';
import Header from "./header/Header";
import styles from './Layout.module.scss'
import Footer from "@/components/layout/footer/Footer";

const Layout :FC <PropsWithChildren> = ({children}) => {
    const ref = useRef<null|HTMLDivElement>(null)
    // const [transformed, setTransformed] = useState<boolean>()
    let transformed = false

    const transform = (flag: boolean) => {
        transformed = flag
    }

    const transformUpContent = () => {
        console.log(ref.current)
         ref.current.style.cssText = 'transition: .25s ease-in-out; transform: translateY(0px);'
    }

    const transformDownContent = () => {
        console.log(ref.current)
         ref.current.style.cssText = 'transition: .25s ease-in-out; transform: translateY(0px);'
    }
    return (
        <div className={styles.superWrapper}>
            <Header transformUpContent={transformUpContent} transformDownContent={transformDownContent}/>
            <div className={styles.mainWrapper} ref={ref}>
                {children}
            </div>
            <Footer />
        </div>

    );
};

export default Layout;