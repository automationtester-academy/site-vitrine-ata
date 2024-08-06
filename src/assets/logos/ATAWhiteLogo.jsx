import { Link } from 'react-router-dom';
import CartIcon from '../images/ATAWhiteLogo.png';
export default function ATAWhiteLogo() {
    return (
        <>
            <Link to={'/'} onClick={() => window.scrollTo(0, 0)}>
                <div>
                    <img src={CartIcon} alt="" />
                </div>
            </Link>
        </>
    );
}