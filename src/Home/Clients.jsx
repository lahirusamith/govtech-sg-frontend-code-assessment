import { Row, Col, Menu, Button, Space } from 'antd';

const Clients = () => {
    return (
        <>
            <Row justify={'start'} align="middle">
                <Col span={6}><img className='client-logo' src={'./images/client-databiz.svg'} alt="'./images/image-hero-mobile.png'" /></Col>
                <Col span={6}><img className='client-logo' src={'./images/client-audiophile.svg'} alt="'./images/image-hero-mobile.png'" /></Col>
                <Col span={6}><img className='client-logo' src={'./images/client-meet.svg'} alt="'./images/image-hero-mobile.png'" /></Col>
                <Col span={6}><img className='client-logo' src={'./images/client-maker.svg'} alt="'./images/image-hero-mobile.png'" /></Col> 
            </Row>
        </>
    );
};

export default Clients;