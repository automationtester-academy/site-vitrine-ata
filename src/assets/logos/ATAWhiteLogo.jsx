import { Link } from 'react-router-dom';
import CartIcon from '../images/ATAWhiteLogo.png';
export default function ATAWhiteLogo() {
    return (
        <>
            <Link to={'/'}>
                <div>
                    <img src={CartIcon} alt="" />
                </div>
            </Link>
        </>
    );
}