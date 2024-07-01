import WritingImg from "../../../../assets/images/formation_court/writing.png"
export default function CadreReglementaireLeftSection() {
    return (
        <div>
            <div className="flex">
                <img src={WritingImg} width="54" height="56" alt="Writing Img" className="mr-3" />
                <h4 className="uppercase text-2xl text-[#39DDF5]">
                    MODALITÉS D’ÉVALUATION DANS<br /> LE CADRE DE LA CERTIFICATION
                </h4>
            </div>
        </div>
    )
}
