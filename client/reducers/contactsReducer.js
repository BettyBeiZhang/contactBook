const contacts = [
  {id:1, Fullname:"Bei Zhang", phone:"415-111-1111", address:'123 Orizaba Ave', email:"bei@eample.com"},
  {id:2, Fullname:"Andrew Yeh", phone:"415-222-2222", address:'678 Arch Ave', email:"andrew@eample.com"},
  {id:3, Fullname:"Paul Chang", phone:"415-333-3333", address:'579 7th Ave', email:"paul@eample.com"},
];

const  initial_state = {
  contacts: contacts,
  currentContacts: {},
};


export default function(state = initial_state, action) {
  switch (action.type) {
  case "EDIT_CONTACTS":
  return Object.assign({}, state, { currentContacts: action.payload })


  default: return state;
 }

}
