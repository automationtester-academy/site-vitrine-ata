import CompanyName from "./formInputs/CompanyName";
import EmailAddress from "./formInputs/emailAddress";
import Formation from "./formInputs/Formation";
import ModeDeFormation from "./formInputs/ModeDeFormation";
import NumberOfCondidates from "./formInputs/NumberOfcondidate";
import StartingDate from "./formInputs/startingDate";
import SendMessage from "./formInputs/sendMessage";
import ContactImg from "./ContactImg";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import "../../../assets/css/style.css";
import axios from "axios";

export default function DivisForm() {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [formation, setFormation] = useState("");
    const [modeDeFormation, setModeDeFormation] = useState("");
    const [numberOfCondidates, setNumberOfCondidates] = useState("");
    const [startingDate, setStartingDate] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            companyName,
            numberOfCondidates,
            email,
            formation,
            modeDeFormation,
            startingDate
        };

        console.log("Data to be sent:", formattedData);

        try {
            const response = await axios.post(
                "https://hook.eu2.make.com/c4oiyt4ndhw4d5jimeb2ifw1abus3s99",
                formattedData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Response from Make:", response.data);
            toast.success("Votre message a été envoyé avec succès !");
        } catch (error) {
            console.error("Error sending data:", error);
            toast.error("Une erreur s'est produite lors de l'envoi du message.");
        }

        setCompanyName("");
        setEmail("");
        setFormation("");
        setModeDeFormation("");
        setNumberOfCondidates("");
        setStartingDate("");
    };

    return (
        <>
            <Toaster />
            <div className="container px-6 py-10 mx-auto flex items-center justify-center">
                <div className="divisForm flex items-center lg:-mx-10 justify-between w-[85%] m-auto">
                    <div className="lg:w-1/2 lg:mx-10">
                        <form className="relative mb-[10%] mt-6 max-sm:mt-6" onSubmit={handleSubmit}>
                            <div className="-mx-2 md:items-center md:flex mb-16">
                                <CompanyName value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                <EmailAddress value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="-mx-2 md:items-center md:flex mt-16 flex max-sm:gap-1 max-sm:flex-col">
                                <Formation value={formation} onChange={(e) => setFormation(e.target.value)} />
                                <ModeDeFormation value={modeDeFormation} onChange={(e) => setModeDeFormation(e.target.value)} />
                            </div>
                            <div className="-mx-2 md:items-center md:flex mt-16">
                                <NumberOfCondidates value={numberOfCondidates} onChange={(e) => setNumberOfCondidates(e.target.value)} />
                                <StartingDate value={startingDate} onChange={(e) => setStartingDate(e.target.value)} />
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
    );
}
