import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap';

 
 export default function Form8() {
   
     return (
        <Container fluid>
				
        <Row style={{backgroundColor:"white"}}>
          <Col>
                  <form style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                            <Row>
                                <Col lg="2"></Col>
                                <Col lg="8">
                                    <Row>&nbsp;</Row>
<Form.Group as={Row} controlId='Company ID'  >
         <Form.Label column lg="4">
                                        Company ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Company Name' >
         <Form.Label column lg="4">
                                        Company Name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Company Logo' >
         <Form.Label  column lg="4">
         Company Logo:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Company official website'  >
         <Form.Label column lg="4">
         Company official website:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Employee strength'  >
         <Form.Label  column lg="4">
         Employee strength:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Annual turnover'  >
         <Form.Label  column lg="4">
         Annual turnover:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='About the company' >
         <Form.Label  column lg="4">
         About the company:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Analytical'  >
         <Form.Label column lg="4">
         Analytical:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='HR Name'  >
         <Form.Label  column lg="4">
         HR Name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Techinical interviewer name'  >
         <Form.Label column lg="4">
         Techinical interviewer name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Recruitment Date'  >
         <Form.Label  column lg="4">
         Recruitment Date:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
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