import React from 'react';
import styles from './HeaderContacts.module.scss'

const HeaderContacts = () => {
    return (
        <div className={styles.contacts}>
            <span>Челябинск</span>
            <span>89124046267</span>
        </div>
    );
};

export default HeaderContacts;