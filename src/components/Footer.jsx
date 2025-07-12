import { Link } from "react-router-dom"

function Footer() {    
    return (
        <footer>
            <div className="container">
                <p>
                    © 2025 Macelleria Vincenzi. Tutti i diritti riservati. <br />
                    <Link to="/privacy">Privacy Policy</Link> |
                    <Link to="/cookies"> Cookie Policy</Link>
                </p>
                <div className="social-media">
                    <a href="https://www.facebook.com/macelleriavincenzi/" target="_blank"><img src="images/icon_facebook.png" alt="Facebook" /></a>
                    <a href="https://www.instagram.com/macelleriafratellivincenzi/" target="_blank"><img src="images/icon_instagram.png" alt="Instagram" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer