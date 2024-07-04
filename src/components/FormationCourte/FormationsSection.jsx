import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TimeIcon from '../../assets/images/formationCourte/icons/TimeIcon.png';
import prixIcon from '../../assets/images/formationCourte/icons/prixIcon.png';
import GroupIcon from '../../assets/images/formationCourte/icons/GroupIcon.png';

function FormationsSection() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/formations'); 
        const filteredFormations = response.data.filter(formation => formation.status === 1 );
        setFormations(filteredFormations); 
      } catch (error) {
        console.error('Error fetching formations:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <section className="Recruiters w-full max-sm:h-max">
        <div className='column_holder mt-[4rem] w-[100%] m-auto mb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-[70%] max-sm:w-[90%] m-auto'>
            {formations.map((formation) => (
              <div key={formation.id} className="">
                <div className="relative">
                  <div className="w-[100%] border-2 border-cyan-400 pt-6 pr-8 pb-8 pl-8 rounded-3xl">
                    <div className="flex flex-row items-center border-b border-cyan-400 pb-2 mb-4">
                      <div className="w-1/6 mr-4"> 
                      
                        <img 
                          src={`http://127.0.0.1:8000/api/${formation.image}`} 
                          alt="image_formation" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-5/6">
                        <h1 className="text-cyan-400 text-lg font-semibold">
                          {formation.titre} 
                        </h1>
                      </div>
                    </div>

                    <div className='card_content'>
                      <div className="flex flex-row items-center pb-6">
                        <img src={TimeIcon} alt="Time Icon" className="mr-4" />
                        <h1 className='text-cyan-400'>
                          {formation.duration} <span className='text-white'>jours</span>
                        </h1>
                      </div>

                      <div className="flex flex-row items-center pb-6">
                        <img src={prixIcon} alt="Prix Icon" className="mr-4" />
                        <h1 className='text-cyan-400'>
                          {formation.price}€ <span className="text-white">HT / personne</span>
                        </h1>
                      </div>

                      <div className="flex flex-row items-center pb-6">
                        <img src={GroupIcon} alt="Group Icon" className="mr-4" />
                        <h1 className='text-white'>
                          Tarif groupé sur devis
                        </h1>
                      </div>
                    </div>

                    <div className=" flex-shrink-0 my-2.5 lg:my-0 mx-auto text-center">
                      <div className="relative inline-block p-[1.2px] pl-[1.75px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
                        <div className="Header-text block px-5 text-sm py-2.5 leading-none bg-slate-900 text-white rounded-md hover:text-white hover:bg-cyan-600 font-semibold">
                          Télécharger le programme
                        </div>
                      </div>
                    </div>

                  </div> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormationsSection;
