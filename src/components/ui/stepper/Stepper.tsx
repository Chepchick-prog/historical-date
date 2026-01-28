import { FC, useEffect, useState } from "react";
import styles from './Stepper.module.scss'

export const Stepper: FC<{
    count: number;
    max: number;
    onSectionChange: (section: number) => void;
    duration?: number;
}> = ({count, max, duration, onSectionChange}) => {

    const [value, setValue] = useState<number>(() => count)
    const [isActive, setActive] = useState<boolean>(false)

    const handlePrev = () => {
        setValue(prev => prev - 1)
    }

    const handleNext = () => {
        setValue(prev => prev + 1)
    }

    useEffect(() => {
        if(!duration) return;
        if(!isActive) return;

        setTimeout(() => {
            setActive(false)
        }, duration * 1000)

    }, [isActive])

    useEffect(() => {
        setValue(count)
    }, [count])

    useEffect(() => {
        onSectionChange(value)

        if(duration) setActive(true)

    }, [value])

    return (
        <div className={styles.container}>
            <span>0{value + 1}/0{max}</span>
            <div className={styles.stepper}>
                <button
                    className={`${value <= 0 ? styles.disabled : ''}`}
                    onClick={handlePrev}
                    disabled={value <= 0 || isActive}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                        <path d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </button>
                <button
                    className={`${value >= max - 1 ? styles.disabled : ''}`}
                    onClick={handleNext}
                    disabled={value >= (max - 1) || isActive}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                        <path d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}