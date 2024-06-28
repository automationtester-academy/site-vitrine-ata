import React from 'react';
import TimeIcon from '../../assets/images/formationCourte/icons/TimeIcon.png';
import prixIcon from '../../assets/images/formationCourte/icons/prixIcon.png';
import GroupIcon from '../../assets/images/formationCourte/icons/GroupIcon.png';

function FormationsSection() {
  return (
        <div>
         <section className="Recruiters w-full max-sm:h-max ">
         <div className='column_holder mt-[4rem] w-[100%] m-auto mb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[70%] max-sm:w-[90%] m-auto'>
          

            <div className="card_holder">
          <div className="card-content relative">
           <div className="card_content w-[100%] border-4 border-cyan-400 pt-16 pr-8 pb-8 pl-8 rounded-3xl">
              <div className="flex flex-row">
                    <div className="w-1/6 ">
                        <div className="">
                            <img src={TimeIcon} alt="" />
                        </div>       
                    </div>
                    <div className="w-5/6 ">
                        <h1 className="card_title text-cyan-400 text-lg font-semibold">
                            Automation Tester 
                        </h1>
                    </div>
                </div>
          <hr className="border-cyan-400 my-4" />

         <div className='card_content'>
         <div className="flex flex-row items-center pb-6">
          <img src={TimeIcon} alt="Time Icon" className="mr-4" />
          <h1 className='text-white'>
            hi
          </h1>
          </div>

         <div className="flex flex-row items-center pb-6">
          <img src={prixIcon} alt="Time Icon" className="mr-4" />
          <h1 className='text-white'>
            hi
          </h1>
         </div>

         <div className="flex flex-row items-center pb-6">
          <img src={GroupIcon} alt="Time Icon" className="mr-4" />
          <h1 className='text-white'>
            hi
          </h1>
         </div>
         </div>

         <div className="NavBarLinks_button flex-shrink-0 my-2.5 lg:my-0 mx-auto text-center">
         <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
          <div  className="Header-text block px-5 text-md py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
            Télécharger le programme
          </div>
         </div>
          </div>
          </div>
          </div>
          </div> 


          
          </div>
         </div>
          </section>
          </div>
  );
}

export default FormationsSection;
