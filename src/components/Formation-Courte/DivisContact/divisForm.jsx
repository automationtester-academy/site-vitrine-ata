import CompanyName from "./formInputs/CompanyName";
import EmailAddress from   "./formInputs/emailAddress";
import Formation from "./formInputs/Formation";
import ModeDeFormation from "./formInputs/ModeDeFormation";
import NumberOfCondidates from  "./formInputs/NumberOfcondidate";
import StartingDate from "./formInputs/startingDate";
import SendMessage from  "./formInputs/sendMessage"
import ContactImg from "./ContactImg";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import {useRef} from "react";
import "../../../assets/css/style.css"


export default function divisForm()
{

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_j6ah8nq', 'template_j10r9jv', form.current, {
                publicKey: 'zS56IQ0vpT9z2884L',
            })
            .then(
                () => {
                    toast.success( "Le message a été envoyé avec succès");
                    e.target.reset();
                },
                (error) => {
                    toast.error( error.text);
                },
            );
    };


    return (
        <>
        <Toaster />

            <div className="container px-6 py-10 mx-auto flex items-center justify-center">
                <div className="divisForm flex items-center  lg:-mx-10 justify-between w-[85%]  m-auto">
                    <div className="lg:w-1/2 lg:mx-10">
                        <form className={'relative mb-[10%] mt-6 max-sm:mt-6'} ref={form} onSubmit={sendEmail}>
                            <div className="-mx-2 md:items-center md:flex mb-16">
                                <CompanyName />
                                <EmailAddress />
                            </div>
                            <div className="-mx-2 md:items-center md:flex mt-16 flex max-sm:gap-1 max-sm:flex-col">
                                <Formation />
                                <ModeDeFormation />
                            </div>
                            <div className="-mx-2 md:items-center md:flex mt-16">               
                                <NumberOfCondidates />
                                <StartingDate />
                            </div>
                            <SendMessage />
                        </form>
                    </div>
                    <div className="divisrightForm lg:w-1/2">
                        <ContactImg />
                    </div>
                </div>
            </div>
        </>
    )
}