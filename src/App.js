import React, { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Typography from "@material-ui/core/Typography";
const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [tours, setTours] = useState([]);

  //Fetch tour details
  const fetchTours = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = (id) => {
    setTours(tours.filter((el) => el.id !== id));
  };

  if (tours.length === 0)
    return (
      <div>
        <h1>No tours left.</h1>
        <button className="btn" onClick={() => fetchTours()}>
          Fetch Tours
        </button>
      </div>
    );
  return (
    <main>
      <Typography variant="h2" align="center" >
        TOURS
      </Typography>
      <Tours tours={tours} handleDelete={handleDelete} />
    </main>
  );
}
