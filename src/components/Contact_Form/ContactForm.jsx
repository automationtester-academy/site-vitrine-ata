import ContactImg from "./ContactImg.jsx";
import "../../assets/css/style.css";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import FirstName from "./Formcomponents/FirstName.jsx";
import LastName from "./Formcomponents/LastName.jsx";
import PhoneNumber from "./Formcomponents/PhoneNumber.jsx";
import Email from "./Formcomponents/Email.jsx";
import Message from "./Formcomponents/Message.jsx";
import SendMessage from "./Formcomponents/SendMessage.jsx";
import EmailAddress from "../Formation-Courte/DivisContact/formInputs/emailAddress.jsx";
import axios from "axios";

function ContactForm() {
    // const form = useRef();


    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm('service_j6ah8nq', 'template_dcvddqj', form.current, {
    //             publicKey: 'zS56IQ0vpT9z2884L',
    //         })
    //         .then(
    //             () => {
    //                 toast.success( "Le message a été envoyé avec succès");
    //                 e.target.reset();
    //             },
    //             (error) => {
    //                 toast.error( error.text);
    //             },
    //         );
    // };
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!firstName) {
            newErrors.firstName = "Le prénom est obligatoire.";
            toast.error(newErrors.firstName);
            setErrors(newErrors);
            return false;
        }

        if (!lastName) {
            newErrors.lastName = "Le nom de famille est obligatoire.";
            toast.error(newErrors.lastName);
            setErrors(newErrors);
            return false;
        }

        if (!phoneNumber) {
            newErrors.phoneNumber = "Le numéro de téléphone est obligatoire.";
            toast.error(newErrors.phoneNumber);
            setErrors(newErrors);
            return false;
        } else if (!/^(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(phoneNumber)) {
            newErrors.phoneNumber = "Le numéro de téléphone est invalide.";
            toast.error(newErrors.phoneNumber);
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
        if (!message) {
            newErrors.message = "Le message est obligatoire.";
            toast.error(newErrors.message);
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
            firstName,
            lastName,
            email,
            phoneNumber,
            message,
        };

        // console.log("Data to be sent:", formattedData);

        try {
            const response = await axios.post(
                "https://hook.eu2.make.com/8r39a1re7utv2nhk70qaj29mfb3c1y7j",
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

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
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
                        <form className={'relative mb-[10%] mt-6 max-sm:mt-6'} onSubmit={handleSubmit}>
                            <div className="-mx-2 md:items-center md:flex">
                                <FirstName value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <LastName value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="-mx-2 md:items-center md:flex">
                                <PhoneNumber value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                <Email value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="-mx-2 md:items-center md:flex">
                                <Message value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <SendMessage />
                        </form>
                    </div>
                    <ContactImg />

                </div>
            </div>
        </section>
    </>
}

export default ContactForm;