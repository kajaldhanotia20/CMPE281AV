import React , {useState}  from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function DeleteVehicle() {

    const [name, setName] = useState("");
     function onSubmit(e) {
       e.preventDefault();
       alert(`Vehicle Deleted`);
       window.location.href = "/DeleteVehicle";
     }


    return (
        <div className="text-center m-5-auto">
            <h2>Delete a Vehicle</h2>
            <form onSubmit={onSubmit}>

                <p>
                    <label>Select the vehicle to delete</label><br/>
                    
                    <select name="vehicle_class" id="selectList">
                    <option value="option 1">Vehicle ID-1</option>
                     <option value="option 2">Vehicle ID-2</option>
                    <option value="option 2">Vehicle ID-3</option>
                    <option value="option 2">Vehicle ID-4</option>
                    onChange={(e) => setName(e.target.value)}/>
                </select>
                </p>
              
                <p>
                    <button id="sub_btn" type="submit">Delete</button>
                </p>

            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link></p>
            </footer>
        </div>
    )

}
