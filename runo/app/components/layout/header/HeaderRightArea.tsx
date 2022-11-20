import React, {FC} from 'react';
import HeaderContacts from "./header-contacts/HeaderContacts";
import HeaderIcons from "./header-icons/HeaderIcons";
import iconItemsData from "./header-icons/icon-items.data";
import styles from './Header.module.scss'

const HeaderRightArea :FC= () => {
    return (
        <div className={styles.rightNode}>
            <HeaderContacts />
            <HeaderIcons iconItems={iconItemsData}/>
        </div>
    );
};

export default HeaderRightArea;