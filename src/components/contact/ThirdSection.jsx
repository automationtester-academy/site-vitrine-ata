import "../../assets/css/style.css";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SendMessage from "../../components/Contact_Form/Formcomponents/SendMessage.jsx";
import PrivacyPolicy from "../../components/Contact_Form/Formcomponents/PrivacyPolicy";

export default function ThirdSection() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked, setChecked] = useState(false);

  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!firstName || !lastName || !email || !phoneNumber || !message) {
        toast.error("Tous les champs sont obligatoires.");
        return;
      }
  
      const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if(!phoneNumberRegex.test(phoneNumber)){
        toast.error("Veuillez fournir un numéro de télèphone valid.");
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Veuillez fournir une adresse e-mail valide.");
        return;
      }
  
      if (!isChecked1) {
        toast.error("Veuillez accepter les champs obligatoires pour continuer.");
        return;
      }
  
      const data = {
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      };
  
      try {
        const response = await axios.post('https://hook.eu2.make.com/8r39a1re7utv2nhk70qaj29mfb3c1y7j', data, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log(response);
        toast.success("Votre message a été envoyé avec succès !");
      } catch (error) {
        console.error(error);
        toast.error("Une erreur s'est produite lors de l'envoi du message.");
      }
  
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setChecked("");
      setChecked1("");
    };
  


    return (
        <>
            <div className="relative">
                <div className="second-contact-background"></div>
                <div className="second-contact-background-text flex justify-center">
                    <h2 className="text-white font-bold text-3xl">Envoyez-nous<span className="text-[#39DDF5]"> un message !</span></h2>
                </div>
            </div>
            <div className="min-h-screen .bg-slate-900 text-amber-50 overflow-x-hidden h-full w-[98vw] flex !justify-center m-auto">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-10 justify-center">
                        <div className="lg:w-1/2 lg:mx-10">
                            <form onSubmit={handleSubmit} className={'relative mb-[10%] mt-6 max-sm:mt-6'}>
                                <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" 
                                            className=" peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0x" placeholder="Nom"  />
                                        
                                    </div>
                                </div>


                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} type={"text"}
                                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:color-white" placeholder="Prénom"/>
                                      
                                    </div>
                                </div>
                                    
                                </div>
                                <div className="-mx-2 md:items-center md:flex">
                                    

                                <div className="flex-1 px-2">

                                    <div className="relative h-11 w-full min-w-[200px] mt-9">
                                        <input type="tel" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 " placeholder="Téléphone"/>
                                        
                                    </div>
                                    </div>

                                    <div className="flex-1 px-2 mt-4 md:mt-0">
                                        <div className="relative h-11 w-full min-w-[200px] mt-9">
                                            <input type={"email"} name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 " placeholder="Email"/>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-8">       
                                    <textarea name="Message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className=" mt-4 textarea block w-full px-5 py-3  placeholder-gray-400 bg-slate-900 bg-opacity-0  border-2  rounded border-white   text-white dark:border-gray-700 outline-none" ></textarea>
                                </div>
                                <PrivacyPolicy isChecked1={isChecked1} setChecked1={setChecked1} isChecked={isChecked} setChecked={setChecked}/>
                                <SendMessage />
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}
