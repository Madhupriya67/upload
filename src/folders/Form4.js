import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap';

 export default function Form4() {
    
    
     return (
      <Container fluid>
				
      <Row style={{backgroundColor:"white"}}>
        <Col>
                <form style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                          <Row>
                              <Col lg="2"></Col>
                              <Col lg="8">
                                  <Row>&nbsp;</Row>
<Form.Group as={Row} controlId='Assessment patner' >
         <Form.Label column lg="4">
         Assessment patner:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" defaultvalue="CoCubes" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Assessment date' >
         <Form.Label column lg="4">
         Assessment date:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  />
                                    </Col>
</Form.Group>

<Form.Group as={Row} controlId='Assessment ID'  >
         <Form.Label  column lg="4">
         Assessment ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Overall Aptitude' >
         <Form.Label  column lg="4">
         Overall Aptitude:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='English'>
         <Form.Label  column lg="4">
         English:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}    />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Quantitative'  >
         <Form.Label  column lg="4">
         Quantitative:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Analytical'  >
         <Form.Label  column lg="4">
         Analytical:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Domian' >
         <Form.Label  column lg="4">
         Domian:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Computer Fundamentals'  >
         <Form.Label  column lg="4">
         Computer Fundamentals:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='coding' >
         <Form.Label column lg="4">
         coding:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='WET'  >
         <Form.Label  column lg="4">
         WET:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Personality'  >
         <Form.Label column lg="4">
         Personality:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Over all score'>
         <Form.Label  column lg="4">
         Over all score:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Over all rank' >
         <Form.Label  column lg="4">
         Over all rank:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row}>
                                        <Form.Label column lg="4" >
                                        Analyst: 
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
      
        <Form.Group as={Row} >
                                        <Form.Label  column lg="4" >
                                        Customer Service Executive:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
     
        <Form.Group as={Row} >
                                        <Form.Label  column lg="4" >
                                        Graduate Engineer(Plant):
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
     
        <Form.Group as={Row}>
                                        <Form.Label column lg="4" >
                                        Graduate Engineer(R and D): 
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
      
        <Form.Group as={Row}  >
                                        <Form.Label  column lg="4" >
                                        Network Engineer: 
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
      
        <Form.Group as={Row} >
                                        <Form.Label  column lg="4" >
                                        Operations Executive:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
        <Form.Group as={Row} >
                                        <Form.Label  column lg="4" >
                                        Sales Executive:  
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
        <Form.Group as={Row} >
                                        <Form.Label column lg="4" >
                                        Software Developer:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
        <Form.Group as={Row}>
                                        <Form.Label  column lg="4" >
                                        Software Engineer: 
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        </Col>
        </Form.Group>
        <Form.Group as={Row}  >
                                        <Form.Label column lg="4" >
                                        Software Tester: 
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Eligible"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
        />
        <Form.Check inline
          type="radio"
          label="Not Eligible"
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