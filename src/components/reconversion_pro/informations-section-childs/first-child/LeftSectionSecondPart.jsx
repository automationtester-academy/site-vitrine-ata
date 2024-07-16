import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { addDays, addMonths, format, getDay } from 'date-fns';

export default function LeftSectionSecondPart() {
    
    const intervalTime = 3000;
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const intervalRef = useRef(null);
    const [mondays, setMondays] = useState([]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % spanContent.length);
        }, intervalTime);

        return () => clearInterval(intervalRef.current);
    }, []);

    const getTheNextFourMonthlyMondays = () => {
        const today = new Date();
        const dayOfWeek = getDay(today);
        const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7;
    
        const mondays = [];
        let nextMonday = addDays(today, daysUntilNextMonday);
    
        for (let i = 0; i < 4; i++) {
            mondays.push(format(nextMonday, 'dd/MM/yyyy'));
            nextMonday = addMonths(nextMonday, 4);
            // Find the next Monday after adding 4 months
            nextMonday = addDays(nextMonday, (8 - getDay(nextMonday)) % 7 || 7);
        }
    
        return mondays;
    }

    useEffect(() => {
        setMondays(getTheNextFourMonthlyMondays());
    }, [])

    const spanContent = [mondays[0], 'Completed'];
    return (
        <>
            <div className="content-div py-8">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center mb-7">
                        <div className="mb-5">
                            <h4 className="text-3xl text-center font-bold text-[#39DDF5] reconversion-second-section-secondLeft-title">Nos prochaines rentrées </h4>
                        </div>
                        <div className="">
                            <p className="text-white text-center text-2xl reconversion-second-section-text">
                                Sortez les calendriers, voici les dates de rentrée !
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-11 w-full date-reconversion-container px-8">
                            <div className="flex justify-around reservations-date-reconversion-container mb-7">
                                <div className="py-2 reservations-date-reconversion px-6 w-[35%] relative overflow-hidden flex justify-center items-center rounded bg-white">
                                    {/* <span className="text-[#39DDF5] font-bold">19 / 02 / 2024</span> */}
                                    {spanContent.map((text, index) => (
                                        <ContentText
                                            key={index}
                                            text={text}
                                            isVisible={index === currentTextIndex}
                                        />
                                    ))}
                                </div>
                                <div className="py-2 reservations-date-reconversion px-6 w-[35%] flex justify-center rounded bg-gradient-to-r from-[#1197BE] to-[#39DDF5]">
                                    <span className="text-white font-bold">{mondays[1]}</span>
                                </div>
                            </div>
                            <div className="flex justify-around reservations-date-reconversion-container">
                                <div className="py-2 reservations-date-reconversion px-6 w-[35%] flex justify-center rounded bg-gradient-to-r from-[#1197BE] to-[#39DDF5]">
                                    <span className="text-white font-bold">{mondays[2]}</span>
                                </div>
                                <div className="py-2 reservations-date-reconversion px-6 w-[35%] flex justify-center rounded bg-gradient-to-r from-[#1197BE] to-[#39DDF5]">
                                    <span className="text-white font-bold">{mondays[3]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[40%] reconversion-sinscrire-button">
                            <div className="p-0.5 flex hover:bg-none hover:bg-cyan-600 bg-gradient-to-r  from-[#3390B2] to-[#87E5EC] rounded-md">
                                <Link to={'/'} className="rounded-md flex justify-center h-full bg-[#071323] w-full text-xl p-2 hover:bg-cyan-600">
                                    <span className="text-white">
                                        S’inscrire
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ContentText({ text, isVisible }) {
    return (
        <>
            <span
                className={`absolute text-[#39DDF5] self-center text-center font-bold inset-0 transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >{text}</span>
        </>
    )
}