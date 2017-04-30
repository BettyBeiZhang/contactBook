import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateMember, deleteMember } from '../actions/index';
import { bindActionCreators } from 'redux';

class Edit extends Component {

  handleFormSubmit(e) {
    e.preventDefault();
    const attributes = { id: this.props.contacts.id };
    ['fullname', 'phone', 'email'].forEach((a) => {
      attributes[a] = this[a].value;
    })
    this.props.updateMember(attributes);

  }

  handleDelete() {
    var confirmed = confirm("Are you sure you want to delete this member?");
    if (confirmed) {
      this.props.deleteMember(this.props.contacts);
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="OuterContainer">
        <Link to="/"><i className="fa fa-times fa-3x"></i></Link>

        <form data-toggle="validator" onSubmit={this.handleFormSubmit.bind(this)}>
          <h3>Edit team member</h3>
          <p>Edit contact info, location and phone.</p>

          <label className="control-label">Info</label>
          <br/>
          <div>
            <input className="form-control" type="text" ref={(input) => this.fullname = input} placeholder="fullname" defaultValue={this.props.contacts.fullname} required />
            <br/>
            <input className="form-control" type="tel" pattern="^\d{3}-\d{3}-\d{4}$" ref={(input) => this.phone = input} placeholder="phone" defaultValue={this.props.contacts.phone} required />
            <br/>
            <input className="form-control" type="email" ref={(input) => this.email = input} placeholder="email" defaultValue={this.props.contacts.email} required />
          </div>
          <br/>
          <hr/>
          <button type="submit" className="btn btn-danger">Save</button>
        </form>
        <button onClick={this.handleDelete.bind(this)} className="btn btn-primary">Delete</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    contacts: state.contactsReducer.currentContacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMember, deleteMember }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
