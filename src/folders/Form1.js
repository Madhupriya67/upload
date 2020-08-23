import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap';
export default function Form1(){
return (
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
<Form.Group as={Row} controlId='First Name' >
         <Form.Label  column lg="4">
         First Name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Middle name'  >
         <Form.Label  column lg="4">
         Middle name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Last name'  >
         <Form.Label  column lg="4">
         Last name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} >
                                        <Form.Label  column lg="4" >
                                            Gender
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
        />
        <Form.Check inline
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
        />
        </Col>
        </Form.Group>
         <Form.Group as={Row} controlId='DOB'  >
         <Form.Label column lg="4">
         DOB:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Blood group'  >
         <Form.Label  column lg="4">
         Blood group:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Permanent address'  >
         <Form.Label  column lg="4">
         Permanent address:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Phone Number'  >
         <Form.Label column lg="4">
         Phone Number:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Email id' >
         <Form.Label column lg="4">
         Email id:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Father name'  >
         <Form.Label  column lg="4">
         Father name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Father Occupation'  >
         <Form.Label column lg="4">
         Father Occupation:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Father Contact Number'  >
         <Form.Label  column lg="4">
         Father Contact Number:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Father Mail id'  >
         <Form.Label  column lg="4">
         Father Mail id:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Mother name' >
         <Form.Label column lg="4">
         First Name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Mother Occupation'>
         <Form.Label column lg="4">
         Middle name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Reservation Category'  >
         <Form.Label  column lg="4">
         Reservation Category:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  />
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