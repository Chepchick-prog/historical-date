import { FC, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import styles from './Indicator.module.scss'

gsap.registerPlugin(useGSAP);

export const Indicator: FC<{
    length: number;
    selectedIndex: number;
    onSectionChange: (section: number) => void;
    duration: number;
}> = ({length, selectedIndex, duration = 1, onSectionChange}) => {

    const [activeId, setActiveId] = useState<number>(selectedIndex)
    const list = new Array(length).fill(null)

    useGSAP(() => {
        const indicators: any = gsap.utils.toArray('.indicator')
        const tl = gsap.timeline()

        tl.to(indicators[activeId], {
            opacity: `-=0.6`,
            duration: duration / 2,
        }).add(() => {
            setActiveId(selectedIndex);
        }).to(indicators[selectedIndex], {
            opacity: 1,
            duration: duration / 2,
        })
        
    }, {dependencies: [selectedIndex]})

    const handleClick = (index: number) => {
        if(index === selectedIndex) return;
        onSectionChange(index)
    }

    return (
        <div className={styles.indicator}>
            {list.map((_, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`indicator ${styles.circle} ${index !== activeId ? styles.disabled : ''}`}
                >
                </div>
            ))}
        </div>
    )
}