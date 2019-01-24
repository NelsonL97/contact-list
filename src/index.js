import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ContactList from "./ContactList";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <ContactList />
    </div>,
    destination
);
