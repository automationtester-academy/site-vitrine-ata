import "../../assets/css/style.css";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import FirstName from "../../components/Contact_Form/Formcomponents/FirstName";
import LastName from "../../components/Contact_Form/Formcomponents/LastName.jsx";
import PhoneNumber from "../../components/Contact_Form/Formcomponents/PhoneNumber.jsx";
import Email from "../../components/Contact_Form/Formcomponents/Email.jsx";
import Message from "../../components/Contact_Form/Formcomponents/Message.jsx";
import SendMessage from "../../components/Contact_Form/Formcomponents/SendMessage.jsx";
import PrivacyPolicy from "../../components/Contact_Form/Formcomponents/PrivacyPolicy";
import axios from "axios";

export default function ThirdSection({ date, time, setReserveDate, setReserveTime }) {
    const form = useRef();
    const [isChecked1, setChecked1] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
        appointment_date: null,
        appointment_time: null
    });
    console.log(date + ' ' + time);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            appointment_date: date,
            appointment_time: time
        }));
    }, [date, time]);

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isChecked1) {
            toast.error("Veuillez accepter les champs obligatoires pour continuer.");
            return;
        }

        if (!date && !time) {
            toast.error("Veuillez choisir un date de rondez-vous pour continuer.");
            return;
        }

        console.log(formData);

        axios.post('http://127.0.0.1:8000/api/reserve/appointment/', formData)
            .then(res => {
                console.log(res.data.message);
                toast.success(res.data.message);
                setReserveDate(null);
                setReserveTime(null);
                e.target.reset();
            })
            .catch(error => {
                if (error.response.status == 422) {
                    toast.error(error.response.data.errors);
                }
            })

        // emailjs.sendForm('service_j6ah8nq', 'template_dcvddqj', form.current, 'zS56IQ0vpT9z2884L')
        //     .then(
        //         (result) => {
        //             toast.success("Le message a été envoyé avec succès");
        //             e.target.reset();

        //         },
        //         (error) => {
        //             toast.error(error.text);
        //         }
        //     );
    };

    return (
        <>
            <div className="relative">
                <div className="second-contact-background"></div>
                <div className="second-contact-background-text flex justify-center">
                    <h2 className="text-white font-bold text-3xl">Envoyez-nous<span className="text-[#39DDF5]"> un message !</span></h2>
                </div>
            </div>
            <Toaster />
            <div className="min-h-screen .bg-slate-900 text-amber-50 overflow-x-hidden h-full w-[98vw] flex !justify-center m-auto">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-10 justify-center">
                        <div className="lg:w-1/2 lg:mx-10">
                            <form className={'relative mb-[10%] mt-6 max-sm:mt-6'} ref={form} onSubmit={sendEmail}>
                                <div className="-mx-2 md:items-center md:flex">
                                    <FirstName onInputChange={handleInputChange} />
                                    <LastName onInputChange={handleInputChange} />
                                </div>
                                <div className="-mx-2 md:items-center md:flex">
                                    <PhoneNumber onInputChange={handleInputChange} />
                                    <Email onInputChange={handleInputChange} />
                                </div>
                                <Message onInputChange={handleInputChange} />
                                <PrivacyPolicy
                                    isChecked1={isChecked1}
                                    setChecked1={setChecked1}
                                />
                                <SendMessage />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
