import { Card, Col, Container, Image, Row } from "react-bootstrap"
import antman from "../assets/images/superhero/antman.jpg"
import avanger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
import robinhood from "../assets/images/superhero/robinhood.jpg"
import spiderman from "../assets/images/superhero/spiderman-cover.jpg"
import superman from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
   return (
      <div>
         <Container>
            <br />
            <br />
            <h1 className="text-white">SUPERHERO MOVIES</h1>
            <Row>
               <Col md={4} className="movieWrapper" id="superhero">
                  <Card className="bg-dark movieImage">
                     <Image src={antman} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">antman</Card.Title>
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
                     <Image src={avanger} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">avanger</Card.Title>
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
                     <Image src={batman} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">batman</Card.Title>
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
                     <Image src={robinhood} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">robinhood</Card.Title>
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
                     <Image src={spiderman} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">spiderman</Card.Title>
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
                     <Image src={superman} alt="Card image" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">superman</Card.Title>
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

export default SuperHero