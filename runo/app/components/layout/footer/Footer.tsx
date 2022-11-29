import React, {FC} from 'react';
import styles from './Footer.module.scss'


const Footer :FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.delivery}>
                <h4>Доставка по Росиии</h4>
                <p>Чтобы заказать товар в магазине, свяжитесь с нашим менеджером по телефону +7 (495) 241-61-14</p>
                <a href="#">Подробнее</a>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.footerContent}></div>
        </div>
    );
};

export default Footer;