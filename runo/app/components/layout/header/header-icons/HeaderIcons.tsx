import React, {FC} from 'react';
import {IIconItem} from "./icon-items.data";
import Link from "next/link";
import styles from './HeaderIcons.module.scss'


const HeaderIcons :FC<{ iconItems: IIconItem[] }> = ({iconItems}) => {
    return (
        <div className={styles.icons}>
            {iconItems.map(item => (
                <div key={item.link}>
                    <Link href={item.link}>
                        <item.icon />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HeaderIcons;