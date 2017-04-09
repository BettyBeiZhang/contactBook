import {browserHistory} from "react-router";

export function editContacts(contact) {
  browserHistory.push('/edit');
  return {
    type: "EDIT_CONTACTS",
    payload: contact
  }
}
