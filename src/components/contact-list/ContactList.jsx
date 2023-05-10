import css from './ContactList.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.length > 0 ? (
          <ul className={css.contactsList}>
            {this.props.contacts.map(contact => (
              <li className={css.contactItem} key={contact.id}>
                {`${contact.name}: `}
                <span className={css.contactItemNumer}>{contact.number}</span>
                <button
                  className={css.contactItemDeleteBtn}
                  onClick={() => this.props.deleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h5>No Contacts</h5>
        )}
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;