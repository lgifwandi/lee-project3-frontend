import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"
import Index from "../pages/Index"
import Show from "../pages/Show"
import Applicants from "../pages/Applicants"

function Main(props) {
  const [ job, setJob ] = useState(null);

  const URL = "https://lee-project3-backend.herokuapp.com//job/";

  const getJob = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setJob(data);
  }

  const createJob = async person => {
    console.log(person)
    // make post request to create job
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    // update list of job
    getJob();
  }

  const updateJob = async (person, id) => {
    // make put request to create job
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    // update list of job
    getJob();
  }

  const deleteJob = async id => {
    // make delete request to create job
    await fetch(URL + id, {
      method: "DELETE",
    })
    // update list of job
    getJob();
  }

  useEffect(() => getJob(), []);

  return (
    <main>
      <Switch> 
        
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/applications">
          <Index job={job} createJob={createJob} />
        </Route>
        <Route
          path="/job/:id"
          render={rp => (
            <Show
              job={job}
              updateJob={updateJob}
              deleteJob={deleteJob}
              {...rp}
            />
          )}
        />
        <Route exact path="/applicants">
          <Applicants job={job} createJob={createJob}/>
        </Route>

        
       


      </Switch>
    </main>
  );
}

export default Main;