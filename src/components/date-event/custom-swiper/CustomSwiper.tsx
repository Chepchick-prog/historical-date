import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css'
import { NavButton } from "./ui/button/NavButton";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

interface Item {
    date: number | string;
    description: string;
}

gsap.registerPlugin(useGSAP);

export const CustomSwiper: FC<{
    title?: string;
    list: Item[];
    duration: number,
}> = ({title, list, duration}) => {

    const container = useRef<(HTMLDivElement | null)>(null);
    const [dateList, setDateLits] = useState<Item[]>([...list])

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.to('.swiper_container', {
            opacity: 0,
            duration: duration / 2,
        })
        .add(() => setDateLits([...list]))
        .to('.swiper_container', {
            opacity: 1,
            duration: duration / 2,
            // delay: duration / 2,
        });
    }, {dependencies: [list], scope: container})
    
    return (
        <div ref={container}>
            <div className="swiper_container">
                {title && (
                    <span className='swiper_mainTitle'>
                        {title}
                    </span>
                )}
                <NavButton className="swiper__nav_button_prev" />
                <Swiper
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper__nav_button_next',
                        prevEl: '.swiper__nav_button_prev',
                        disabledClass: 'nav_button_disabled',
                    }}
                    mousewheel
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },

                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        
                        1640: {
                            slidesPerView: 3,
                            spaceBetween: 80,
                        },

                    }}
                    modules={[Navigation, Mousewheel]}
                    className='custom_swiper'
                >
                    {dateList.map((item, index) => (
                        <SwiperSlide key={index}>
                            <span className="swiper_card_date">{item.date}</span>
                            <span className="swiper_card_description">
                                {item.description}
                            </span>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <NavButton className="swiper__nav_button_next" mirror />
            </div>
        </div>
    )
}