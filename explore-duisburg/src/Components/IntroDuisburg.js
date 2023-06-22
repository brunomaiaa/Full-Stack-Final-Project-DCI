import Duisburg1 from '../Assets/duisburg1.jpg'
import Duisburg2 from '../Assets/duisburg2.jpg'  
import Duisburg3 from '../Assets/duisburg3.jpg'
import Duisburg4 from '../Assets/duisburg4.jpg' 
import "./IntroStyles.css" 

const IntroDuisburg = () => {
    return (
        <div className="intro-duisburg">
            <h1>Discover the fascinating city of Duisburg</h1>
            <p>Where History Meets Vibrant Culture</p>

            <div className="first-content">
                <div className="first-content-text">
                    
                    <p>Welcome to Duisburg, a dynamic city in western Germany, known for its industrial heritage and vibrant cultural scene. Situated along the Rhine River, Duisburg boasts one of Europe's largest inland ports and serves as a key hub for international trade. Explore ancient city walls, visit Duisburg Castle, and immerse yourself in the Innenhafen district's blend of old and new. Discover museums, such as the Lehmbruck Museum and the Küppersmühle Museum, showcasing contemporary art.</p>

                    </div>
                <div className="image">
                    <img  alt="Duisburg" src={Duisburg1} />
                    <img  alt="Duisburg" src={Duisburg2} />

                    </div>
                    </div>

        </div>


    )
}

export default IntroDuisburg