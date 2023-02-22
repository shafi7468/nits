import React, { useState } from "react";

export default function JsonTest() {
  const [textData, setTextData] = useState([]);
  const getData = () => {};
  const showFile = async (e) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;

      const strData = text.toString().split(";");
     
    
      setTextData(strData);
      console.log(textData);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="form-inline">
            <input type="file" onChange={(e) => showFile(e)} />
           
          </div>
        </div>
      </div>

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

        {textData.map((text, ind) => {
        return (
           
             <tr key={ind}>
            <td>{text.split('*')[0]}</td>
            <td>{text.split('*')[1]}</td>
            <td>{text.split('*')[2]}</td>
            <td>{text.split('*')[3]}</td>
            <td>{text.split('*')[4]}</td>                          
         </tr>
      
        );
      })}


        
        </tbody>
      </table>
   


     
    </>
  );
}
