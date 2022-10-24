import { Card } from "react-bootstrap";
import { Angular, Cpp, Css, Html, Java, Js, Mysql, Nodejs, Php, Python, React, Spring } from "../assets/img/skills/imgIndex";

const Skills = () =>{
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="Row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi incidunt eligendi recusandae nesciunt voluptas adipisci magnam ratione at, maiores dolores exercitationem illum neque ipsum aspernatur quis id nobis iure accusantium!</p>
                            <div className="card-container">
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Html}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>HTML</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Css}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>CSS</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Nodejs}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>Node.Js</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Js}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>JavaScript</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Java}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>Java</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Cpp}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>C++</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Python}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>Python</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Php}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>PHP</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Mysql}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>Mysql</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={React}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>React</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Angular}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>Angular</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card text="dark" className="skill-card">
                                    <Card.Img variant="top" src={Spring}/>
                                    <Card.Body>
                                        <Card.Title as={"h3"}>Spring</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;