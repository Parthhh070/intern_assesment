import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getData")
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-100 vh-100 display-flex justify-content-center align-items-center">
      <div className="w-50">
        <table className="table">
          <thead>
            <tr>
              <th>intensity</th>
              <th>start_year</th>
              <th>end_year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr>
                  <td>{data.sector}</td>
                  <td>{data.topic}</td>
                  <td>{data.insight}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
