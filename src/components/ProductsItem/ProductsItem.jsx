import Card from 'react-bootstrap/Card';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { FaTrash } from 'react-icons/fa';
import { FaCircle } from "react-icons/fa";

export default function ProductsItem({
  status,
  title,
  isNew,
  serialNumber, 
  dateStart, 
  dateEnd, 
  usd, 
  uah,
  groupName, 
  user, 
  arrivalName,
  arrivalDate 
}) {
  return (
    <Card className="mb-2 shadow-sm ">
      <Card.Body className="py-2">
        <Row className="align-items-center">
          <Col xs={1} className="text-center">
            <FaCircle color={status === 'Свободен' ? 'green' : 'orange'} size={15} />
          </Col>
          <Col xs={1} className="text-center"> 
          <Image
            src="https://i.pinimg.com/736x/96/5c/31/965c31197aa0d32ba5d46142e2d6fd9c.jpg"
            roundedCircle
            className="avatar-img"
          />
          </Col>
          <Col xs={2}>
            <div className="fw-bold">{title}</div>
            <div className="text-muted small">{serialNumber}</div>
          </Col>
          <Col xs={1}>
            <Badge bg={status === 'Свободен' ? 'success' : 'warning'}>{status}</Badge>
          </Col>
          <Col xs={2}>
            <div className="small text-muted">С {dateStart}</div>
            <div className="small text-muted">По {dateEnd}</div>
          </Col>
          <Col xs={1}>
            <div>{isNew ? 'Новый' : 'Б/У'}</div>
          </Col>
          <Col xs={1}>
            <div>{usd} $</div>
            <div>{uah} грн</div>
          </Col>
          <Col xs={1}>
            <div className="text-truncate">{groupName}</div>
            <div className="small text-muted">{user}</div>
          </Col>
          <Col xs={1}>
            <div className=" text-truncate">{arrivalName}</div>
            <div className="text-muted small">{arrivalDate}</div>
          </Col>
          <Col xs={1} className="text-end">
            <Button variant="light" size="sm">
              <FaTrash />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
