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
        <h3>{person.email}</h3>
        <h4>{person.address}</h4>
        <h5>{person.city}</h5>
        <p>{person.zip}</p>
        <p>{person.tel}</p>
        <p>{person.starting_date}</p>
        <p>{person.file}</p>
      <button id="delete" onClick={removePerson}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        
    
      <div className="form-group">
         <label for="exampleInputName">Full Name</label>
           <input 
                type="text"
                value={editForm.name} 
                name="name"  
                placeholder="Enter your name and surname" 
                onChange={handleChange}
            />
       </div>

       <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
                type="email"
                value={editForm.email} 
                name="email"    
                placeholder="Enter your email address"
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label for="inputAddress">Address</label>
            <input 
                type="text"
                value={editForm.address} 
                name="address"   
                placeholder="1234 Main St"
                onChange={handleChange}
            />
        </div>

        
        <div className="form-group">
            <label for="inputCity">City</label>
            <input 
                type="text"
                value={editForm.city} 
                name="city"  
                placeholder="Istanbul"
                onChange={handleChange}
            />
            
            
            <div className="form-group"></div>
            <label for="inputZip">Zip</label>
            <input 
                type="text"
                value={editForm.zip}  
                name="zip"
                placeholder="34000"
                onChange={handleChange}
            />

          </div>
          
          <div className="form-group">
            <label for="example-tel-input">Telephone</label>
            <input 
                type="tel"
                value={editForm.tel} 
                name="tel" 
                placeholder="1-555-555-5555" 
                onChange={handleChange}
            />

          </div>
      
          <div className="form-group">
            <label for="example-date-input">Start Date</label>
            <input
                type="date"
                value={editForm.starting_date}  
                name="starting_date"    
                onChange={handleChange}
            />
           </div>
            
           <div className="form-group">
            <label className="upload">Upload your resume:</label>
            <input 
                type="file"
                value={editForm.file} 
                name="file"
                onChange={handleChange}
            />
            </div>
      <input type="submit" value="Update Info" />
      </form> 
    </div>
  )
}

export default Show;