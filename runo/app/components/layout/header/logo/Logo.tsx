import React, {FC} from 'react';
import logo from '../../../../../public/images/gold_runo.jpg'
import Image from "next/image";

const Logo :FC= () => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>

            <div>
                <Image src={logo.src} alt="Logo" width={50} height={50}/>
            </div>
            <span>
                Золотое Руно
            </span>
        </div>
    );
};

export default Logo;