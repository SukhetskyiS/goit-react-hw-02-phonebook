import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { formContactsList, deleteContact } = this.props;
    return (
      <ul>
        {formContactsList.map(item => (
          <li key={item.id}>
            <p className="contact-data">
              {item.name}: {item.number}
            </p>
            <button onClick={() => deleteContact(item.id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
