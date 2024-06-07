import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { FaChevronDown } from 'react-icons/fa';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import '../../assets/css/Calendar.css'
import ATAWhiteLogo from '../../assets/logos/ATAWhiteLogo'
import dayjs from 'dayjs';
import 'dayjs/locale/fr';



export default function ReservationSection() {


    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const times = [];
    for (let hour = 9; hour < 17; hour++) {
        for (let minutes = 0; minutes < 60; minutes += 30) {
            const time = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            times.push(time);
        }
    }

    const handleButtonClick = (time) => {
        setSelectedTime(time);
    };

    const handleSelectedDate = (date) => {
        setSelectedDate(dayjs(date).format('YYYY-MM-DD'));
    }

    const formatDateToFrench = () => {
        if (selectedDate !== null) {
            const time = new Date(selectedDate);
            return format(time, 'd MMMM yyyy', { locale: fr });
        }
        const currentDate = new Date();
        return `${currentDate.getDate()} ${currentDate.toLocaleString('fr-FR', { month: 'long' })} ${currentDate.getFullYear()}`;
    }
    const dateValue = formatDateToFrench();

    //Hi Front-End developper
    //When you want to send the date that the user chooses, use this syntax before!!:
    // console.log(dateValue + ' ' + selectedTime);

    return (
        <>
            <div className='pt-7 pb-2 flex justify-center'>
                <div className='w-9/12 pl-10 max-sm:p-0'>
                    <p className='text-white max-lg:text-center max-md:text-center max-sm:text-center'>Réservez un rendez-vous en ligne avec un de nos Conseillers Formations.</p>
                </div>

            </div>
            <div className='flex justify-center reservation-calendar-section mb-10'>
                <div className='calendar-container flex flex-col bg-[#475A74] w-1/4 pt-2'>
                    <div className='flex flex justify-center'>
                        <ATAWhiteLogo />
                    </div>
                    <div className='flex justify-center pt-4 pb-2'>
                        <h4 className='text-white'>Parlons de votre project !</h4>
                    </div>
                    <div className=''>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
                            <DateCalendar className="calendar-style"
                                onChange={handleSelectedDate} />
                        </LocalizationProvider>
                    </div>

                </div>
                <div className='reservation-container bg-white w-1/4 p-3'>
                    <div className=''>
                        <div className='reservation-container-first-section mb-10'>
                            <h3 className='font-bold mb-3'>Durée de rendez-vous</h3>
                            <div className='rounded flex justify-center border border-gray-700'>
                                <span className='text-[#475A74]'>30 min</span>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='font-bold'>Quelle heure vous convient le mieux ?</h3>
                            <h3>Affichage des heures pour <span className='font-bold'> {dateValue}</span></h3>
                        </div>
                        <div className=' mt-4 flex justify-center'>
                            <button className='flex justify-between items-center w-11/12'>
                                <h4 className='text-[#39DDF5] font-bold'>Europe/Paris</h4>
                                <span className=''><FaChevronDown /></span>
                            </button>
                        </div>
                        <div className='h-60 reservetion-times-container'>
                            {times.map((time) => (
                                <div className='p-2' key={time}>
                                    <button
                                        className={`w-full text-center p-3 rounded border ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-white'
                                            }`}
                                        onClick={() => handleButtonClick(time)}
                                    >
                                        {time}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
