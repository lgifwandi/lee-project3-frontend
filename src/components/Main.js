import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
  const [ job, setJob ] = useState(null);

  const URL = "http://localhost:4000/job/";

  const getJob = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setJob(data);
  }

  const createJob = async person => {
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
      </Switch>
    </main>
  );
}

export default Main;