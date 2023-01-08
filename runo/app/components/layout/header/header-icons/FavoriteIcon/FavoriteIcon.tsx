import React, {FC} from 'react';
import {FaRegHeart} from "react-icons/fa";
import styles from "@/components/layout/header/header-icons/CartItcon/CartIcon.module.scss";
import Link from "next/link";
import {BsBag} from "react-icons/bs";

const FavoriteIcon :FC = () => {
    return (
        <div className={styles.icon}>
            <Link href='/favorite'>
                <FaRegHeart />
            </Link>
        </div>
    );
};

export default FavoriteIcon;

