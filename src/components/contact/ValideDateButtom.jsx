import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";
export default function ValideDateButtom({date, time, setReserveDate, setReserveTime }) {

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

    // console.log(finalDate + ' ' + props.time);

    const validateTheReservationDate = () => {
        axios.get(`http://127.0.0.1:8000/api/validate/date/${finalDate}/${time}`)
            .then(res => {
                // console.log(res.status);
                toast.success(res.data.message);
                setReserveDate(finalDate);
                setReserveTime(time);
            })
            .catch(error => {
                // console.log(error.response.status); // 422
                toast.error(error.response.data.message); // error message
                setReserveDate(null);
                setReserveTime(null);
            })
    }

    return (
        <>
            <div className="p-0.5 flex hover:bg-none hover:bg-cyan-600 bg-gradient-to-r  from-[#3390B2] to-[#87E5EC] rounded-md">
                <button onClick={validateTheReservationDate} className="rounded-md flex justify-center h-full bg-[#071323] w-full text-xl p-2 px-5 hover:bg-cyan-600">
                    <span className="text-white">
                        Valide
                    </span>
                </button>
            </div>
        </>
    )
}
