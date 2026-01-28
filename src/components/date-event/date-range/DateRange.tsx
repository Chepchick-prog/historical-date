import { FC, useMemo, useState } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Date } from "../../../lib/data/historicalDatesData";

import styles from './DateRange.module.scss'

gsap.registerPlugin(useGSAP);

const min = (values: number[]) => values.reduce((x , y) => Math.min(x, y))
const max = (values: number[]) => values.reduce((x , y) => Math.max(x, y))

export const DateRange: FC<{
    list: Date[];
    duration?: number,
}> = ({list, duration = 1}) => {

    const dateList = useMemo(() => {
        return list.map((item => item.date))
    }, [list])

    const [dates, setDates] = useState(() => ({
        firstDate: min(dateList),
        secondaryDate: max(dateList),
    }))
    const [isAnimating, setIsAnimating] = useState(false);

    useGSAP(() => {
        if (isAnimating) return;
        setIsAnimating(true);

        const newFirstDate = min(dateList);
        const newSecondaryDay = max(dateList);

        const animationState = {...dates};
        const tl = gsap.timeline({
            onComplete: () => {
                setDates({
                    firstDate: newFirstDate,
                    secondaryDate: newSecondaryDay,
                });
                setIsAnimating(false);
            }
        })

        tl.to(animationState, {
            firstDate: newFirstDate,
            secondaryDate: newSecondaryDay,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
                setDates({
                    firstDate: Math.round(animationState.firstDate),
                    secondaryDate: Math.round(animationState.secondaryDate),
                })
            },
        })

    }, {dependencies:[dateList, duration]})

    return (
        <div className={styles.container}>
            <span>{dates.firstDate}</span>
            <span>{dates.secondaryDate}</span>
        </div>
    )
}