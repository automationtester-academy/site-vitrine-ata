import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../../assets/css/Calendar.css'
import ATAWhiteLogo from '../../assets/logos/ATAWhiteLogo'


export default function CalendarSection() {


    return (
        <>
            <div className='flex justify-center bg-red-700'>
                <div className='flex flex-col bg-[#475A74] w-1/4 pt-2'>
                    <div className='flex flex justify-center'>
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
                <div className='bg-gray-200 w-1/4 p-3'>
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