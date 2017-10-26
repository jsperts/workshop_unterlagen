import React, { Component } from 'react';

class Form extends Component {

  constructor() {
    super();

    this.myRefs = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const data = Object
        .keys(this.myRefs)
        .reduce((map, key) => Object.assign(map, { [key]: this.myRefs[key].value }), {});

    this.props.onSubmit(data);
  }

  render() {
    const { form, submittedForm } = this.props;

    return (<div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              defaultValue={form.name}
              ref={(elem) => this.myRefs.name = elem}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
              type="text"
              className="form-control"
              name="comment"
              id="comment"
              defaultValue={form.comment}
              ref={(elem) => this.myRefs.comment = elem}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
              className="form-control"
              name="country"
              id="country"
              defaultValue={form.country}
              ref={(elem) => this.myRefs.country = elem}
          >
            {
              ['Germany', 'USA', 'UK'].map((opt) => <option
                  key={opt}
                  value={opt}
              >
                {opt}
              </option>)
            }
          </select>
        </div>
        <div className="checkbox">
          <label>
            <input
                type="checkbox"
                name="active"
                id="active"
                defaultChecked={form.active}
                ref={(elem) => this.myRefs.active = elem}
            />
            Active
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div>
        Submitted form: {JSON.stringify(submittedForm)}
      </div>
    </div>);
  }
}

export default Form;
