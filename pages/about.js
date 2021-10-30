import Head from "next/head";
import Image from "next/image";
import about from "../styles/About.module.scss";
import getImg from "../lib/prefix";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Secondhand Literature</title>
      </Head>

      <section className={about.top}>
        <h1>Bringing Old Books to a New Pair of Hands</h1>
        <p>
          Our mission is to increase access to books in socioeconomically
          disadvantaged NYC neighborhoods where children are least likely to
          have an adequate supply of educational resources.
        </p>
        <p>
          We aim to collect old and unused books in households throughout
          various communities and redistribute them to schools and other
          organizations in need. This would serve a dual-purpose, as people can
          eliminate books that they have been wanting to get rid of for a long
          time while also contributing to their community.
        </p>
        <p>
          By redistributing books that might have otherwise been thrown out,
          Second Hand also offers an environmental benefit; our services ensure
          that fewer books go to waste and more are put to use.
        </p>
      </section>

      <section className={about.bottom}>
        <div className={about.content}>
          <h1>Our story</h1>
          <p>
            In the summer of 2021, two high school students from NYC participated
            in a civic engagement and leadership course. For their capstone
            project, they were challenged to come up with an initiative that would
            rectify the educational disparity existing between different
            neighborhoods in the city. They knew that they shared a common
            interest in reading, so they began to devise a solution that would
            connect their love for books with the greater good of the community.
            Noticing that they had many old books and unused textbooks lying
            around in their homes, most of which were in perfectly good condition,
            they sent out surveys to their friends and peers asking if they had
            the same problem. The results were clear: many books were in need of a
            new pair of hands. The two turned to local organizations, only to find
            that none of them clearly addressed this issue. So the two students
            took it upon themselves to create their own organization that
            establishes a redistribution channel transferring books from the
            households of previous owners to the hands of less fortunate
            communities. From this, Second Hand was born.
          </p>
          <p className={about.bullets}>
              <h1>Wish To Help Us Further Our Mission?</h1>
              <ul>
                  <li>Apply now to be a volunteer</li>
                  <li>Applications accepted year-round!</li>
                  <li>Calling all High School and College Students in Queens</li>
                  <li>As a volunteer, you will help us pick up, clean, and redistribute the donated books</li>
                  <li>You must be available at least once a month on the weekends</li>
                  <li>Service hours and letter provided</li>
              </ul>
          </p>
        </div>
      </section>
    </>
  );
}
