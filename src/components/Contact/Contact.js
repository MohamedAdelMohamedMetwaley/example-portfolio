import "./Contact.css";
import Swal from "sweetalert2";

function Contact({ refProps }) {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f4e0f9fe-b1a4-49a2-a9c0-24f223471d6c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent, will get back to you as soon as possible! 😊",
        icon: "success",
      });
      document.querySelectorAll("input").forEach((input) => (input.value = ""));
      document.querySelector("textarea").value = "";
    }
  };

  return (
    <section ref={refProps} className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Me</h2>
        <div className="input-box">
          <label>Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
