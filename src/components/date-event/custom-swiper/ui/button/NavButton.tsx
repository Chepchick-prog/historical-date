import { FC } from "react"

import styles from './NavButton.module.scss'

export const NavButton: FC<{
    className: string;
    mirror?: boolean;
}> = ({className, mirror}) => {
    return (
        <button 
            className={`${className} ${styles.button}`}
            style={{transform: mirror ? 'rotate(0.5turn)' : ''}}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                <path d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071" stroke="#42567A" strokeWidth="2"/>
            </svg>
        </button>
    )
}