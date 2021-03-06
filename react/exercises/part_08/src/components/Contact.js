import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ContactDetails({ email, type }) {
  return (
    <div className="row">
      <div className="col-xs-6">Email: {email}</div>
      <div className="col-xs-6">Type: {type}</div>
    </div>
  );
}

ContactDetails.defaultProps = {
  email: '',
};

ContactDetails.propTypes = {
  email: PropTypes.string,
  type: PropTypes.oneOf(['Private', 'Business']).isRequired,
};

function ContactControls({ onDelete, onEdit, onToggleDetails, showDetails }) {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <span className="glyphicon glyphicon-remove" onClick={onDelete} />
          <span className="glyphicon glyphicon-edit" onClick={onEdit} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12" onClick={onToggleDetails}>
          {!showDetails && (
            <span className="glyphicon glyphicon-chevron-down" />
          )}
          {showDetails && <span className="glyphicon glyphicon-chevron-up" />}
        </div>
      </div>
    </div>
  );
}

ContactControls.defaultProps = {
  showDetails: false,
};

ContactControls.propTypes = {
  onDelete: PropTypes.func.isRequired,
  showDetails: PropTypes.bool,
  onToggleDetails: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      showDetails: false,
    };

    this.onToggleDetails = this.onToggleDetails.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onToggleDetails() {
    this.setState(state => ({
      showDetails: !state.showDetails,
    }));
  }

  onDelete() {
    this.props.onDelete(this.props.id);
  }

  onEdit() {
    this.props.onEdit(this.props.id);
  }

  render() {
    const { name, tel, type, email } = this.props;

    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-xs-6">
            <div>Name: {name}</div>
            <div>Tel.: {tel}</div>
          </div>
          <div className="col-xs-6 text-right">
            <ContactControls
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              showDetails={this.state.showDetails}
              onToggleDetails={this.onToggleDetails}
            />
          </div>
        </div>
        {this.state.showDetails && <ContactDetails email={email} type={type} />}
      </li>
    );
  }
}

Contact.defaultProps = {
  name: '',
  tel: '',
};

Contact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  tel: PropTypes.string,
  email: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Contact;
