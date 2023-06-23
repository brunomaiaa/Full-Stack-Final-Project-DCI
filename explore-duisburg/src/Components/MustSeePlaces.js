import "./MustSeePlacesStyles.css"
import MustSeePlacesData from "./MustSeePlacesData";
import MSP1 from "../Assets/m1.jpg";
import MSP2 from "../Assets/m2.jpg";
import MSP3 from "../Assets/m3.jpg";



function MustSeePlaces () {
  return (
    <div className="mustseeplaces">
      <h1>Must see Places</h1>
        <p>Here you can find some places to visit in Duisburg</p>
        <div className="mustseeplacescard">

        <MustSeePlacesData
        image={MSP1}
        heading="Landschaftspark
        Duisburg"
        text="The Landschaftspark Duisburg-Nord is a public park in Duisburg, located on the former site of the ThyssenKrupp steel mill which closed in 1985. It covers an area of 180 hectares in the boroughs of Duisburg-Meiderich, Duisburg-Bruckhausen and Oberhausen-Alstaden and is owned by the state of North Rhine-Westphalia."
        />
        <MustSeePlacesData
        image={MSP2}
        heading="Tiger & Turtle"
        text="Tiger and Turtle – Magic Mountain is an artistic sculpture in the form of a roller coaster, located on the Heinrich Hildebrand Höhe hill in Duisburg, at the confluence of the Rhine and Ruhr rivers. The sculpture is 20 metres tall and 220 metres long, and opened to the public on 13 November 2011."
        />
        <MustSeePlacesData
        image={MSP3}
        heading="Inner Harbour Duisburg
        "
        text="The Inner Harbour is the central port of Duisburg, Germany. Today, the Inner Harbour is both a transport and a logistics centre, and a recreational area, where one can find pubs and discos. The Inner Harbour is situated in the North of Duisburg, and is part of the borough Duisburg-Mitte."
        />
        </div>
    </div>
  );
}

export default MustSeePlaces;