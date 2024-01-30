import "./contact.css";

function contact() {
  return (
    <div className="contact">

      <div className="heading">
        <h1>Contact</h1>
      </div>
      <div>
        <form action="#">
          <label value="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" required />
          <br />
          <label value="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" required />
          <br />
          <label value="message">Message:</label>
          <br />
          <textarea id="message" name="message" rows="6" cols="40"></textarea>
          <br />
          <input className="submit" type="submit" value="Submit" aria-required />
        </form>
      </div>
    </div>
  );
}

export default contact;
