import { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './App.module.css';
import contactsDefault from '../../Data/contacts.json';
import ContactsList from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: contactsDefault,
    filter: '',
  };

  LOC_CONTACTS = 'local_contacts';

  componentDidMount() {
    const resultContacts = JSON.parse(localStorage.getItem(this.LOC_CONTACTS));
    console.log('result = ', resultContacts);
    if (resultContacts) {
      this.setState({ contacts: resultContacts });
    }
  }
  componentDidUpdate(predProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        this.LOC_CONTACTS,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  checkName = name => {
    const result = this.state.contacts.find(contact => contact.name === name);
    return result ? true : false;
  };

  addContact = obj => {
    const { name, number } = obj;

    if (this.checkName(name)) {
      alert('Такий контакт вже існує !!!');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  render() {
    const visibleContacts = this.getVisibleContact();
    return (
      <div className={css.content}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2 className={css.contact}>Contacts</h2>

        <Filter handleFilter={this.handleFilter} filter={this.state.filter} />

        <ContactsList
          visibleContacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
