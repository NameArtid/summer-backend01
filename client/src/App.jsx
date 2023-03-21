import React, { useEffect, useState } from "react";

export default function App() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const getcat = async () => {
      await fetch("http://127.0.0.1:4000/category/getAll")
        .then((response) => response.json())
        .then((data) => setCat(data));
    };
    getcat();
  }, []);

  return (
    <div>
      <h1>Read Data from Backend</h1>
      <hr />
      <ul>
        {
          cat.map((c) => (
          <li key={c.id}>
            {c.id} {c.name} {c.description}
          </li>
          ))
        }
      </ul>
      {/* {JSON.stringify(cat)} */}
    </div>
  );
}
