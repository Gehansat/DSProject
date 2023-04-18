import Navbar from "./components/NavScrollExample"
import Card from "./components/Card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from "./components/Hero";
import ViewItem from "./components/ViewItem";

export default function Home(){

    return(
        <div>
            <Container>
                <ViewItem />
                <Row>
                    <Col><Hero /></Col>
                </Row>
                 <Row>
                    <Col><Card /></Col>
                </Row>
             </Container>
        </div>
    );

}