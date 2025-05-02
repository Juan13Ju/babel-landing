import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {

    const {t} = useTranslation()
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
                    {t('hero.tagline')}
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    <span className="color-secondary">Learn</span> languages. <span className="color-secondary">Make</span> friends. <span className="color-secondary">Instantly</span>.
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                    Choose your language. Hop into live video video chats with people around the world. Practice, laugh and improve
                    together - anytime, anywhere.
                </p>
                <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                    Join the waitlist
                </button>
                <p className="text-sm text-slate-500 mt-2">
                    Be among the first to connect!
                </p>

            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    { id: 1, src: "https://flagcdn.com/w320/us.png" }, // 🇺🇸 United States
    { id: 2, src: "https://flagcdn.com/w320/gb.png" }, // 🇬🇧 United Kingdom
    { id: 3, src: "https://flagcdn.com/w320/mx.png" }, // 🇲🇽 Mexico
    { id: 4, src: "https://flagcdn.com/w320/es.png" }, // 🇪🇸 Spain
    { id: 5, src: "https://flagcdn.com/w320/br.png" }, // 🇧🇷 Brazil
    { id: 6, src: "https://flagcdn.com/w320/fr.png" }, // 🇫🇷 France
    { id: 7, src: "https://flagcdn.com/w320/de.png" }, // 🇩🇪 Germany
    { id: 8, src: "https://flagcdn.com/w320/it.png" }, // 🇮🇹 Italy
    { id: 9, src: "https://flagcdn.com/w320/ru.png" }, // 🇷🇺 Russia
    { id: 10, src: "https://flagcdn.com/w320/cn.png" }, // 🇨🇳 China
    { id: 11, src: "https://flagcdn.com/w320/jp.png" }, // 🇯🇵 Japan
    { id: 12, src: "https://flagcdn.com/w320/kr.png" }, // 🇰🇷 South Korea
    { id: 13, src: "https://flagcdn.com/w320/in.png" }, // 🇮🇳 India
    { id: 14, src: "https://flagcdn.com/w320/tr.png" }, // 🇹🇷 Turkey
    { id: 15, src: "https://flagcdn.com/w320/sa.png" }, // 🇸🇦 Saudi Arabia
    { id: 16, src: "https://flagcdn.com/w320/ng.png" }, // 🇳🇬 Nigeria
];


const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-[16/10] bg-white overflow-hidden flex items-center justify-center"
            // style={{
            //     backgroundImage: `url(${sq.src})`,
            //     backgroundSize: "cover",
            // }}
        >
            <img
                src={sq.src}
                alt="Flag"
                className="w-full h-full object-stretch"
            />
        </motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 max-w-full gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default Hero;