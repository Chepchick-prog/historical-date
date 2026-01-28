export interface Date {
    date: number;
    description: string;
}

export interface HistoricalDates {
    title: string;
    dates: Date[]
}

export const historicalDates: HistoricalDates[] = [
    {
        title: '',
        dates: [
            {
                date: 1995,
                description: 'Основание онлайн-аукциона eBay программистом Пьером Омидьяром'
            },
            {
                date: 2003,
                description: 'Запуск видеоигры World of Warcraft компанией Blizzard Entertainment'
            },
            {
                date: 2011,
                description: 'Первый запуск сервиса Spotify на территории США'
            },
            {
                date: 2014,
                description: 'Продажа WhatsApp компании Facebook за 19 миллиардов долларов'
            },
            {
                date: 2018,
                description: 'Первый полет гиперзвукового самолета Stratolaunch'
            }
        ]
    },
    {
        title: 'Открытия и изобретения',
        dates: [
            {
                date: 1991,
                description: 'Создание первого веб-сайта в ЦЕРНе'
            },
            {
                date: 1999,
                description: 'Изобретение технологии Bluetooth шведской компанией Ericsson'
            },
            {
                date: 2005,
                description: 'Первый успешный полет частного космического корабля SpaceShipOne'
            },
            {
                date: 2013,
                description: 'Запуск проекта по расшифровке генома человека стоимостью 1000$'
            },
            {
                date: 2016,
                description: 'Обнаружение гравитационных волн от слияния черных дыр'
            },
            {
                date: 2020,
                description: 'Разработка первых вакцин против COVID-19 на основе мРНК'
            }
        ]
    },
    {
        title: 'Культура и развлечения',
        dates: [
            {
                date: 1996,
                description: 'Выход первого эпизода аниме "Покемон" в Японии'
            },
            {
                date: 2002,
                description: 'Премьера фильма "Властелин колец: Две крепости"'
            },
            {
                date: 2006,
                description: 'Запуск сервиса Netflix для потокового видео'
            },
            {
                date: 2010,
                description: 'Выход первого эпизода сериала "Игра престолов"'
            },
            {
                date: 2015,
                description: 'Премьера фильма "Звездные войны: Пробуждение силы"'
            },
            {
                date: 2019,
                description: 'Фильм "Мстители: Финал" становится самым кассовым в истории'
            }
        ]
    },
    {
        title: '',
        dates: [
            {
                date: 1992,
                description: 'Распад Чехословакии на Чехию и Словакию'
            },
            {
                date: 2004,
                description: 'Вступление 10 новых стран в Европейский союз'
            },
            {
                date: 2011,
                description: 'Арабская весна: революции в Тунисе, Египте и Ливии'
            },
            {
                date: 2016,
                description: 'Референдум о выходе Великобритании из ЕС (Brexit)'
            },
            {
                date: 2021,
                description: 'Захват власти талибами в Афганистане после вывода войск США'
            }
        ]
    },
    {
        title: 'Технологический прорыв',
        dates: [
            {
                date: 1998,
                description: 'Основание компании PayPal для онлайн-платежей'
            },
            {
                date: 2007,
                description: 'Анонс первого поколения электронных книг Amazon Kindle'
            },
            {
                date: 2009,
                description: 'Создание криптовалюты Биткоин Сатоши Накамото'
            },
            {
                date: 2013,
                description: 'Презентация умных часов Apple Watch'
            },
            {
                date: 2016,
                description: 'Победа AlphaGo над чемпионом мира в игре Го'
            },
            {
                date: 2023,
                description: 'Революция в генеративном ИИ с запуском Midjourney и Stable Diffusion'
            }
        ]
    },
    {
        title: 'Спорт',
        dates: [
            {
                date: 1994,
                description: 'Чемпионат мира по футболу в США, победа Бразилии'
            },
            {
                date: 2000,
                description: 'Летние Олимпийские игры в Сиднее, Австралия'
            },
            {
                date: 2008,
                description: 'Олимпийские игры в Пекине с рекордным числом участников'
            },
            {
                date: 2014,
                description: 'Чемпионат мира по футболу в Бразилии, победа Германии'
            },
            {
                date: 2018,
                description: 'Зимние Олимпийские игры в Пхенчхане, Южная Корея'
            },
            {
                date: 2022,
                description: 'Чемпионат мира по футболу в Катаре, победа Аргентины'
            }
        ]
    }
];