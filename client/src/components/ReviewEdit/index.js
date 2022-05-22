import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   roast: "",
   level: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:3000/record/${params.id.toString()}`, { mode: 'cors' });
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedBean = {
     name: form.name,
     roastLevel: form.roastLevel,
     rating: form.rating,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:3000/update/${params.id}`, {
     method: "POST",
     mode: 'cors',
     body: JSON.stringify(editedBean),
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Review</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="roastLevel">Roasting Level: </label>
         <input
           type="text"
           className="form-control"
           id="roastLevel"
           value={form.roastLevel}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="Light"
             id="Light"
             value="Light"
             checked={form.rating === "Light"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="Light" className="form-check-label">Light</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="Medium"
             id="Medium"
             value="Medium"
             checked={form.rating === "Medium"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="Medium" className="form-check-label">Medium</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="Dark"
             id="Dark"
             value="Dark"
             checked={form.rating === "Dark"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="Dark" className="form-check-label">Dark</label>
       </div>
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Review"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}