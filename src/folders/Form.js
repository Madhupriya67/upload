import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap';

export default function Form5(){

		return(
			<Container fluid>
				
				<Row style={{backgroundColor:"white"}}>
					<Col>
          				<form style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                            <Row>
                                <Col lg="2"></Col>
                                <Col lg="8">
                                    <Row>&nbsp;</Row>
                                    <Form.Group as={Row} controlId="User ID">
                                        <Form.Label column lg="4">
                                           User ID:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Year of Passing">
                                        <Form.Label column lg="4">
                                        Year of Passing:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"   style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="SSC/SSLC">
                                        <Form.Label column lg="4">
                                        SSC/SSLC:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"   style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="INTER/PUC">
                                        <Form.Label column lg="4">
                                        INTER/PUC:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Branch">
                                        <Form.Label column lg="4">
                                        Branch:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control as="select" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                                                 <option>CSE</option>
                                                <option>ECE</option>
                                                <option>EEE</option>
                                                <option>Mechanical</option>
                                                <option>Civil</option>
                                                
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Program">
                                        <Form.Label column lg="4">
                                        Program:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" default value="B.Tech" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="B.Tech GPA">
                                        <Form.Label column lg="4">
                                        B.Tech GPA:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Pass Category">
                                        <Form.Label column lg="4">
                                        Pass Category:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Active Backlog">
                                        <Form.Label column lg="4">
                                        Active Backlog:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                        </Col>
                                    </Form.Group>
                                    
                                    
                
                     <Form.Group as={Row} controlId="Section">
                                        <Form.Label column lg="4">
                                        Section:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                        </Col>
                                    </Form.Group>
                                    
                                    <Form.Group as={Row} controlId="Resume">
                                        <Form.Label column lg="4">
                                        Resume:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="file" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                        </Col>
                                    </Form.Group>
                                     <Row>
                                        <Col align="center"><Button type="submit" style={{backgroundColor:"#2A324B",borderColor:"#2A324B",color:"white"}}>Submit</Button></Col>
                                    </Row>
                                    <Row>&nbsp;</Row>
                                </Col>
                                <Col lg="2"></Col>
                            </Row>
          				</form>
                    </Col>
            	</Row>
                                   
			</Container>
		);
	}

