import '../../assets/css/App.css'
import CartIconHome from '../../assets/icons/homeIcon.png'
import CartIconHelp from '../../assets/icons/helpIcon.png'

export default function FooterIcons() {
    return (
        <>
            <div className="footer-icons-container">
                <div className="">
                    <a
                        className='flex flex-row'
                        target='_blank'
                        href="https://www.google.com/maps/place/Automation+Tester+Academy/@48.8870809,2.2608296,715m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47e665bfdc024db7:0xd688c6a4993e19a4!8m2!3d48.8870809!4d2.2608296!16s%2Fg%2F11v3dssst1?entry=ttu">
                        <div className="w-1/6 footer-icons">
                            <div className="footer-icons-container-size">
                                <img src={CartIconHome} alt="" />
                            </div>
                        </div>
                        <div className="w-5/6">
                            <p className="text-gray-200">
                                Automation Tester Academy <br/> 14 Rue Beffroy 92200 <br />Neuilly-Rur-Seine
                            </p>
                        </div>
                    </a>
                </div>
                <div className="">
                    <a
                        className='flex flex-row'
                        target='_blank'
                        href="https://wa.me/330695658426?text=Bonjour">
                        <div className="w-1/6 footer-icons">
                            <div className="footer-icons-container-size">
                                <img src={CartIconHelp} alt="" />
                            </div>

                        </div>
                        <div className="col-span-8">
                            <p className="text-gray-200">
                                Un coup de fil ?<br />
                                06 95 65 84 26
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}