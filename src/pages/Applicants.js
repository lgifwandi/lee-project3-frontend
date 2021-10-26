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
        
         <label for="exampleInputName">Full Name</label>
           <input 
                type="text"
                value={newForm.name} 
                name="name"  
                placeholder="Enter your name and surname" 
                onChange={handleChange}
            />
       
            <label for="exampleInputEmail1">Email address</label>
            <input 
                type="email"
                value={newForm.email} 
                name="email"    
                placeholder="Enter your email address"
                onChange={handleChange}
            />
   
            <label for="inputAddress">Address</label>
            <input 
                type="text"
                value={newForm.address} 
                name="address"   
                placeholder="1234 Main St"
                onChange={handleChange}
            />
      
            <label for="inputCity">City</label>
            <input 
                type="text"
                value={newForm.city} 
                name="city"  
                placeholder="Istanbul"
                onChange={handleChange}
            />
        
            <label for="inputZip">Zip</label>
            <input 
                type="text"
                value={newForm.zip}  
                name="zip"
                placeholder="34000"
                onChange={handleChange}
            />
       
            <label for="example-tel-input">Telephone</label>
            <input 
                type="tel"
                value={newForm.tel} 
                name="tel" 
                placeholder="1-555-555-5555" 
                onChange={handleChange}
            />
       
            <label for="example-date-input">Start Date</label>
            <input
                type="date"
                value={newForm.starting_date}  
                name="starting_date"    
                onChange={handleChange}
            />
      
            <label class="upload">Upload your resume:</label>
            <input 
                type="file"
                value={newForm.file} 
                name="file"
                onChange={handleChange}
            />
      

      <input type="submit" value="submit"/>
      </form>
      {props.job ? loaded() : loading()}
    </section>
  );
}

export default Applicants;