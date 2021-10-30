import Head from "next/head";
import Image from "next/image";
import contact from "../styles/Contact.module.scss";
import getImg from "../lib/prefix";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Secondhand Literature</title>
      </Head>

      <div className={contact.content}>
        <h1>Contact</h1>
        Have any questions, business inquiries, or want to take part in our
        mission? Don’t hesitate to reach out to us at <a href = "mailto: secondhandliterature@gmail.com">secondhandliterature@gmail.com </a> and we’ll be sure to get back to you as
        soon as we can!
      </div>

      <section className={contact.formcontainer}>
        <iframe
          className={contact.form}
          src="https://docs.google.com/forms/d/e/1FAIpQLSc5puSL7NNypkivN0DuqSJ0SmSgD7iKglokX4pTsvKsCBlE_A/viewform?embedded=true"
        >
          Loading…
        </iframe>
      </section>
    </>
  );
}
