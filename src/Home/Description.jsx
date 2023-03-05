import { Row, Col, Button } from 'antd';
import Clients from "./Clients";

const Description = () => {
    return (
        <>
            <div className='section-padding'>
                <Row>
                    <Col>
                        <h1 className="h1">Make remote work</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 22 }} md={{ span: 20 }} lg={{ span: 18 }} xl={{ span: 16 }}>
                        <p className="paragraph">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    </Col>
                </Row>
                <Row className='inquiry-btn-wrapper'>
                    <Col>
                        <Button className="inquiry-btn">Learn More</Button>
                    </Col>
                </Row>
                <div className="client-list">
                    <Clients />
                </div>
            </div>
        </>
    )
};

export default Description;