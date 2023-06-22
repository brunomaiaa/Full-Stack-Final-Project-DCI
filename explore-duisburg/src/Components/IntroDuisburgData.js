import "./IntroStyles.css" 
import { Component } from "react";
import Duisburg1 from '../Assets/duisburg1.jpg'
import Duisburg2 from '../Assets/duisburg2.jpg'  
import Duisburg3 from '../Assets/duisburg3.jpg'
import Duisburg4 from '../Assets/duisburg4.jpg' 

class IntroDuisburgData extends Component {
   
    render () {
        return(
            <div className={this.props.className}>
            <div className="first-content-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>

                </div>
            <div className="image">
                <img  alt="Duisburg" src={this.props.img1} />
                <img  alt="Duisburg" src={this.props.img2} />

                </div>
                </div>

        )
    }


}

export default IntroDuisburgData