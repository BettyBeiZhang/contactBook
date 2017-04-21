import {browserHistory} from "react-router";

export function editContacts(member) {
  browserHistory.push('/edit');
  return {
    type: "EDIT_CONTACTS",
    payload: member
  }
}

export function addContacts(attributes) {
  browserHistory.push('/');
  return {
    type: "ADD_CONTACTS",
    payload: attributes
  }
}
