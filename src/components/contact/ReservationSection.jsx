import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../../assets/css/Calendar.css'
import ATAWhiteLogo from '../../assets/logos/ATAWhiteLogo'
import dayjs from 'dayjs';
import 'dayjs/locale/fr';


export default function ReservationSection() {


        const [selectedTime, setSelectedTime] = useState(null);
        const [selectedDate, setSelectedDate] = useState(null);

        const times = ['14:00', '14:15', '14:30', '14:35'];

        const handleButtonClick = (time) => {
            setSelectedTime(time);
        };

        const handleSelectedDate = (date) => {
            setSelectedDate(date);
        }

        console.log(dayjs(selectedDate).format('YYYY-MM-DD') + ' ' + selectedTime);


        return (
            <>
                <div className='pt-7 pb-2 flex justify-center'>
                    <div className='w-9/12 pl-10 max-sm:p-0'>
                        <p className='text-white max-lg:text-center max-md:text-center max-sm:text-center'>Réservez un rendez-vous en ligne avec un de nos Conseillers Formations.</p>
                    </div>

                </div>
                <div className='flex justify-center reservation-calendar-section mb-10'>
                    <div className='calendar-container flex flex-col bg-[#475A74] w-1/4 pt-2'>
                        <div className='flex justify-center'>
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
                                    <span className='text-[#475A74]'>15 min</span>
                                </div>
                            </div>
                            <div className=''>
                                <h3 className='font-bold'>Quelle heure vous convient le mieux ?</h3>
                                <h3>Affichage des heures pour <span className='font-bold'> 8 mars 2024</span></h3>
                            </div>
                            <div className=' mt-4'>
                                <button className='flex justify-between'>
                                    <h4 className='text-[#39DDF5] font-bold'>Europe/Paris</h4>
                                    <span className='ml-10'>icon</span>
                                </button>
                            </div>
                            {/* <div>
                            <div className='p-2'>
                                <button className='bg-white w-full text-center p-3 rounded border'>
                                    14:00
                                </button>
                            </div>
                            <div className='p-2'>
                                <button className='bg-white w-full text-center p-3 rounded border'>
                                    14:15
                                </button>
                            </div>
                            <div className='p-2'>
                                <button className='bg-white w-full text-center p-3 rounded border'>
                                    14:30
                                </button>
                            </div>
                            <div className='p-2'>
                                <button className='bg-white w-full text-center p-3 rounded border'>
                                    14:35
                                </button>
                            </div>
                        </div> */}
                            <div>
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
