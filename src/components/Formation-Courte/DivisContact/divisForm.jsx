import React, { useState } from 'react';
import CompanyName from "./formInputs/CompanyName";
import EmailAddress from "./formInputs/emailAddress";
import Formation from "./formInputs/Formation";
import ModeDeFormation from "./formInputs/ModeDeFormation";
import NumberOfCondidates from "./formInputs/NumberOfcondidate";
import StartingDate from "./formInputs/startingDate";
import SendMessage from "./formInputs/sendMessage";
import ContactImg from "./ContactImg";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import "../../../assets/css/style.css";

export default function DivisForm() {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [formation, setFormation] = useState("");
    const [modeDeFormation, setModeDeFormation] = useState("");
    const [numberOfCondidates, setNumberOfCondidates] = useState("");
    const [startingDate, setStartingDate] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!companyName) {
            newErrors.companyName = "Le nom de l'entreprise est obligatoire.";
            toast.error(newErrors.companyName);
            setErrors(newErrors);
            return false;
        }

        if (!email) {
            newErrors.email = "L'email est obligatoire.";
            toast.error(newErrors.email);
            setErrors(newErrors);
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "L'adresse e-mail est invalide.";
            toast.error(newErrors.email);
            setErrors(newErrors);
            return false;
        }

        if (!formation) {
            newErrors.formation = "La formation est obligatoire.";
            toast.error(newErrors.formation);
            setErrors(newErrors);
            return false;
        }

        if (!modeDeFormation) {
            newErrors.modeDeFormation = "Le mode de formation est obligatoire.";
            toast.error(newErrors.modeDeFormation);
            setErrors(newErrors);
            return false;
        }

        if (!numberOfCondidates) {
            newErrors.numberOfCondidates = "Le nombre de candidats est obligatoire.";
            toast.error(newErrors.numberOfCondidates);
            setErrors(newErrors);
            return false;
        } else if (isNaN(numberOfCondidates)) {
            newErrors.numberOfCondidates = "Le nombre de candidats doit être un nombre.";
            toast.error(newErrors.numberOfCondidates);
            setErrors(newErrors);
            return false;
        }

        if (!startingDate) {
            newErrors.startingDate = "La date de début est obligatoire.";
            toast.error(newErrors.startingDate);
            setErrors(newErrors);
            return false;
        }

        setErrors(newErrors);
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        const formattedData = {
            companyName,
            numberOfCondidates,
            email,
            formation,
            modeDeFormation,
            startingDate
        };

        // console.log("Data to be sent:", formattedData);

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
                <div className="divisForm flex ">
                    <div className="divisForm flex items-center lg:-mx-10 justify-center w-[85%] m-auto">
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
            </div>
        </>
    );
}

