import { Link } from "react-router-dom";

export default function FooterSecondtList() {
    return (
        <>
            <ul className="list-none footer-list">
                <li className="mb-3 mt-5">
                    <Link to={'/Formation'} >
                    Formation b2b
                    </Link>
                   </li>
                <li className="mb-3">
                    <Link to={'/mixlearning'} >
                    Formation mix-learning
                    </Link>
                    </li>
                <li className="mb-3">Testflix</li>
                <li className="mb-3">Bootcamp</li>
                <li className="mb-5">
                    <Link to={'/reconversion'} >
                    Reconversion pro
                    </Link>
                    </li>
            </ul>
        </>
    );
}