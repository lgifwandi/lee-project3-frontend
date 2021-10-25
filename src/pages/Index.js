import { useState } from "react"
import { Link } from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [ newForm, setNewForm ] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
  });

  // handleChange function for form
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  }

  // handle submit function for form
  const handleSubmit = event => {
    event.preventDefault();
    props.createJob(newForm);
    setNewForm({
        name: "",
        address: "",
        contact: "",
        email: "",
    });
  }

  // loaded function
  const loaded = () => {
    return props.job.map(person => (
      <div key={person._id} className="person">
        <Link to={`/job/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <h3>{person.address}</h3>
        <h4>{person.contact}</h4>
        <h5>{person.email}</h5>
      </div>
    ));
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.address}
          name="address"
          placeholder="address"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.contact}
          name="contact"
          placeholder="contact"
          onChange={handleChange}
        />
        
        <input
          type="text"
          value={newForm.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input type="submit" value="New applicant" />
      </form>
      {props.job ? loaded() : loading()}
    </section>
  );
}

export default Index;