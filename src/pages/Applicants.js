import { useState } from "react"
import { Link } from "react-router-dom"

function Applicants(props) {
  // state to hold formData
  const [ newForm, setNewForm ] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    tel: "",
    starting_date: "",
    file: "",
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
        email: "",
        address: "",
        city: "",
        zip: "",
        tel: "",
        starting_date: "",
        file: "",
    });
  }

  // loaded function
  const loaded = () => {
    return props.job.map(person => (
      <div key={person._id} className="person">
        <Link to={`/job/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <h3>{person.email}</h3>
        <h4>{person.address}</h4>
        <h5>{person.city}</h5>
        <p>{person.zip}</p>
        <p>{person.tel}</p>
        <p>{person.starting_date}</p>
        <p>{person.file}</p>
      </div>
    ));
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        
       
      </form> 
      {props.job ? loaded() : loading()}
    </section>
  );
}

export default Applicants;