import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap';
export default function Form9() {
    return (
        <Container fluid>
				
        <Row style={{backgroundColor:"white"}}>
          <Col>
                  <form style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                            <Row>
                                <Col lg="2"></Col>
                                <Col lg="8">
                                    <Row>&nbsp;</Row>
                                    <Form.Group as={Row} controlId='User ID'  >
             <Form.Label column lg="4">
                                            User ID:
            </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                        </Col>
    </Form.Group>
             <Form.Group as={Row} controlId='Password'  >
             <Form.Label  column lg="4">
                                            Password:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId='Campus ID'  >
             <Form.Label  column lg="4">
                                            Campus ID:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                        </Col>
                                    </Form.Group>
                                    
                                    <Form.Group as={Row}  >
                                        <Form.Label  column lg="4" >
                                            Type
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Admin"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
        />
        <Form.Check inline
          type="radio"
          label="Student"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
        />
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
            )
        }
   