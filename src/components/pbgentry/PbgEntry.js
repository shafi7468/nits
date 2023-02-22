import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PbgEntry() {

  const [name, setName] = useState("");
  const [cstartdate, setCSDate] = useState("");
  const [cenddate, setCEDate] = useState("");
  const [pstartdate, setPSDate] = useState("");
  const [penddate, setPEDate] = useState("");

  const [contractData, setData] = useState([]);


const addData=async ()=>{
 try {

  const cData = {    "id": "3",    "name": name,    "cstartdate": cstartdate,    "cenddate": cenddate,    "pstartdate": pstartdate,    "penddate": penddate  }  ;
  const response = await axios.post('https://shafi7468.github.io/json/contract.json', cData).then(res=>res.data);
  console.log(response);
     
} catch (error) {
  console.log(error)
}
  //setData([...contractData,{name:name,cstartdate:cstartdate,cenddate:cenddate,pstartdate:pstartdate,penddate:penddate}]);

}

  const handleSubmit = (event) => {
    event.preventDefault();
    addData();
  };

  const getData = async () => {
    const resData = await axios
      .get(
        "https://shafi7468.github.io/json/contract.json"
      );      
    setData(resData.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "70px" }}>
          <div className="row">
            <div className="col-3">
              Name
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="col-3">
              Contract Start Date
              <input type="date" className="form-control" onChange={(e) => setCSDate(e.target.value)}></input>
            </div>
            <div className="col-3">
              Contract End Date
              <input type="date" className="form-control" onChange={(e) => setCEDate(e.target.value)}></input>
            </div>
            <div className="w-100"></div>
            <div className="col-3"></div>
            <div className="col-3">
              PBG Start Date<input type="date" className="form-control" onChange={(e) => setPSDate(e.target.value)}></input>
            </div>
            <div className="col-3">
              PBG End Date<input type="date" className="form-control" onChange={(e) => setPEDate(e.target.value)}></input>
            </div>

            <div className="w-100"></div>
            <div className="col-3"></div>
            <div className="col-3 m-2" align="center">
              <input
                type="submit"
                className="btn btn-success"
                value="Save"
              ></input>
            </div>
          </div>
        </div>
      </form>

      <table className="table table-bordered table stripped">
        <thead>
          <tr>
            <th>Contract Name</th>
            <th>Contract Start Date</th>
            <th>Contract End Date</th>
            <th>PBG Start Date</th>
            <th>PBG End Date</th>
          </tr>
        </thead>
        <tbody>
          {contractData.map((contract, ind) => {
            return (
            
                <tr>
                  <td>{contract.name}</td>
                  <td>{contract.cstartdate}</td>
                  <td>{contract.cenddate}</td>
                  <td>{contract.pstartdate}</td>
                  <td>{contract.penddate}</td>                 
                </tr>
            
            );
          })}
        </tbody>
      </table>
    </>
  );
}
