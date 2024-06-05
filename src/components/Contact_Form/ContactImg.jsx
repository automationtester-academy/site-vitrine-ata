import ImgCallCenter from "../../assets/images/contactus.png"
function ContactImg() {
    return (
        <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10 contactUs w-[42rem] h-[50%] ">
            <img className="hidden object-cover mx-auto lg:block shrink-0  w-full h-full rounded overflow-hidden"
                 src={ImgCallCenter}
                 alt="contact us please form"/>

        </div>
    );
}

export default ContactImg;