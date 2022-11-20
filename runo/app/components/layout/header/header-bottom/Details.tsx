import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './HeaderBottom.module.scss'
import cn from 'classnames'

const Details :FC = ({isOpenDetails, setActiveElement, setIsOpenDetails, setDefaultBottomLinks}) => {

    const ref = useRef<HTMLDivElement | null>(null)

    const enterCallback = (e: any) => {
        console.log('enter')
    }

    const leaveCallback = (e: any) => {
        console.log(e.relatedTarget)
        if (e.relatedTarget?.id !== 'header-bottom') {
            console.log(e.relatedTarget);
            console.log('closing Details')
            setIsOpenDetails(false)
            setDefaultBottomLinks()
        }
    }

    useEffect(() => {
        ref?.current?.addEventListener('mouseenter', enterCallback)
        ref?.current?.addEventListener('mouseleave', leaveCallback)

        return () => {
            ref?.current?.removeEventListener('mouseenter', enterCallback)
            ref?.current?.removeEventListener('mouseleave', leaveCallback)
        }
    }, [])

    return (
        <div className={cn(styles.details, {[styles.visible]: isOpenDetails} )} ref={ref} id='details'>
            <div className={styles.detailsBlock}>
                Details
            </div>
        </div>
    );
};

export default Details;