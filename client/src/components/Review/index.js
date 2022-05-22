import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newBean = { ...form };
 
   await fetch("http://localhost:3000/record/add", {
     method: "POST",
     mode: 'cors',
     headers: {
       "Content-Type": "application/json",
       'Accept': 'application/json'
     },
     body: JSON.stringify(newBean),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", roastLevel: "", rating: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Review</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="roastLevel">Roasting Level</label>
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
       <div className="form-group">
         <input
           type="submit"
           value="Create a new bean"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}