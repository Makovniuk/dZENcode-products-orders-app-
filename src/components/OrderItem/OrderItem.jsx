import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { BsListUl } from "react-icons/bs";

export default function OrderItem({ title, productsCount, date, amountUsd, amountUah }) {
    return (
        <Card className="mb-2 shadow-sm">
            <Card.Body > 
                <Row className='align-items-center'>
                    <Col md={5}>
                        <Card.Title className="mb-2 text-truncate">{title}</Card.Title>
                    </Col>
                    <Col md={1} >
                        <Button variant="light" size="lg">
                            <BsListUl />
                        </Button>
                    </Col>
                    <Col md={1}>
                        <div className="text-muted"><h4>{productsCount}</h4> Продукта</div>
                    </Col>
                    <Col md={2}>
                        <div className="text-muted">{date}</div>
                        <div><h5>{date}</h5></div>
                    </Col>
                    <Col md={2}>
                        <div className="text-muted">{amountUsd ? `${amountUsd} $` : null}</div>
                        <div>{amountUah ? `${amountUah} грн` : null}</div>
                    </Col>
                    <Col md={1} className="text-end">
                        <Button variant="light" size="sm">
                            <FaTrash />
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        
        
    );
}
