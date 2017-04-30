var contacts = [
  {id:1, fullname:"Bei Zhang", phone:"415-111-1111", address:'123 Orizaba Ave', email:"bei@example.com"},
  {id:2, fullname:"Andrew Yeh", phone:"415-222-2222", address:'678 Arch Ave', email:"andrew@example.com"},
  {id:3, fullname:"Paul Chang", phone:"415-333-3333", address:'579 7th Ave', email:"paul@example.com"}
];

const  INITIAL_STATE = {
  contacts: contacts,
  currentContacts: {},
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
   case  "EDIT_CONTACTS":
   return Object.assign({}, state, { currentContacts: action.payload })

   case 'UPDATE_MEMBER':
    var newContacts = updateMember(state.contacts, action.payload);
    return Object.assign({}, state, { contacts: newContacts })

    case 'DELETE_MEMBER':
    var newContacts = deleteMember(state.contacts, action.payload);
    return Object.assign({}, state, { contacts: newContacts })

    case "ADD_CONTACTS":
     var member = action.payload
     member.id = generateId(state.contacts);
     var newContacts = state.contacts.concat([member])
     return Object.assign({}, state, { contacts: newContacts })

   default:
   return state;
 }
}



const deleteMember = (contacts, member) => {
  for(var i=0; i<contacts.length; i++){
    if(member.id === contacts[i].id){
      return contacts.slice(0,i).concat(contacts.slice(i+1));
    }
  }
}

const updateMember = (contacts, member) => {
  for (var i = 0; i < contacts.length; i++) {
    if (member.id === contacts[i].id) {
      return contacts.slice(0, i).concat(member).concat(contacts.slice(i + 1));
    }
  }
}

const generateId = (contacts) => {
  if (contacts.length === 0) {
    return 1;
  }
  return Math.max.apply(null, contacts.map((i) => i.id)) + 1;
}
