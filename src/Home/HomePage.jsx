import { Row, Col } from 'antd';
import React from "react";
import Description from "./Description";
import MainImage from "./MainImage";

const HomePage = () => {
    return (
        <>
            <Row  className='page-margin' align="bottom">
                <Col xs={{span: 24, order: 2}} sm={{span: 14, order: 1}} className='section-padding'>
                    <Description />
                </Col>
                <Col xs={{span: 24, order: 1}} sm={{span: 10, order: 2}} className='section-padding'>
                    <MainImage />
                </Col>
            </Row>           
        </>
    );
}

export default HomePage;