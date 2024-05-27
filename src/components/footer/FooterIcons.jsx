import '../../assets/css/App.css'
import CartIconHome from '../../assets/icons/homeIcon.png'
import CartIconHelp from '../../assets/icons/helpIcon.png'

export default function FooterIcons() {
    return (
        <>
            <div className="footer-icons-container">
                <div className="flex flex-row">
                    <div className="w-1/6 footer-icons">
                        <div className="footer-icons-container-size">
                            <img src={CartIconHome} alt="" />
                        </div>
                    </div>
                    <div className="w-5/6">
                        <p className="text-gray-200">
                            Automation Tester Academy 14 rue Beffroy 92 200 Neuilly-sur-<br />Seine
                        </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-1/6 footer-icons">
                        <div className="footer-icons-container-size">
                            <img src={CartIconHelp} alt="" />
                        </div>

                    </div>
                    <div className="col-span-8">
                        <p className="text-gray-200">
                            Un coup de fil ?<br />
                            07 82 78 94 42
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}