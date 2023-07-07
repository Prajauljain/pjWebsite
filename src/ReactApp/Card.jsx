import img0 from './images/img0.png'
import img2 from './images/img2.png'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.png'
import { NavLink } from 'react-router-dom'
const cardData = [
    {
        imgsrc: img0,
        title: "Marketing Strategy & Ideas",
    },
    {
        imgsrc: img2,
        title: "Android Deveopment",
    },
    {
        imgsrc: img6,
        title: "Machine Learning",
    },
    {
        imgsrc: img3,
        title: "Software Developmwnt",
    },
    {
        imgsrc: img5,
        title: "Web Development",
    },
    {
        imgsrc: img4,
        title: "App Deveopment",
    }
]

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to={'#'} className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
export { cardData }