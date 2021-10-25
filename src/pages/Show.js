import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const job = props.job;
  const person = job.find(p => p._id === id);

  const [ editForm, setEditForm ] = useState(person);

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.updateJob(editForm);
    props.history.push("/");
  }

  const removePerson = () => {
    props.deleteJob(person._id);
    props.history.push("/");
  }

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h3>{person.address}</h3>
      <h4>{person.contact}</h4>
      <h5>{person.email}</h5>
      <button id="delete" onClick={removePerson}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        /> 
        <input 
          type="text"
          value={editForm.address}
          name="address"
          placeholder="address"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.contact}
          name="contact"
          placeholder="contact"
          onChange={handleChange}
        />
         <input
          type="text"
          value={editForm.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input type="submit" value="Update Person" />
      </form>
    </div>
  )
}

export default Show;