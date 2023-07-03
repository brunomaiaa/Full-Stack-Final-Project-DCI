import "./FooterStyles.css"
import { MapContainer, TileLayer } from 'react-leaflet';

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Explore Duisburg</h1>
                    <p> Ready to experience Duisburg? <a href="/Accomodations" className="book">Book Now!</a></p>
                </div>
                <div>
                    <a href="https://www.airbnb.com/users/show/51341641" target="_blank" >
                    <i class="fa-brands fa-airbnb"></i>
                    </a>


                </div>



            </div>
            <div className="middle">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360146.620632906!2d6.398986683735208!3d51.44662547324486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8bef5a58b273b%3A0x427f281315473c0!2sDuisburg!5e1!3m2!1sen!2sde!4v1688378494428!5m2!1sen!2sde" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="bottom">
            <p>© 2023 - Explore Duisburg</p>
            </div>
            
        </div>
    )
}

export default Footer