import Head from "next/head";
import Image from "next/image";
import how from "../styles/How.module.scss";
import getImg from "../lib/prefix";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works | Secondhand Literature</title>
      </Head>

      {/* <header className={how.header}>
            <h1>How it Works</h1>
        </header> */}

      <section className={how.mapcontainer}>
        <h1>&nbsp;</h1>
        {/* <h1> Drop off Center and Recipients</h1> */}
        <iframe
          className={how.map}
          src="https://www.google.com/maps/d/embed?mid=1cVP_jnPGCTeuH24QsYhMGzRuOvH3gdnB"
        ></iframe>
      </section>

      <div className={how.spacer}>
        <h1>How Everything Works</h1>
      </div>

      <section className={how.list}>
        <span className={how.numbers}>1.</span> Decide which books you wish to
        donate. If the number exceeds 30, please fill out the following form so
        that we can properly monitor and prepare for large donations.
        <iframe
          className={how.form}
          src="https://docs.google.com/forms/d/e/1FAIpQLSe2sCiGBl5SFWAYyV6pMcFs3g5CAYTuBYCPQfGsXs9ZA3Ox3w/viewform?embedded=true"
        >
          Loading…
        </iframe>
      </section>
      <hr className={how.hr}></hr>
      <section className={how.list}>
        <span className={how.numbers}>2.</span> Deliver the books to our
        drop-off center at Sam Field Center (67-09 108th St, Forest Hills, NY
        11375). This location is managed by{" "}
        <a className={how.a} href="https://www.commonpointqueens.org/">
          Commonpoint Queens
        </a>
        , a community-based organization who are helping Second Hand’s
        operations.
        <br />
        <br />
        <iframe
          className={how.samfield}
          src="https://www.google.com/maps/embed?pb=!4v1635040493429!6m8!1m7!1scw8y_w6bb_K4qjV-cK5jEA!2m2!1d40.76106381049404!2d-73.72296560934936!3f238.5614!4f0!5f0.7820865974627469"
        ></iframe>
        <br />
        <br />
        If you live far away and can’t make it to Sam Field Center, please send
        us a quick email at secondhandliterature@gmail.com with the subject line
        “Alternate Donation Site” and we will gladly make accommodations based
        on your location and convenience. In the email, make sure to include a
        location and time that work best for you, as well as the number of books
        you are donating. Once we have received your email and scheduled a
        meeting, you will meet with our volunteers to transfer over the books.
      </section>
      <hr className={how.hr}></hr>
      <section className={how.list}>
        <span className={how.numbers}>3.</span> Our team of volunteers will pick
        up the books from Sam Field Center at a designated time during the week.
        They will bring them to one of our secure locations to clean and sort
        the books based on genre and condition.
      </section>
      <hr className={how.hr}></hr>
      <section className={how.list}>
        <span className={how.numbers}>4.</span> We will get in contact with our
        many recipient locations (which will be shown on the google maps at the top
        of this page) and pick out a select number of books for each location
        based on their desired number of books and preferred genres.
      </section>
      <hr className={how.hr}></hr>
      <section className={how.list}>
        <span className={how.numbers}>5.</span> After scheduling a certain time
        and date with these schools, homeless shelters, daycares, and other
        organizations, we will gather a team of volunteers, drive the donated
        books over to the location, and deliver them to the right hands.
      </section>
    </>
  );
}
