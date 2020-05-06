import React, { Component } from 'react';
import { Container, Row, Col, Button,CardBody, Card, Alert } from 'reactstrap';
import {getValue} from './Validate';
import {IState,ErrorMessage} from './Types';
import { MessageConstant } from './MessageConstant';

class App extends React.Component<{}, IState> { 
    constructor(props: {}) {
        super(props);
        this.onHandlerangeInputChange = this.onHandlerangeInputChange.bind(this);  
        this.state = {           
            rangeInput: '',
            regexp : /^-?[0-9]*(,[0-9]*)?$/,
            errorMessage:{
              msg:'',
              valid: false
            } ,
            visible: false          
        }          
    }
    
    onHandlerangeInputChange = (e: any) => {
        let rangeInput = e.target.value; 
        this.setState({rangeInput: rangeInput});
        if(rangeInput){
          this.setState(() => ({ visible: true }));
          const output: ErrorMessage = getValue(rangeInput);
          this.setState(() => ({ errorMessage: output }));
        }
        else{
          this.setState(() => ({ errorMessage: {msg:'',valid:false} }));
          this.setState(() => ({ visible: false }))
        }
       
    };
    
    // Added React Bootstrap Buttons, card and Alert for showing message
    render() {
        return (
            <>      
                <Container >
                <Row>
                <Col>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                   Please Enter a number between 1 to 99,999
                </Button>  
                  <Card>
                   <CardBody>
                   <input
                    type="text" name="rangeInput" placeholder="Enter only Number"
                    value={this.state.rangeInput} 
                    onChange={this.onHandlerangeInputChange}/>
                    <Alert isOpen={this.state.visible}>{this.state.errorMessage.msg}</Alert > 
                    </CardBody>
                  </Card>                
                </Col>                       
               </Row>
               </Container>
            </>
        );
    }
}
export default App;
