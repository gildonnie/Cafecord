import { useState, useId, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styles from './Create-group.module.css';
import Image from '../assets/beautiful-coffee-image.png';
import Stack from 'react-bootstrap/Stack';
import profileImage from '../assets/profile-image.png';
import { v4 as uuidv4 } from 'uuid';
const CreateGroup = () => {
    const usernameRef = useRef(null);
    const [members, setMembers] = useState([]);
    const handleAddMember = () => {
        const memberId = uuidv4();
        const username = usernameRef.current.value;
        if (!username){
            return;
        }
        usernameRef.current.value = '';
        // search for username in the database and get member object with the same username as below:
        //  if username found
        const member = {
            id: memberId,
            username: username,
            firstName: 'abc',
            lastName: 'xyz',
            imageUrl: profileImage,
            messages: []
        };
        setMembers([...members, member]);
        // else throw error, "User not found!".
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newGroup = {
            id: uuidv4(),
            name: e.currentTarget.name.value,
            description: e.currentTarget.description.value,
            members: members,
            messages: []
        };
        alert(`Group with name ${newGroup.name} created!
         
         ${JSON.stringify(newGroup)};
        `);
    }

    const renderMembers = () => {
        return members.map((member) => (
            <div key={member.id}>
                <div className={Styles.profileImgContainer}>
                    <img className="rounded-circle" src={member.imageUrl} alt="profile image" width="70px" height="70px" />
                </div>
                <div className="fw-bold">{member.username}</div>
            </div>
        ))
    }
    return (
        <Container fluid>
            <Row className={Styles.container}>
                <Col sm={12} md={6} lg={6} >
                    <Form id="new-group" onSubmit={handleSubmit} className={'d-md-flex flex-md-column justify-content-md-center h-100' + ' ' + Styles.form}>
                        <h2>Create a Group</h2>
                        <Row>
                            <Col>
                                <Form.Control
                                    className={Styles.inputEl}
                                    required
                                    type="text"
                                    placeholder="Group Name"
                                    name="name"

                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control
                                    className={Styles.inputEl}
                                    type="text"
                                    placeholder="Group Description"
                                    name="description"

                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="pe-0">
                                <Form.Control
                                    className={Styles.inputEl}
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    ref={usernameRef}
                                />
                            </Col>
                            <Col className="px-0" xs={6}>
                                <Button variant="warning" onClick={handleAddMember}>Add User</Button>
                            </Col>
                        </Row>
                        {members.length ?
                            (<Row>
                                <Col>
                                    <Card className={Styles.groupMembersContainer}>
                                        <Stack direction="horizontal" gap={3} className="w-100 d-flex">
                                            {renderMembers()}
                                        </Stack>
                                    </Card>
                                </Col>
                            </Row>) : null}
                        <Row>
                            <Col xs={{ span: 10, offset: 1 }}>
                                <Button className="mt-5" type="submit" variant='warning' id="new-group">Create Group</Button>
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
}


export default CreateGroup;