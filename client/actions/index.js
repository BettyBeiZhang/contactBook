import {browserHistory} from "react-router";


export function addContacts(attributes) {
  browserHistory.push('/');
  return {
    type: "ADD_CONTACTS",
    payload: attributes
  }
}


export function editContacts(member) {
  browserHistory.push('/edit');
  return {
    type: "EDIT_CONTACTS",
    payload: member
  }
}

export function updateMember(member) {
  browserHistory.push('/');
  return {
    type: 'UPDATE_MEMBER',
    payload: member
  }
}

export function deleteMember(member) {
  browserHistory.push('/');
  return {
    type: 'DELETE_MEMBER',
    payload: member
  }
}
