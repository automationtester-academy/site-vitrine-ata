import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../../assets/css/Calendar.css'
import ATAWhiteLogo from '../../assets/logos/ATAWhiteLogo'


export default function ReservationSection() {


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
                            <DateCalendar className="calendar-style" />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='reservation-container bg-white w-1/4 p-3'>
                    <div className=''>

                        <div>
                            <h3 className='font-bold'>Durée de rendez-vous</h3>
                            <div className='rounded flex justify-center border border-[#475A74]'>
                                <span className='text-[#475A74]'>15</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}