import React, { Component } from "react";
import FlipMove from "react-flip-move";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.createContact = this.createContact.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createContact(person) {
    return <li onClick={() => this.delete(person.key)} key={person.key}>{person.text}</li>
  }

  render() {
    var contactEntries = this.props.entries;
    console.log(contactEntries);
    var listContacts = contactEntries.map(this.createContact);
    console.log('after performing the mapping function');
    console.log(listContacts);
    return(
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listContacts}
        </FlipMove>
      </ul>
    );
  }
};

export default Contact;
