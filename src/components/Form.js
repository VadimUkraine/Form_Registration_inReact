import React, { Component } from 'react';
import ModalPopUp from './ModalPopUp';
import '../style.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      error: '',
      isShowModal: false,
      namePopup: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleResetState = this.handleResetState.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleResetState() {
    const name = this.state.name;
    const password = this.state.password;
    const arr = name.split(' ');
    const arr2 = password.split(' ');
    if (password.length && !name.length) {
      this.setState({ error: 'Username must be fill in' });
    } else if (!password.length && name.length) {
      this.setState({ error: 'Password must be fill in' });
    } else if (!password.length && !name.length) {
      this.setState({ error: 'Please, fill in the form' });
    } else if (password.length && name.length) {
      if (
        arr.length >= 2 ||
        arr[0].length <= 5 ||
        arr2.length >= 2 ||
        arr2[0].length <= 2
      ) {
        this.setState({
          error: 'There maybe mistake in username or password, please check'
        });
      } else {
        this.setState({
          error: '',
          isShowModal: true,
          namePopup: this.state.name
        });
      }
    }
    this.setState({
      name: '',
      password: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userName">
          Username
          <input
            id="userName"
            type="text"
            name="name"
            title="No less then 6 letters"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            name="password"
            title="No less then 3 characters"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <span>{this.state.error}</span>
        <div>
          <button
            type="submit"
            title="Confirm authorization"
            onClick={this.handleResetState}
          >
            Отправить
          </button>
          <button type="button" title="Forgot password">
            Forgot password?
          </button>
        </div>
        {this.state.isShowModal === true ? (
          <ModalPopUp name={this.state.namePopup} />
        ) : null}
      </form>
    );
  }
}

export default Form;
