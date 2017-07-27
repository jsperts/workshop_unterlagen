import React from 'react';

function Form({
  form,
  submittedForm,
  onValueChange,
  onSubmit,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={form.name}
            onChange={(e) => onValueChange('name', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            type="text"
            className="form-control"
            name="comment"
            id="comment"
            value={form.comment}
            onChange={(e) => onValueChange('comment', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            className="form-control"
            name="country"
            id="country"
            value={form.country}
            onChange={(e) => onValueChange('country', e.target.value)}
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
              checked={form.active}
              onChange={() => onValueChange('active', !form.active)}
            />
            Active
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="gender"
              id="gender-m"
              checked={'M' === form.gender}
              onChange={() => onValueChange('gender', 'M')}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="gender"
              id="gender-f"
              checked={'F' === form.gender}
              onChange={() => onValueChange('gender', 'F')}
            />
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div>
        Submitted form: {JSON.stringify(submittedForm)}
      </div>
    </div>
  );
}

export default Form;
