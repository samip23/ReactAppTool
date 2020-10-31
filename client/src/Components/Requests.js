import React, { Component, Select, useState } from "react";
import { Form, FormGroup, Input, Label, Button, Alert } from "reactstrap";
import axios from "axios";
/* import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "material-ui/Dialog"; */

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class Requests extends Component {
  constructor() {
    super();

    this.state = {
      formState: {
        name: "",
        email: "",
        message: "",
        subjectHeader: "",
      },
      requests: [
        {
          name: "",
          email: "",
          message: "",
          subjectHeader: "",
        },
      ],
      submittedValue: false,
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
    const { name, email, message, subjectHeader } = formState;

    requests.push({ name, email, message, subjectHeader });
    //this.setState(requests);


    this.setState({ ...this.state, requests, submittedValue: true });

    const form = await axios.post("http://localhost:3001/api/form", {
      name,
      email,
      message,
      subjectHeader: "Request Submitted",
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

        <Table requests={this.state.requests} isSubmitted={this.state.submittedValue} />
      </div>
    );
  }
}

const Table = ({ requests = [], isSubmitted }) => {
  let dropValue1;
  let dropValue2;

  const [drop, setDrop] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    setOpen(false);

    if (drop === "Accept") {

      const form = await axios.post("http://localhost:3001/api/form", {
        name: "System Admin",
        email: "sysadmin@test.com",
        message: "Hello, your request is approved.",
        subjectHeader: "Request Approved",
      });

    }
    else if (drop === "Reject") {
      const form = await axios.post("http://localhost:3001/api/form", {
        name: "System Admin",
        email: "sysadmin@test.com",
        message: "Hello, your request is rejected.",
        subjectHeader: "Request Rejected",
      });
    }
  }

  const handleSelectChange = (e) => {
    e.preventDefault();

    setDrop(e.target.value);
    setOpen(true);

    //let drop = e.target.value;

    //if (drop) {
    //return (
    //<div>
    //<Dialog>
    //<DialogTitle>Alert</DialogTitle>
    //<DialogContent>
    //<DialogContentText>Testing this alert {drop}</DialogContentText>
    //</DialogContent>
    //<DialogActions>
    //<Button color="primary">Ok</Button>
    //</DialogActions>
    //</Dialog>
    //</div>
    //);
    //}
  };
  if (drop === "Accept" || drop === "Reject") {
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
            if (request.name === "" && request.email === "" && request.message === "") {
              return (

                <div>
                  <div className="column">{request.name}</div>
                  <div className="column">{request.email}</div>
                  <div className="column">{request.message}</div>
                </div>
              )

            }
            return (
              <div>
                <div className="column">{request.name}</div>
                <div className="column">{request.email}</div>
                <div className="column">{request.message}</div>
                <div>
                  <select onChange={handleSelectChange}>
                    <option value="Please Specify"  disabled defaultValue onClick={handleClickOpen}>
                      Please Specify
                    </option>
                    <option value="Accept" disabled ref={(el) => (dropValue1 = el)} onClick={handleClickOpen}>
                      Accept
                    </option>
                    <option value="Reject" disabled ref={(el) => (dropValue2 = el)} onClick={handleClickOpen}>
                      Reject
                    </option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
        <Dialog open={open}
          onClose={handleClose}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure you want to {drop}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClick}>Yes</Button>
          </DialogActions>
        </Dialog>
      </div>
    );

  } else if (isSubmitted) {
    console.log("are we here 2", isSubmitted)

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
            if (request.name === "" && request.email === "" && request.message === "") {
              return (

                <div>
                  <div className="column">{request.name}</div>
                  <div className="column">{request.email}</div>
                  <div className="column">{request.message}</div>
                </div>
              )

            }
            return (
              <div>
                <div className="column">{request.name}</div>
                <div className="column">{request.email}</div>
                <div className="column">{request.message}</div>
                <div>
                  <select onChange={handleSelectChange}>
                    <option value="Please Specify" defaultValue onClick={handleClickOpen}>
                      Please Specify
                      </option>
                    <option value="Accept" ref={(el) => (dropValue1 = el)} onClick={handleClickOpen}>
                      Accept
                      </option>
                    <option value="Reject" ref={(el) => (dropValue2 = el)} onClick={handleClickOpen}>
                      Reject
                      </option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      </div>)
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Requests;