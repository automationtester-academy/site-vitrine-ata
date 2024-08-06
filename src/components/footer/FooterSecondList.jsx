import { Link } from "react-router-dom";

export default function FooterSecondtList() {
    return (
        <>
            <ul className="list-none footer-list">
                <li className="mb-3 mt-5">
                    <Link 
                    to={'/formation'} 
                    onClick={() => window.scrollTo(0, 0)}>
                    Formation b2b
                    </Link>
                   </li>
                <li className="mb-3">
                    <Link 
                    to={'/mixlearning'} 
                    onClick={() => window.scrollTo(0, 0)}>
                    Formation mix-learning
                    </Link>
                    </li>
                <li className="mb-3">Testflix</li>
                <li className="mb-3">Bootcamp</li>
                <li className="mb-5">
                    <Link 
                    to={'/reconversion'} 
                    onClick={() => window.scrollTo(0, 0)}>
                    Reconversion pro
                    </Link>
                    </li>
            </ul>
        </>
    );
}