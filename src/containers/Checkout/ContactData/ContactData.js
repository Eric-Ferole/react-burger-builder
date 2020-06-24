import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from "./ContactData.css";
import axios from '../../../axios.order';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderFrom: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your name'
          },
          value: ''
        }, 
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Street'
          },
        }, 
        zipCode: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'ZIP CODE'
        },  
          country: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Country'
  
          },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your E-mail'
        },
        deliveryMethod:{
          elementType: 'select',
          elementConfig: {
            option: [
              {value: 'fastest', displayValue: 'Fastest'},
              {value: 'cheapest', displayValue: 'Cheapest'}
            ]
          }
        },
    loading: false
  }

  orderHandler = (event) => {
    console.log(this.props.ingredients)
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (<form action="">
    <Input
      elementType="..." elementConfig="..." value="..."
    />
    <Input
      inputtype="input"
      type="text"
      name="email"
      placeholder="Your Email"
    />
    <Input
      inputtype="input"
      type="text"
      name="street"
      placeholder="Street"
    />
    <Input
      inputtype="input"
      type="text"
      name="postal"
      placeholder="Postal Code"
    />
    <Button btnType="Success" clicked={this.orderHandler}>
      Order
    </Button>
  </form>);
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
