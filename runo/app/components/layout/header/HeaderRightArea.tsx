import React, {FC} from 'react';
import HeaderContacts from "./header-contacts/HeaderContacts";
import HeaderIcons from "./header-icons/HeaderIcons";
import iconItemsData from "./header-icons/icon-items.data";
import styles from './Header.module.scss'
import dynamic from "next/dynamic";

const DynamicHeaderIcons = dynamic(import('./header-icons/HeaderIcons'), {
    ssr: false
})

const HeaderRightArea :FC= () => {
    return (
        <div className={styles.rightNode}>
            <HeaderContacts />
            <DynamicHeaderIcons />
        </div>
    );
};

export default HeaderRightArea;