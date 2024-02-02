import "./contact.css";

function contact() {
  return ( 
    <div className="contact">
    <div className="form-container">
     <h1>
        Send a Message to Us!
     </h1>
     <form>
      <label>Name</label>
     <input type="text" name="to_name" required/>
     <label>Email</label>
     <input type="email" name="from_email" required/>  
     <label>Message</label>
      <textarea name="message" required/>
     <button className="btn" aria-required type="submit">Send</button>
    </form>
    </div>
  </div>
  );
}

export default contact;
