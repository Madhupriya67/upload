import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap';

 export default function Form6() {
    
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
         <Form.Label  column lg="4">
                                        User ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Company ID'>
         <Form.Label  column lg="4">
                                        Company ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>

        <Form.Group as={Row}  >
                                        <Form.Label  column lg="4" >
                                            Attendence:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Present"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
 style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Absent"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
           style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
      
        <Form.Group as={Row} >
                                        <Form.Label column lg="4" >
                                        Written test:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
 style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}     
        />
        </Col>
        </Form.Group>
     
        <Form.Group as={Row}  >
                                        <Form.Label  column lg="4 " >
                                        Group discussion: 
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
 style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
           style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
     
        <Form.Group as={Row}>
                                        <Form.Label column lg="4 " >
                                        Technical Interview:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
      
        <Form.Group as={Row}  >
                                        <Form.Label column lg="4 " >
                                            PIU:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
      
        <Form.Group as={Row}  >
                                        <Form.Label  column lg="4 " >
                                            Offer Letter:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Available"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Available"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
         
        <Row>&nbsp;</Row>
                                </Col>
                                <Col lg="4 "></Col>
                            </Row>
          				</form>
                    </Col>
            	</Row>
                                   
			</Container>
     )
 }