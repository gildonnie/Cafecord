import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styles from '../Styles/Create-group.module.css';
import Image from '../assets/beautiful-coffee-image.png';
import Stack from 'react-bootstrap/Stack';
import { v4 as uuidv4 } from 'uuid';
import { TiDelete } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";
import { db } from '../firebase.js';
import { collection, serverTimestamp, addDoc, query, getDocs, where } from 'firebase/firestore';

const CreateGroup = () => {
    const [formData, setFormData] = useState({
        groupName: "",
        description: "",
        members: [],
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(prevData => (
            {
                ...prevData,
                [name]: value
            }))
    }
    const usernameRef = useRef(null);
    const groupNameRef = useRef(null);
    const descriptionRef = useRef(null);
    const addMemBtnRef = useRef(null);
    const addSubmitBtnRef = useRef(null);
    // Using on snapshot every time channelRef gets updated(New Channel gets created) the the channelObj which contains all the channels

    const fetchMember = async (username) => {
        // matches the passed in username with the authenticated user in the users collection 
        if (username === "") return;
        try {
            const duplicateExists = formData?.members?.some(member => member.username === username);
            if (duplicateExists) {
                // throw new Error(`Duplicate username! ${username} is already a member`);
                alert(`Duplicate username! ${username} is already a member`);
                return 'duplicate';
            }
            // if user exists then adds user as a member of the channel / group
            const usersRef = collection(db, "users");
            // Create a query against the collection.
            const q = query(usersRef, where("username", "==", username))
            const querySnapshot = await getDocs(q);
            let data;
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                doc.data();
                data = doc.data();
            });
            return data;
        } catch (error) {
            console.log("Error getting documents: ", error);
            setError(error.message);
        }
    }
    const handleAddMember = async () => {
        let username = usernameRef.current.value;
        if (!username) {
            return;
        }
        username = username[0].toUpperCase() + username.substr(1);
        usernameRef.current.value = '';
        // gets the user object 
        const member = await fetchMember(username);
        if (member === 'duplicate') {
            return;
        }
        if (member) {
            setFormData(prevData => (
                {
                    ...prevData,
                    members: [...prevData.members, member]
                }
            ))
        } else {
            console.error("Username not found!");
            alert(`Unauthenticated user!`);
            return;
        }
    }

    //submitting a document as an object to the fire store collection channelRef 
    const channelSubmit = async (group) => {
        const channelRef = collection(db, "channels");
        if (group.groupName === "") return;
        const memberIds = group.members.map(member => member.id);
        try {
            await addDoc(channelRef, {
                title: group.groupName,
                description: group.description,
                time: serverTimestamp(),
                members: memberIds
            })
            //   alert(`Created a group with the name ${group.groupName}`);
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = /\S+/.test(e.currentTarget.name.value);
        if (!result) {
            e.stopPropagation();
            alert("Group name is required!");
            return;
        }
        const newGroup = { id: uuidv4(), ...formData };
        // save new group in database
        channelSubmit(newGroup);
        navigate('/Chat')
    }
    const handleDeleteMember = (id) => {
        const updatedMembers = formData.members.filter(member => member.id !== id);
        setFormData(prevData => (
            {
                ...prevData,
                members: updatedMembers
            }
        ))
    }
    const renderMembers = () => {
        return formData.members.map((member) => (
            <div key={member.id}>
                <div className={Styles.profileImgContainer} onClick={() => handleDeleteMember(member.id)}>
                    <img className={Styles.profileImage} src={member.imageUrl} alt="profile image" width="65px" height="65px" />
                    <TiDelete className={Styles.deleteIcon} size={34} />
                </div>
                <div className="fw-bold">{member.username}</div>
            </div>
        ))
    }
    const checkKeyDown = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
            if (e.target.name === 'groupName' && e.target.value) {
                descriptionRef.current.focus();
            } else if (e.target.name === "description") {
                usernameRef.current.focus();
            } else if (e.target.name === 'username') {
                addMemBtnRef.current.focus();
            } else if (e.target.id === 'add-member') {
                handleAddMember();
                addSubmitBtnRef.current.focus();
            } else if (e.target.id === 'new-group') {
                handleSubmit(e);
                return true;
            }
        } else {
            return true;
        }

    }
    const handleBlur = (e) => {
        e.target.classList.add("input-blur");
    }
    return (
        <Container fluid className={Styles.body}>
            {error ? (<h2>{error}</h2>) : (<Row className={Styles.container + " m-0"}>
                <Col className={Styles.formContainer} sm={12} md={6} lg={6} >
                    <h2 className={Styles.heading}>Create a Group</h2>
                    <Form id="new-group"
                        className={'d-md-flex flex-md-column justify-content-md-center mx-2' + ' ' + Styles.form}
                        onSubmit={handleSubmit}
                        onKeyDown={(e) => checkKeyDown(e)}
                    >
                        <Row className="mx-0">
                            <Col className="px-0">
                                <Form.Group controlId={uuidv4() + "-groupName"}>
                                    <Form.Label className={Styles.srOnly}>Group Name</Form.Label>
                                    <Form.Control
                                        className={Styles.inputEl}
                                        required
                                        type="text"
                                        placeholder="Group Name"
                                        name="groupName"
                                        value={formData.groupName}
                                        onChange={handleChange}
                                        ref={groupNameRef}
                                        autoFocus={true}
                                        onBlur={handleBlur}
                                    />

                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mx-0">
                            <Col className="px-0">
                                <Form.Group controlId={uuidv4() + "-description"}>
                                <Form.Label className={Styles.srOnly}>Group Description</Form.Label>
                                    <Form.Control
                                        className={Styles.inputEl}
                                        type="text"
                                        placeholder="Group Description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        ref={descriptionRef}

                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className={Styles.usernameInput + " mx-0"}>
                            <Col className="px-0" xs={8}>
                                <Form.Group controlId={uuidv4() + "-username"}>
                                <Form.Label className={Styles.srOnly}>Username</Form.Label>
                                    <Form.Control
                                        className={Styles.inputEl}
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        autoComplete='true'
                                        ref={usernameRef}

                                    />
                                </Form.Group>
                            </Col>
                            <Col className={"px-0 ms-1 "}>
                                <Button 
                                    ref={addMemBtnRef} 
                                    type="button" 
                                    id="add-member"
                                    variant="warning" 
                                    onClick={handleAddMember}
                                    >
                                      <IoMdAdd size={25}></IoMdAdd>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className={Styles.groupMembersContainer}>
                                    <Stack direction="horizontal" gap={3} className="w-100 d-flex">
                                        {renderMembers()}
                                    </Stack>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 10, offset: 1 }}>
                                <Button ref={addSubmitBtnRef} className="my-4" type="submit" variant='warning' id="new-group">Create Group</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col sm={12} md={{ span: 6, order: 'first' }} lg={{ span: 6, order: 'first' }} className={Styles.imageContainer + " px-0"}>
                    <img src={Image} alt="image showing varieties of coffee"></img>
                </Col>
            </Row>)}
        </Container>
    )
}
export default CreateGroup;