import "./HeroStyles.css";

export default function Hero(props) {
  return (
    <>
    <div className={props.cName}>
        <img alt="heroImg" src={props.heroImg} />

        <div className="heroText">
            <h1> {props.title}</h1>
            <p> {props.text}</p>
            <a href="https://en.wikipedia.org/wiki/Duisburg">Read More</a>

        </div>
    </div>
   
    </>)

}