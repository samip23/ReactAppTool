import React, { Component, Select } from "react";
import { Form, FormGroup, Input, Label, Button, Alert } from "reactstrap";
import axios from "axios";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

class Requests extends Component {
  constructor() {
    super();

    this.state = {
      formState: {
        name: "",
        email: "",
        message: "",
      },
      requests: [
        {
          name: "",
          email: "",
          message: "",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChange = (event) => {
    this.setState({
      formState: {
        ...this.state.formState,
        [event.target.name]: event.target.value,
      },
    });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { requests, formState } = this.state;
    const { name, email, message } = formState;

    requests.push({ name, email, message });
    this.setState(requests);
    const form = await axios.post("http://localhost:3001/api/form", {
      name,
      email,
      message,
    });

    //this.setState({
    //requests: [
    //...requests,
    //{
    //name,
    //email,
    //message,
    //},
    //],
    //});
  }



  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{ width: "600px" }}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input type="text" name="name" onChange={this.onChange} />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="email" name="email" onChange={this.onChange} />
          </FormGroup>

          <FormGroup>
            <Label for="message">Message:</Label>
            <Input type="textarea" name="message" onChange={this.onChange} />
          </FormGroup>

          <Button>Submit</Button>
        </Form>

        <Table requests={this.state.requests} />
      </div>
    );
  }
}

const Table = ({ requests = [] }) => {

  let dropValue

  const handleSelectChange = e => {
    e.preventDefault()

    let drop = dropValue.value

    if (drop) {
      return (
        <div>
          <Dialog>
            <DialogTitle>Alert</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Testing this alert {drop}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary">
                Ok
          </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

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
        {requests.map((request, key) => {
          console.log(request);
          return (
            <div>
              <div className="column">{request.name}</div>
              <div className="column">{request.email}</div>
              <div className="column">{request.message}</div>
              <div>
                <select onChange={handleSelectChange}>
                  <option value="Please Specify" defaultValue>Please Specify</option>
                  <option value="Accept" ref={el => dropValue = el}>Accept</option>
                  <option value="Reject" ref={el => dropValue = el}>Reject</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;