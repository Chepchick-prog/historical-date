import { FC, useEffect, useRef, useState, useTransition } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getDistributePoints } from "../../../lib/utils/getDistributePoints";
import { useElementSize } from "../../../lib/hooks/useElementSize";
import { HistoricalDates } from "../../../lib/data/historicalDatesData";

import styles from './Сarousel.module.scss'

interface Point {
    x: number;
    y: number;
}

gsap.registerPlugin(useGSAP);

export const Сarousel: FC<{
    historicalDates: HistoricalDates[];
    selectedSection: number;
    onSectionChange: (section: number) => void;
    duration?: number;
}> = ({selectedSection, historicalDates, duration = 1, onSectionChange }) => {
    
    const maxPoints = historicalDates.length;
    const mainCircle = useRef<(HTMLDivElement | null)>(null);
    const childCircles = useRef<(HTMLDivElement | null)[]>([]);
    const {ref, size} = useElementSize()
    const [isPending, startTransition] = useTransition();
    const [points, setPoints] = useState<Point[]>(getDistributePoints(maxPoints, size.width / 2))
    const [activeIndex, setActiveIndex] = useState<number>(selectedSection)
    const [activePoint, setActivePoint] = useState<Point | null>(points[activeIndex])
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setPoints(getDistributePoints(maxPoints, size.width / 2))
    }, [maxPoints, size])

    useEffect(() => {
        setActivePoint(points[selectedSection])
    }, [selectedSection, points])

    useGSAP(() => {
        startTransition(() => {
            if (!activePoint || !mainCircle.current) return;

            setIsAnimating(true)

            const point = points[selectedSection]

            const activeAngle = Math.atan2(activePoint.y, activePoint.x);
            const clickedAngle = Math.atan2(point.y, point.x);

            let angleDifference = activeAngle - clickedAngle;

            angleDifference = ((angleDifference + Math.PI) % (2 * Math.PI)) - Math.PI;

            if (Math.abs(angleDifference) > Math.PI) {
                angleDifference = angleDifference > 0 
                    ? angleDifference - 2 * Math.PI 
                    : angleDifference + 2 * Math.PI;
            }

            const rotationDegrees = (angleDifference * 180) / Math.PI;

            const tl = gsap.timeline({
                onComplete: () => {
                    setActiveIndex(selectedSection);
                    setActivePoint(point);
                    setIsAnimating(false);
                }
            })
            const titles: any = gsap.utils.toArray('.carusel_title')
            const prevTitle = titles[activeIndex];
            const newTitle = titles[selectedSection];

            tl.to(mainCircle.current, {
                rotation: `+=${rotationDegrees}`, 
                duration: duration,
            }, 0)
            .to(prevTitle, {
                opacity: 0, 
                duration: duration / 2,
            }, '<')
            .set(prevTitle, {display: 'none', opacity: 0}, '>')
            .set(newTitle, {display: 'block'}, '>')
            .to(newTitle, {
                opacity: 1,
                duration: duration / 2,
            }, '<')
            
            childCircles.current.forEach((circle) => {
                if (circle) {
                    tl.to(circle, {
                        rotation: `-=${rotationDegrees}`,
                        duration: duration,
                    }, 0);
                }
            });
        })
    }, {dependencies: [selectedSection, points], scope: mainCircle})

    const handlePointClick = (index: number) => {
        if(isAnimating || activeIndex === index) return;
        onSectionChange(index);
    };

    return (
        <div className={styles.carousel} ref={ref}>
            <div className={styles.circles} ref={mainCircle}>
                {points.map((point, index) => (
                    <div
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            childCircles.current[index] = el;
                        }}
                        className={`${styles.circle} ${activePoint?.x === point.x && activePoint?.y === point.y ? styles.active : ''}`}
                        style={{
                            left: `calc(50% + ${point.x}px)`,
                            top: `calc(50% + ${point.y}px)`
                        }}
                        onClick={() => handlePointClick(index)}
                    >
                        <span className={styles.number}>{index + 1}</span>
                        <span
                            className={`carusel_title ${styles.carousel_title}`}
                        >
                            {historicalDates[index].title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}