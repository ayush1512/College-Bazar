import "./ContactUs.css";
export default function ContactUs() {
  return (
    <>
      <div className="contactUsCard">
        <h2>Contact Us</h2>
        <form style={{ width: "80%" }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            style={{ width: "100%" }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
            style={{ width: "100%" }}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            style={{ width: "100%", height: "150px" }}
          />

          <input
            type="submit"
            value="Submit"
            style={{
              backgroundColor: "darkcyan",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
        </form>
      </div>
      <div className="contactUsCard">
        <h2>Location</h2>
        <p>Indira Gandhi Engineering College, Sagar, 470021</p>
      </div>
      <div className="contactUsCard">
        <h2>Phone Number</h2>
        <p>9109689815, 9752296914</p>
      </div>
      <div className="contactUsCard">
        <h2>Email</h2>
        <p>ayushsaxena1512@gmail.com</p>
      </div>
    </>
  );
}
