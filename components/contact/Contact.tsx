import React from "react";
import Section from "../section/Section";

const Contact: React.FC = () => {
  return (
    <Section>
      <h3>Contact</h3>
      <form action="mailto:nguyen.jeffreyson@gmail.com" className="contactForm">
        <input placeholder="Subject" name="subject" type="text" />
        <textarea name="body" placeholder="Additional information" />
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="submitButton"
        />
      </form>
    </Section>
  );
};

export default Contact;
