import React, {Component} from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class Requests extends Component {
    state = {
        formState: {
        name: '',
        email: '',
        message: ''
    },
    requests: [
        {
           name: '',
           email: '',
           message: ''
        }
    ]  
};
    constructor () {
        super ()

        
        

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

        handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

        onChange = event => {
            this.setState({
               formState: {
                  ...this.state.formState,
                  [event.target.name]: event.target.value
               }
            });
         };

        async handleSubmit(e) {
            e.preventDefault()

            const { requests, formState } = this.state

            const form = await axios.post('http://localhost:3001/api/form', {
                name,
                email,
                message
            })

            this.setState({
                requests: [
                   ...this.state.requests,
                   {
                      name,
                      email,
                      message
                   }
                ]
             });
        }

    render () {
        return (
            <div>
            <Form onSubmit={this.handleSubmit} style={{width: '600px' }}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={this.onChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="message">Message:</Label>
                    <Input
                        type="textarea"
                        name="message"
                        onChange={this.onChange} />
                </FormGroup>

                <Button>Submit</Button>
            </Form>

            <Table
                requests={requests}
            />
            </div>
        );  
    }
}

const Table = ({ requests = [] }) => {
    return (
       <div className="table">
          <div className="table-header">
             <div className="row">
                <div className="column">Name</div>
                <div className="column">Email</div>
                <div className="column">Message</div>
                
             </div>
          </div>
          <div className="table-body">
             {users.map((request, key) => {
                return (
                   <div >
                      <div className="column">{request.name}</div>
                      <div className="column">{request.email}</div>
                      <div className="column">{request.message}</div>
                      
                   </div>
                );
             })}
          </div>
       </div>
    );
 };

export default Requests;