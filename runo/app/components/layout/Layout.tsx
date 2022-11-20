import React, {FC, PropsWithChildren, useState} from 'react';
import Header from "./header/Header";
import styles from './Layout.module.scss'

const Layout :FC <PropsWithChildren> = ({children}) => {

    // const [transformed, setTransformed] = useState<boolean>()
    let transformed = false

    const transform = (flag: boolean) => {
        transformed = flag
    }

    return (
        <div className={styles.superWrapper}>
            <Header/>
            <div className={styles.mainWrapper}>
                {children}
            </div>
        </div>

    );
};

export default Layout;