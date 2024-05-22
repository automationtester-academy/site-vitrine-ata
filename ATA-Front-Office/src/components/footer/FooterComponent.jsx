import '../../assets/css/App.css'
import ATAWhiteLogo from '../logos/ATAWhiteLogo';
import FooterFirstList from './FooterFirstList';
import FooterSecondtList from './FooterSecondList';
import FooterIcons from '../logos/FooterIcons';
export default function FooterComponent() {
    return (
        <>
            <footer>
                <div className='flex justify-evenly footer-container'>
                    <div className='flex items-center justify-center icon-container'>
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