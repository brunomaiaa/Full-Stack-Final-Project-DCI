import Duisburg1 from '../Assets/duisburg1.jpg'
import Duisburg2 from '../Assets/duisburg2.jpg'  
import Duisburg3 from '../Assets/duisburg3.jpg'
import Duisburg4 from '../Assets/duisburg4.jpg' 
import IntroDuisburgData from './IntroDuisburgData'
import "./IntroStyles.css" 

const IntroDuisburg = () => {
    return (
        <div className="intro-duisburg">
            <h1>Discover the fascinating city of Duisburg</h1>
            <p>Where History Meets Vibrant Culture</p>

            <IntroDuisburgData className="first-content"
            heading= ""
            text= "Welcome to Duisburg, a dynamic city in western Germany, known for its industrial heritage and vibrant cultural scene. Situated along the Rhine River, Duisburg boasts one of Europe's largest inland ports and serves as a key hub for international trade. Explore ancient city walls, visit Duisburg Castle, and immerse yourself in the Innenhafen district's blend of old and new. Discover museums, such as the Lehmbruck Museum and the Küppersmühle Museum, showcasing contemporary art."
            img1={Duisburg1}
            img2={Duisburg2}
           
            />

<IntroDuisburgData className="first-content-reverse"
            heading= ""
            text= " Nature lovers can explore the Duisburg-Nord Landscape Park, a former ironworks transformed into a stunning recreational area. Enjoy diverse shopping options, indulge in local cuisine, and experience exciting events like Duisburger Akzente and Duisburg Explodes. In Duisburg, history, culture, and industry come together to create an unforgettable cityscape."
            img1={Duisburg3}
            img2={Duisburg4}
           
            />
        </div>


    )
}

export default IntroDuisburg