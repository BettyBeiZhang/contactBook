import  React, { Component } from 'react';
import { connect } from 'redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { editContacts } from '../actions/index';
import {contactsReducer} from '../reducers/contactsReducer';

class Home extends Component {

   renderContacts(){
     return this.props.contacts.map((item) => {
       return (
         <a key={item.id} onClick={() => this.props.editContacts(item)} className="list-group-item">
          <div className="media col-md-3">
            <i className="fa fa-user-circle fa-3x" aria-hidden="true"></i>
          </div>

          <div>
            <div>{item.Fullname}</div>
            <div>{item.phone}</div>
            {/* <div>{item.address}</div> */}
            <div>{item.email}</div>
          </div>
        </a>
      );
    });
  }

   render(){
     return (
      <div className="outerContainer">
        <Link to="/add"><i className="fa fa-plus fa-3x"></i></Link>
        <h3>My Contacts List</h3>
        <div className="list-group">
          {this.renderContacts()}
        </div>
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ editContacts:editContacts }, dispatch);
}// whenever editMember is called, the result will pass to all the reducers


export default connect(mapStateToProps, mapDispatchToProps)(Home);
