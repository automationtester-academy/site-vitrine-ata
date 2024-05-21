import '../../assets/css/App.css'
import ATAWhiteLogo from '../logos/ATAWhiteLogo';
import FooterFirstList from './FooterFirstList';
import FooterSecondtList from './FooterSecondList';
import FooterIcons from '../logos/FooterIcons';
export default function FooterComponent() {
    return (
        <>
            <footer>
                <div className='d-flex justify-content-evenly footer-container'>
                    <div className='d-flex align-items-center justify-content-center icon-container'>
                        <ATAWhiteLogo />
                    </div>
                    <FooterFirstList />
                    <FooterSecondtList />
                    <FooterIcons />
                </div>
            </footer>
        </>
    );
}