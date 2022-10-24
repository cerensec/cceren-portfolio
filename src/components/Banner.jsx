import { useEffect, useState } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import CodeLogo from '../assets/img/code.svg';

const Banner = () =>{

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const changingDisplay = ["Full Stack developer", "Computer Science Student"];
    const [text, setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;


    useEffect(()=>{
        let ticker = setInterval(() =>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{

        let i = loopNum % changingDisplay.length;
        let fullText = changingDisplay[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }



    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>
                            Welcome to my Portfolio
                        </span>
                        <h2>{`Hi, I'm Carlos a`} <span>{text}</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore in ipsam error veritatis sequi officiis consectetur aspernatur repellat sapiente quas corporis cum adipisci provident, accusamus officia quidem ut facilis?</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={CodeLogo} alt="Code img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;