import { Link } from "react-router-dom";
export default function FooterFirstList() {
  return (
    <>
      <ul className="list-none footer-list">
        <li className="mb-3 mt-5">
          <Link to={"/ecole"} onClick={() => window.scrollTo(0, 0)}>L’école</Link>
        </li>
        <li data-cy="contact-us-footer" className="mb-3">
          <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>Nous contacter</Link>
        </li>
        <li className="mb-3">
          <a
            target="_blank"
            href="https://cdn.prod.website-files.com/62bbff4aa8e79ba999c585b5/65f1638aa12d5be1d72265f3_Attestation%20Qualiopi.pdf"
          >Certificat Qualiopi
          </a>
        </li>
        <li className="mb-5">Mentions légales</li>
        <li className="mb-3">Egalité professionnelle</li>
      </ul>
    </>
  );
}
