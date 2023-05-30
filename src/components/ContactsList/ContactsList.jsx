import PropTypes from 'prop-types';
import css from '../App/App.module.css';

const ContactsList = ({ visibleContacts, deleteContact }) => {
  return (
    <div className={css.contacts}>
      <ul className={css.numberList}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            <span>{contact.name}</span>
            <span className={css.number}> : {contact.number}</span>
            <button
              className={css.deleteBtn}
              onClick={() => deleteContact(contact.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
ContactsList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func,
};

export default ContactsList;
