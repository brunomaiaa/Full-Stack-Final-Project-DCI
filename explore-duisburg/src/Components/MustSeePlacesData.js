import "./MustSeePlacesStyles.css"

function MustSeePlacesData(props) {
    return (
        <div className="m-card">
       <div className="m-image">
            <img src={props.image} alt="Duisburg" />

        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        </div>
    );
    }

    export default MustSeePlacesData;