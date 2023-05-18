import Carousel from "../components/Carousel";
import Toast from 'react-bootstrap/Toast';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Owners from "../image/owners.png"
import Project from "../image/project.png"
import Mediation from "../image/mediation.png"
import Troubled from "../image/troubled.png"
import Cards from "./Cards/text"
export function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">New to constuction?</strong>
        <small ><Link to="/contact">Give me an overview</Link></small>
      </Toast.Header>
      <Toast.Body>Here’s a brief overview to get you started. People and processes vary depending on the project, of course, but it helps to know the basics.</Toast.Body>
    </Toast>
  );
}




export  function CardsA() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Owners}/>
        <Card.Body>
          <Card.Title>Owner's Representation</Card.Title>
          <Card.Text>
          <ul>
            <li>Design optimization</li>
            <li>Contract advice</li>
            <li>Project monitoring</li>
          </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><Link to="/contact">Find out more</Link></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Project} />
        <Card.Body>
          <Card.Title>Project Management</Card.Title>
          <Card.Text>
          <ul>
            <li>Expert coordination</li>
            <li>Technical advice</li>
            <li>Time and cost control</li>
          </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><Link to="/contact">Find out more</Link></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Mediation} />
        <Card.Body>
          <Card.Title>Mediation</Card.Title>
          <Card.Text>
          <ul>
            <li>Technical expertise</li>
            <li>Merit-based resolution</li>
            <li>Qualified mediator</li>
          </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><Link to="/contact">Find out more</Link></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Troubled} />
        <Card.Body>
          <Card.Title>Troubled Construction</Card.Title>
          <Card.Text>
          <ul>
            <li>Expert opinions</li>
            <li>Clear settlement advice</li>
            <li>Courtroom experience</li>
          </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><Link to="/contact">Find out more</Link></small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}


export default function Home() {
  return (
    <div className="main">
      
      <h1><Carousel/></h1> 
      <div className="homeMainSection">
       <div className="homeMainSubSection">
       <div>
       <h4 >Clear guidance and well-researched assessments from an experienced construction professional.</h4>
        <p><strong>Comprehensive technical understanding, dependable research</strong> and<strong> effective communication</strong> are part and parcel of a solid education, professional qualifications and a lifetime of experience in the construction trenches.
        </p>
        <p >
          Take a closer look at what David Stewart and the Stewart Consulting team can do for you:

        </p>

       </div>
      <BasicExample/>
      <div>
        <h3>New to constuction?</h3>
        <p>Here’s a brief overview to get you started. People and processes vary depending on the project, of course, but it helps to know the basics.</p>
        <a  href="">Give me an overview</a>
      </div>

       </div>
       {/* <Cards/> */}
      <CardsA
      />
      {/* <div className="cardsMain">
        <div className="cards">
        <div className="cardOne">
          <div className="card-image" id="card-image-one" ></div>
          <h4 className="cards-title">Owner's Representation</h4>
          <ul>
            <li>Design optimization</li>
            <li>Contract advice</li>
            <li>Project monitoring</li>
          </ul>
          <h5 className="overview" ><Link to="/contact">Find out more</Link></h5>
          
        </div>
        <div className="cardOne">
        <div className="card-image" id ="card-image-two" ></div>
          <h4 className="cards-title">Project Management</h4>
          <ul>
            <li>Expert coordination</li>
            <li>Technical advice</li>
            <li>Time and cost control</li>
          </ul>
          <h5 className="overview" ><Link to="/contact">Find out more</Link></h5>

        </div>
        <div className="cardOne">
        <div className="card-image" id="card-image-three" ></div>
          <h4 className="cards-title">Mediation</h4>
          <ul>
            <li>Technical expertise</li>
            <li>Merit-based resolution</li>
            <li>Qualified mediator</li>
          </ul>
          <h5 className="overview" ><Link to="/contact">Find out more</Link></h5>

        </div>
        <div id="cardFourth" className="cardOne">
        <div className="card-image" id="card-image-four" ></div>
          <h4 className="cards-title">Troubled Construction</h4>
          <ul>
            <li>Expert opinions</li>
            <li>Clear settlement advice</li>
            <li>Courtroom experience</li>
          </ul>
        <h5 className="overview" ><Link to="/contact">Find out more</Link></h5>

        </div>
        </div>

      </div> */}
      </div>
      
    </div>
  );
}
