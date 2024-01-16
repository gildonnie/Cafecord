import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styles from './Create-group.module.css';
import Image from '../assets/beautiful-coffee-image.png';
const CreateGroup = () => (

    <Container fluid>
        <Row className={Styles.container}>
            <Col sm={12} md={6} lg={6} >
                <Form className={Styles.form}>
                    <h2>Create a Group</h2>
                    <Row>
                        <Col>
                            <Form.Control
                                className={Styles.inputEl}
                                required
                                type="text"
                                placeholder="Group Name"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                className={Styles.inputEl}
                                type="text"
                                placeholder="Group Description"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6}className="pe-0">
                            <Form.Control
                                className={Styles.inputEl}
                                required
                                type="text"
                                placeholder="Username"
                            />
                        </Col>
                        <Col className="ps-0">
                            <Button variant="warning">Add User</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className={Styles.groupMembersContainer}></Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ span: 10, offset: 1 }}>
                            <Button className="btn" variant='warning'>Create Group</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col xs={12} md={{ span: 6, order: 'first' }} lg={{ span: 6, order: 'first' }} className={Styles.imageContainer}>
                <img src={Image} alt="image showing varieties of coffee"></img>
            </Col>
        </Row>
    </Container>
)

export default CreateGroup;