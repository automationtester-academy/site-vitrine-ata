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

        const aboutUs = `[Company Email: ${email}], [Formation souhaité: ${formation}], [Mode de formation: ${modeDeFormation}], [Date de début souhaitée: ${startingDate}]`;

        const formattedData = {
            properties: [
                { name: "name", value: companyName },
                { name: "numberofemployees", value: numberOfCondidates },
                { name: "about_us", value: aboutUs }
            ]
            // companyName,
            // numberOfCondidates,
            // aboutUs
        };

        console.log("Data to be sent:", formattedData);

        try {
            const response = await axios.post(
                "https://hook.eu2.make.com/gwppk44w2vxfiebchcmnr1rc6vn79c3c",
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
                                {/* <CompanyName value={companyName} onChange={(e) => setCompanyName(e.target.value)} /> */}
                                <div className="flex-1 px-2 max-sm:mb-5">
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input placeholder="" name="name" type="text" 
                                            value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                                            className="text-white peer h-full w-full border-b border-blue-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-white outline outline-0 transition-all placeholder-shown:border-blue-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-whiteplaceholder:opacity-0 focus:placeholder:opacity-100 " />
                                        <label
                                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-normal">
                                            Nome de l'entreprise <span className={'text-cyan-400 ml-1'}>*</span>
                                        </label>
                                    </div>
                                </div>
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
