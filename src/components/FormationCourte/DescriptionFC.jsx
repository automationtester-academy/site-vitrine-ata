import React from 'react';

export default function DescriptionFC() {
  return (
    <div className="description-container text-center p-10">
      <h2 className="text-3xl md:text-5xl font-bold text-[#39DDF5] mb-4">
        Nos formations courtes
      </h2>
      <p className="text-base md:text-xl text-white mt-4 leading-[29.26px] text-center font-[Montserrat] font-medium p-[20px]">
        Ses programmes intensifs sur 2 jours vous permettront non seulement d’acquérir les <br /> 
        compétences nécessaires pour devenir un testeur Agile, mais également de vous initier aux <br /> 
        pratiques et outils d’automatisation qui révolutionnent l’industrie. Ainsi, vous serez prêt à <br /> 
        relever les défis actuels et futurs dans le domaine des tests software.
      </p>
    </div>
  );
}
