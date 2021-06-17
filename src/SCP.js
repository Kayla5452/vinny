import React from 'react';
import imgs from "./data.json";

 
const SCP = ({scp}) =>
{
    return(
        <div>
            <center><h2>SCP List</h2></center>
            {
                scp.map(
                    (scp) => (
 
                        <div className="row">
                        <div className="col p-3 m-2 rounded border dropshadow" key={scp.item}>
                        <h2>Item: {scp.item}</h2>
                        <h3>Class: {scp.class}</h3>
                        <h3>Description</h3>
                        <p>{scp.description}</p>
                        <h3>Containment Procedures</h3>
                        <p>{scp.procedures}</p>
                        <p><img src={imgs.Images} alt={scp.item} className="p-1 border shadow" /></p>
                        </div>
                        </div>
                    )
                )
            }
        </div>
    )
};
 
export default SCP;