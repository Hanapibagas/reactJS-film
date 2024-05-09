import { Card, Col, Container, Image, Row } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everyThing from "../assets/images/trending/everything.jpg"
import infinte from "../assets/images/trending/infinite.jpg"
import joker from "../assets/images/trending/joker.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import morbius from "../assets/images/trending/morbius.jpg"

const Tranding = () => {
   return (
      <div>
         <Container>
            <br />
            <br />
            <h1 className="text-white">TRENDING MOVIES</h1>
            <Row>
               <Col md={4} className="movieWrapper" id="trending" >
                  <Card className="bg-dark movieImage">
                     <Image src={duneImage} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">DUNE</Card.Title>
                           <Card.Text className="text-left">
                              This is a wider card with supporting text below as a natural lead-in
                              to additional content.
                           </Card.Text>
                           <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper" >
                  <Card className="bg-dark movieImage">
                     <Image src={everyThing} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">everyThing</Card.Title>
                           <Card.Text className="text-left">
                              This is a wider card with supporting text below as a natural lead-in
                              to additional content.
                           </Card.Text>
                           <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper" >
                  <Card className="bg-dark movieImage">
                     <Image src={infinte} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">infinite</Card.Title>
                           <Card.Text className="text-left">
                              This is a wider card with supporting text below as a natural lead-in
                              to additional content.
                           </Card.Text>
                           <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper" >
                  <Card className="bg-dark movieImage">
                     <Image src={joker} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">joker</Card.Title>
                           <Card.Text className="text-left">
                              This is a wider card with supporting text below as a natural lead-in
                              to additional content.
                           </Card.Text>
                           <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper" >
                  <Card className="bg-dark movieImage">
                     <Image src={lightyear} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">lightyear</Card.Title>
                           <Card.Text className="text-left">
                              This is a wider card with supporting text below as a natural lead-in
                              to additional content.
                           </Card.Text>
                           <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper" >
                  <Card className="bg-dark movieImage">
                     <Image src={morbius} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">morbius</Card.Title>
                           <Card.Text className="text-left">
                              This is a wider card with supporting text below as a natural lead-in
                              to additional content.
                           </Card.Text>
                           <Card.Text>Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
         </Container>
      </div >
   )
}

export default Tranding