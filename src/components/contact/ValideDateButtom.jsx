import axios from "axios";
import { format } from "date-fns";
import { useState } from "react";
export default function ValideDateButtom({ date, time, setReserveDate, setReserveTime }) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [responseError, setResponseError] = useState(null);
    const [responseOk, setResponseOk] = useState(null);

    const parseFrenchDate = (dateStr) => {
        const monthMap = {
            'janvier': 0,
            'février': 1,
            'mars': 2,
            'avril': 3,
            'mai': 4,
            'juin': 5,
            'juillet': 6,
            'août': 7,
            'septembre': 8,
            'octobre': 9,
            'novembre': 10,
            'décembre': 11
        };

        const [day, month, year] = dateStr.split(' ');
        return new Date(year, monthMap[month.toLowerCase()], day);
    };

    // Check if the date string needs to be parsed
    const checkDate = isNaN(Date.parse(date)) ? parseFrenchDate(date) : new Date(date);

    // Correct the format string
    const finalDate = format(checkDate, 'dd-MM-yyyy');


    const validateTheReservationDate = () => {
        setLoading(true);

        let currentDate = new Date();
        let [day, month, year] = finalDate.split('-');
        let [hours, minutes] = time.split(':');
        let finalDateTime = new Date(year, month - 1, day, hours, minutes);

        if (finalDateTime < currentDate) {
            setResponseOk(null);
            setResponseError('Date invalide');
            setLoading(false);
            setError(true);
            setReserveDate(null);
            setReserveTime(null);
            return;
        }

        let dayString = finalDateTime.toLocaleDateString('en-US', { weekday: 'long' });

        if (dayString === 'Sunday' || dayString === 'Saturday') {
            setResponseOk(null);
            setResponseError('Vous essayez de choisir les jours du week-end!');
            setLoading(false);
            setError(true);
            setReserveDate(null);
            setReserveTime(null);
            return;
        }

        axios.get(`http://127.0.0.1:8000/api/validate/date/${finalDate}/${time}`)
            .then(res => {
                // console.log(res.status);
                setLoading(false);
                setResponseError(null);
                setResponseOk(res.data.message);
                setReserveDate(finalDate);
                setReserveTime(time);
                setError(true);
            })
            .catch(error => {
                setLoading(false);
                setResponseOk(null);
                // console.log(error.response.status); // 422
                setResponseError(error.response.data.message);
                setReserveDate(null);
                setReserveTime(null);
                setError(true);
            })
    }

    return (
        <>
            <div className={`w-[50%] px-16 py-5 contact-valide-button flex ${error ? 'justify-between' : 'justify-end'} items-center`}>
                <div className="error-section">
                    {responseError &&
                        <span className="text-red-500">
                            {responseError}
                        </span>
                    }
                    {responseOk &&
                        <span className="text-green-500">
                            {responseOk}
                        </span>
                    }
                </div>
                <div className="p-0.5 flex hover:bg-none hover:bg-cyan-600 bg-gradient-to-r  from-[#3390B2] to-[#87E5EC] rounded-md">
                    <button onClick={validateTheReservationDate} className="rounded-md flex justify-center items-center h-full bg-[#071323] w-full text-xl p-2 px-5 hover:bg-cyan-600">
                        <span className="text-white flex justify-between items-center">
                            {loading &&
                                <svg
                                    className="animate-spin h-5 w-5 mr-3 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            }
                            Valide
                        </span>
                    </button>
                </div>

            </div>
        </>
    )
}
