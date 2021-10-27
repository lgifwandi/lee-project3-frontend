import { useState } from "react"

function Index(props) {
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

  return (
    <section>
      <form onSubmit={handleSubmit}>
        
      <div className="form-group">
         <label for="exampleInputName">Full Name</label>
           <input 
                type="text"
                value={newForm.name} 
                name="name"  
                placeholder="Enter your name and surname" 
                onChange={handleChange}
            />
       </div>

       <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
                type="email"
                value={newForm.email} 
                name="email"    
                placeholder="Enter your email address"
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label for="inputAddress">Address</label>
            <input 
                type="text"
                value={newForm.address} 
                name="address"   
                placeholder="1234 Main St"
                onChange={handleChange}
            />
        </div>

        <div className="form-row">
        <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input 
                type="text"
                value={newForm.city} 
                name="city"  
                placeholder="Istanbul"
                onChange={handleChange}
            />
            </div>
            
            <div className="form-group col-md-2"></div>
            <label for="inputZip">Zip</label>
            <input 
                type="text"
                value={newForm.zip}  
                name="zip"
                placeholder="34000"
                onChange={handleChange}
            />

          </div>
          
          <div className="form-group">
            <label for="example-tel-input">Telephone</label>
            <input 
                type="tel"
                value={newForm.tel} 
                name="tel" 
                placeholder="1-555-555-5555" 
                onChange={handleChange}
            />

          </div>
      
          <div className="form-group">
            <label for="example-date-input">Start Date</label>
            <input
                type="date"
                value={newForm.starting_date}  
                name="starting_date"    
                onChange={handleChange}
            />
           </div>
            
           <div className="form-group mt-3">
            <label className="upload">Upload your resume:</label>
            <input 
                type="file"
                value={newForm.file} 
                name="file"
                onChange={handleChange}
            />
            </div>

      {/* <input type="submit" value="submit"/> */}
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      
    </section>
  );
}

export default Index;