import React, { Component } from "react";
import Contact from "./Contact";
import "./ContactList.css";

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    }

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addContact(e) {
    var contactArray = this.state.contacts.slice();

    if(this.name.value !== "") {
      contactArray.unshift({
        text: this.name.value.concat(" ", this.email.value, " ", this.phone.value),
        key: Date.now()
      });

      this.setState({
        contacts: contactArray
      });

      this.name.value = "";
      this.email.value = "";
      this.phone.value = "";
    }

    console.log(contactArray);

    // To prevent the page from being re-rendered
    e.preventDefault();
  }

  deleteContact(key) {
    var filteredContacts = this.state.contacts.slice().filter(function(contact) {
      return (contact.key !== key);
    });

    this.setState({
      contacts: filteredContacts
    });
  }

  render() {
    return(
      <div className="contactListMain">
      <div className="header">
        <form onSubmit={this.addContact}>
          <input ref={(a) => this.name = a} placeholder="Full Name"></input>
          <br />
          <br />
          <input ref={(b) => this.email = b} placeholder="E-Mail"></input>
          <br />
          <br />
          <input ref={(c) => this.phone = c} placeholder="Phone"></input>
          <button type="submit">Add</button>
          </form>
          <br/>
      </div>
      <Contact entries={this.state.contacts} delete={this.deleteContact}/>
      </div>
    );
  }
}

export default ContactList;
