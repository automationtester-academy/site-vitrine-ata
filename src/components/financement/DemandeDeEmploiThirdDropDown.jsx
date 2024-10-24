import { useState } from "react";
import CartIcon from "../../assets/icons/droDownIcon.png";
import CartIcon2 from "../../assets/icons/closeDropDownIcon.png";

export default function DemandeDeEmploiThirdDropDown() {
  const [isActive, setActive] = useState(false);

  const activeDropDown = () => {
    setActive(!isActive);
  };

  const textColor = isActive ? "text-[#39DDF5]" : "text-white";
  const dropDownStyle = isActive
    ? "flex text-white font-bold py-5 px-4 w-11/12 items-center"
    : "drop-down-style flex items-center text-white font-bold py-5 px-4 w-11/12";

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <button className={`${dropDownStyle}`} onClick={activeDropDown}>
          {isActive ? (
            <img src={CartIcon2} alt="" />
          ) : (
            <img src={CartIcon} alt="" />
          )}
          <span className={`ml-4 text-xl ${textColor}`}>POEI</span>
        </button>
        {isActive && (
          <div className="mt-4 w-11/12 p-4 drop-down-style">
            <div>
              <div className="my-2">
                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">
                  DÉFINITION :
                </h2>
              </div>
              <div className="my-2">
                <p className="text-xl text-white">
                  La POEI c’est la Préparation Opérationnelle à l’Emploi
                  Individuelle
                </p>
              </div>
            </div>
            <div>
              <div className="my-2">
                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">
                  Conditions :
                </h2>
              </div>
              <div className="my-2">
                <p className="text-xl text-white">
                  Public : Demandeurs d’emploi et avoir une entreprise prête à
                  vous embaucher
                </p>
              </div>
            </div>
            <div>
              <div className="my-2">
                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">
                  AVANTAGES :
                </h2>
              </div>
              <div className="my-2">
                <p className="text-xl text-white">
                  La POEI, c’est la Préparation Opérationnelle à l’Emploi
                  Individuelle. Ce dispositif de financement est très différent
                  des autres puisqu’il permet de suivre votre formation en lien
                  direct avec une offre d’emploi d’une entreprise. Si le futur
                  employeur se positionne sur votre profil, vous pouvez
                  commencer votre intégration en douceur dans leurs équipes, le
                  tout avec une formation financée par Pôle Emploi en partie ou
                  intégralement. Pour l’entreprise, c’est une façon de former
                  une future recrue selon leurs besoins c’est presque du
                  sur-mesure.
                </p>
              </div>
            </div>
            <div>
              <div className="my-2">
                <h2 className="uppercase text-xl text-[#39DDF5] font-semibold">
                  DEMARCHES A SUIVRE :
                </h2>
              </div>
              <div className="my-2">
                <p className="text-xl text-white">
                  1 : Choisir votre formation et votre date de rentrée
                </p>
              </div>
              <div className="my-2">
                <p className="text-xl text-white">
                  2 : Remplir notre formulaire de contact, notre équipe prendra
                  contact avec vous pour définir vos besoins et le mode de
                  financement le plus adéquat en fonction de votre situation.
                </p>
              </div>
              <div className="my-2">
                <p className="text-xl text-white">
                  3 : Monter votre dossier de demande de financement Pole
                  Emploi, Ce dossier consiste à exposer ton projet
                  professionnel, ta motivation ainsi que ton choix de formation.
                  Notre équipe vous enverras aussi des conseils pour préparer
                  votre argumentaire pour votre demande. Ces conseils porteront
                  sur la présentation et la cohérence de votre projet
                  professionnel, la pertinence du parcours de formation et des
                  modalités de financement ainsi que sur les perspectives
                  d’emploi à l’issue de la formation.
                </p>
              </div>
              <div className="my-2">
                <p className="text-xl text-white">
                  4 : Fournir les documents nécessaires à la demande de
                  financement à notre gestionnaire formation, qui aura pris
                  contact en amont avec vous,
                </p>
              </div>
              <div className="my-2">
                <p className="text-xl text-white">
                  5 : Signer votre contrat et la convention POEI
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
