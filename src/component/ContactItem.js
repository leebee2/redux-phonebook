import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({ item }) => {
    return (
        <Row>
            <Col lg={1}>
                <img width={50} src={process.env.PUBLIC_URL + `/img/unknown.png`} alt="unknown"></img>
            </Col>
            <Col lg={10}>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.phoneNum}
                </div>
            </Col>
        </Row>
    );
};

export default ContactItem;