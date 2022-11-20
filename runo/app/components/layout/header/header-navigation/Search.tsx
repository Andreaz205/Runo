import React, {FC, useState} from 'react';
import styles from './HeaderNavigation.module.scss'
import { HiSearch } from 'react-icons/hi'

const Search :FC = () => {
    const [searchTerm, setSearchTerm]= useState<string>('')
    console.log(searchTerm)
    return (
        <div className={styles.search}>
            <input type="text" placeholder='Введите запрос' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button>
                <HiSearch />
            </button>
        </div>
    );
};

export default Search;