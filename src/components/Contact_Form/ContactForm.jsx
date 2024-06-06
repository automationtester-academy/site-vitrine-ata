import ContactImg from "./ContactImg.jsx";
import "../../assets/css/style.css";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import FirstName from "./Formcomponents/FirstName.jsx";
import LastName from "./Formcomponents/LastName.jsx";
import PhoneNumber from "./Formcomponents/PhoneNumber.jsx";
import Email from "./Formcomponents/Email.jsx";
import Message from "./Formcomponents/Message.jsx";
import SendMessage from "./Formcomponents/SendMessage.jsx";

function ContactForm() {
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

    return <>
        <Toaster />
        <section className="min-h-screen .bg-slate-900 text-amber-50 overflow-x-hidden  w-[85vw] m-auto">
            <div className={"title"}>
                <h1 className={"contactUS"}>Contactez<span>-Nous</span></h1>
            </div>
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-10 justify-between">
                    <div className="lg:w-1/2 lg:mx-10">
                        <p className="mt-4 text-white text-sm">
                            Nous sommes ravis de vous entendre ! Veuillez utiliser ce formulaire pour nous envoyer vos questions, commentaires ou demandes de renseignements. Remplissez simplement les champs ci-dessous et nous vous répondrons dans les plus brefs délais.
                        </p>
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
                    <ContactImg/>

                </div>
            </div>
        </section>
    </>
}

export default ContactForm;