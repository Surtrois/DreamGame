import React, {useState} from 'react';
import "./css/Footer.css"

const Footer = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
  
    const openPopup = () => {
      setIsPopupVisible(true);
    };
  
    const closePopup = () => {
      setIsPopupVisible(false);
    };
  
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
                <li><a href='tel:0321755550'>03 21 75 55 50 </a></li>
                <li><a href='https://www.facebook.com/fredetfanny/?locale=fr_FR3' target='_blank'>Facebook</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Liens</h3>
            <ul>
              <li><a href="/about">À propos</a></li>
              <li><a href="https://www.ebay.fr/str/dreamgamesbillymontigny" target='_blank'>Ebay</a></li>
              <li><button onClick={openPopup} className='button'>Avis sur les cookies</button></li>
            </ul>
          </div>
        </div>
  <div>
    <p>
        Site crée par Surtrois ©
        Tout droit reservé
    </p>
  </div>
        {isPopupVisible && (
          <div className="popup-overlay">
            <div className="popup-content">
              <p>Nous utilisons uniquement les <a href='https://policies.google.com/technologies/cookies?hl=fr' target='_blank'>cookies</a> relatifs a google.</p>
              <button onClick={closePopup}>Fermer</button>
            </div>
          </div>
        )}
      </footer>
    );
  };
  
  export default Footer;