import { Link } from "react-router-dom";
export default function FooterFirstList() {
    return (
        <>
            <ul className="list-none footer-list">
                <li className="mb-3 mt-5">
                    <Link to={'/Ecole'}>
                        L’école
                    </Link>
                </li>
                <li className="mb-3">
                    <Link to={'/contact'}>
                        Nous contacter
                    </Link>
                </li>
                <li className="mb-3">Egalité professionnelle</li>
                <li className="mb-3">Certificat Qualiopi</li>
                <li className="mb-5">Mentions légales</li>
            </ul>
        </>
    );
}