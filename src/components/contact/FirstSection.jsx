import CardImage from "../../assets/images/contactImg.jpg"
export default function FirstSection() {
    return (
        <>
            <div className="contact-first-section-container">
                <div className="contact-first-section-img">
                    <img src={CardImage} alt="" />
                </div>
                <div className="contact-first-section-title flex justify-center">
                    <h2 className="uppercase text-white text-7xl font-bold"><span className="text-[#39DDF5]">On</span> papote ?</h2>
                </div>
            </div>
        </>
    );
}