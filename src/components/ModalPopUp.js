import React, { Component } from 'react';
import '../style.scss';

class ModalPopUp extends Component {
  render() {
    const { name } = this.props;
    return (
      <section>
        <h3>Hello {name}</h3>
      </section>
    );
  }
}

export default ModalPopUp;
