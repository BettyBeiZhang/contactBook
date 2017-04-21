import {browserHistory} from "react-router";

export function editContacts(contact) {
  browserHistory.push('/edit');
  return {
    type: "EDIT_CONTACTS",
    payload: contact
  }
}

export function addContacts(attributes) {
  browserHistory.push('/');
  return {
    type: "ADD_CONTACTS",
    payload: attributes
  }
}
