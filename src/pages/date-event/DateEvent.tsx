import { FC, useRef, useState } from "react"
import { Сarousel } from "../../components/date-event/carusel/Сarousel";
import { CustomSwiper } from "../../components/date-event/custom-swiper/CustomSwiper";
import { Stepper } from "../../components/ui/stepper/Stepper";
import { Indicator } from "../../components/ui/indicator/Indicator";
import { historicalDates } from '../../lib/data/historicalDatesData'
import { DateRange } from "../../components/date-event/date-range/DateRange";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './DateEvent.module.scss'

export const DateEventContainer: FC = () => {

    const [selectedSection, setSelectedSection] = useState<number>(0);
    const duration = useRef(1.2);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <div className={styles.title}>
                        <div className={styles.gradient_line}></div>
                        <span>
                            Исторические<br/>даты
                        </span>
                    </div>
                    <DateRange duration={duration.current} list={historicalDates[selectedSection].dates}/>
                </div>
                <Сarousel
                    historicalDates={historicalDates}
                    selectedSection={selectedSection}
                    onSectionChange={setSelectedSection}
                    duration={duration.current}
                />
                <div className={styles.bottom}>
                    <CustomSwiper 
                        list={historicalDates[selectedSection].dates}
                        duration={duration.current}
                        title={historicalDates[selectedSection].title}
                    />
                    <Stepper 
                        count={selectedSection}
                        max={historicalDates.length}
                        onSectionChange={setSelectedSection}
                        duration={duration.current}
                    />
                    <Indicator
                        length={historicalDates.length}
                        selectedIndex={selectedSection}
                        onSectionChange={setSelectedSection}
                        duration={duration.current}
                    />
                </div>
                <div className={styles.line_h}></div>
                <div className={styles.line_v}></div>
            </div>
        </div>
    )
}