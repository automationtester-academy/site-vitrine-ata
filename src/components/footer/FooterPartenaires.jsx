import React from 'react';
import AgefiphLogo from "../../assets/logos/AgefiphLogo";
import Digital from "../../assets/logos/digital.png";
import SimplonLogo from "../../assets/logos/SimplonLogo";
import QualiopiLogo from "../../assets/logos/QualiopiLogo";
import TransitionsLogo from "../../assets/logos/TransitionsLogo";
import CPFLogo from "../../assets/logos/CPFLogo";
import DataDocke from "../../assets/logos/datadocke.png";
import Qualiopi from "../../assets/logos/qualiopi.png";

const FooterPartenaires = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="relative flex">
        {/* First set of logos */}
        <div className="flex animate-scroll-left whitespace-nowrap">
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <TransitionsLogo />
          </div>
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <SimplonLogo />
          </div>
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <CPFLogo />
          </div>
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <AgefiphLogo />
          </div>
          <div className="mx-4 w-[100px] flex items-center justify-center">
            <img src={Digital} className="w-full" alt="Digital Logo" />
          </div>
          <div className="mx-4 w-[150px] flex items-center justify-center">
            <img src={Qualiopi} className="w-full" alt="Qualiopi Logo" />
          </div>
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <img src={DataDocke} className="w-[70%]" alt="DataDocke Logo" />
          </div>

          {/* Duplicate set of logos for seamless scrolling */}
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <TransitionsLogo />
          </div>
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <SimplonLogo />
          </div>
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <CPFLogo />
          </div>
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <AgefiphLogo />
          </div>
          <div className="mx-4 w-[100px] flex items-center justify-center">
            <img src={Digital} className="w-full" alt="Digital Logo" />
          </div>
          <div className="mx-4 w-[150px] flex items-center justify-center">
            <img src={Qualiopi} className="w-full" alt="Qualiopi Logo" />
          </div>
          <div className="mx-4 w-[200px] flex items-center justify-center">
            <img src={DataDocke} className="w-[70%]" alt="DataDocke Logo" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default FooterPartenaires;               