import "../../assets/css/style.css";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import FirstName from "../../components/Contact_Form/Formcomponents/FirstName";
import LastName from "../../components/Contact_Form/Formcomponents/LastName.jsx";
import PhoneNumber from "../../components/Contact_Form/Formcomponents/PhoneNumber.jsx";
import Email from "../../components/Contact_Form/Formcomponents/Email.jsx";
import Message from "../../components/Contact_Form/Formcomponents/Message.jsx";
import SendMessage from "../../components/Contact_Form/Formcomponents/SendMessage.jsx";
export default function ThirdSection (){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_j6ah8nq', 'template_dcvddqj', form.current, {
                publicKey: 'zS56IQ0vpT9z2884L',
            })
            .then(
                () => {
                    toast.success( "Le message a été envoyé avec succès");
                },
                (error) => {
                    toast.error( error.text);
                },
            );
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
        <div className="min-h-screen .bg-slate-900 text-amber-50 overflow-x-hidden  w-[85vw]  flex !justify-center m-auto">
            <div className="container px-6 py-10 mx-auto ">
                <div className="lg:flex lg:items-center lg:-mx-10 justify-center">
                    <div className="lg:w-1/2 lg:mx-10 ">
      
                        <form className={'relative mb-[10%] mt-6 max-sm:mt-6'} ref={form} onSubmit={sendEmail}>
                            <div className="-mx-2 md:items-center md:flex">
                                <FirstName />
                                <LastName />
                            </div>
                            <div className="-mx-2 md:items-center md:flex ">
                                <PhoneNumber />
                                <Email />
                            </div>
                                <Message />
                                <SendMessage />
                        </form>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}