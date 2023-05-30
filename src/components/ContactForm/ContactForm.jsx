import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from '../App/App.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    // console.log(e.target.form.elements[e.target.name].value);
    this.setState({
      [e.target.name]: e.target.form.elements[e.target.name].value,
    });

    // switch (e.target.name) {
    //   case 'name':
    //     this.setState({
    //       name: e.target.value,
    //     });
    //     break;
    //   case 'number':
    //     this.setState({
    //       number: e.target.value,
    //     });
    //     break;
    //   default:
    //     console.log('error');
    // }
  };
  handleSubmitaddContact = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmitaddContact}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.label}>
          Telefon
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Telefon"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
