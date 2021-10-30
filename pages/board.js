/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Image from "next/image";
import board from "../styles/Board.module.scss";
import getImg from "../lib/prefix";

export default function Board() {
  return (
    <>
      <Head>
        <title>Meet the Board | Secondhand Literature</title>
      </Head>

      <header className={board.header}>
        <h1>Our Founders</h1>
      </header>

      <section className={board.founders}>
        <div>
          <h2>Taee Chi</h2>
          <img src={getImg("/taeeGOOD.jpg")} />
          <p>
            Hey everyone! My name is Taee, and I&apos;m a junior currently attending
            Stuyvesant High School. I&apos;m from Flushing, Queens, and I co-founded
            Second Hand as a way of sharing my love for reading with others in
            my community. I am so excited to work with my talented board members
            to achieve this goal, and I hope you can help us too by donating a
            book! If you couldn&apos;t tell already, I like to read in my free time,
            but I also enjoy playing handball (American, not European) and
            watching movies. The most recent book I&apos;ve read is Patron Saints of
            Nothing, which is about a Filipino-American teenager uncovering the
            truth about his cousin&apos;s death (9/10, would recommend!){" "}
          </p>
        </div>
        <div className={board.special}>
          <h2>Joshua Lau</h2>
          <img src={getImg("/josh.png")} />
          <p>
            Hello everyone, my name is Joshua and I&apos;m a junior at Townsend
            Harris High School. When I&apos;m not in school, I spend most of my time
            listening to music, and well, reading. I feel that co-founding
            Second Hand has allowed me to take my passion for books and elevate
            it to something of greater importance. A book that reminds me of my
            childhood is The Giving Tree, as I vividly remember my parents
            reading it to me. Books create memories, and Second Hand will create
            opportunities for kids to form connections with books like I did
            when I was younger.
          </p>
        </div>
      </section>

      <header className={board.header}>
        <h1>Our Board Members</h1>
      </header>

      <section className={board.members}>
        <div>
          <div className={board.member}>
            <h2>Christina Shen</h2>
            <img src={getImg("/christina.jpg")} />
            <p>Social Media Director</p>
          </div>
          <p>
            Hey everyone! I&apos;m Christina, currently a junior at Stuyvesant High
            School. I am so excited to be part of Second Hand as a social media
            director. I believe that this organization has great potential, and
            I am looking forward to working with everyone! I recently finished
            reading Interior Chinatown, a teleplay that points out the
            stereotypes in our society as well as what defines one&apos;s identity.
            In my free time, I love to dance, binge watch Cdramas, hang out with
            friends, and try out new things.
          </p>
        </div>
        <div>
          <p>
            Hey guys! I&apos;m Rishima, and I&apos;m a junior at Townsend Harris High
            School. I&apos;m super excited to be a Social Media Director for Second
            Hand, and I am so honored to have been given this opportunity to
            help others strengthen their connection to reading and find not just
            a home but a community in literature. In my down time, I like to
            read (obviously!), go out with my friends, and cook new things. I
            recently read Lord of the Flies and would definitely recommend it if
            you are looking for a thought-provoking classic.
          </p>
          <div className={board.member}>
            <h2>Rishima Pokharel</h2>
            <img src={getImg("/rishima.jpg")} />
            <p>Social Media Director</p>
          </div>
        </div>
        <div>
          <div className={board.member}>
            <h2>Shafiul Haque</h2>
            <img src={getImg("/shafiul.jpg")} />
            <p>Outreach Director</p>
          </div>
          <p>
            Hello everyone! My name is Shafiul Haque and I&apos;m a junior at
            Stuyvesant High School. Some of my hobbies include reading, playing
            sports, and biking. As the outreach director of Second Hand, I&apos;ll be
            responsible for keeping in touch with our recipient locations and
            partner organizations. I am very excited to be a part of Second Hand
            because I believe that our community will benefit tremendously from
            the outpour of books. Personally, I love reading fantasy and
            adventure books, and I&apos;m currently reading the City of Fallen
            Angels, the fourth book in the Mortal Instrument series. The book is
            about a girl who discovers her own heritage and her family history
            in the world of magic.{" "}
          </p>
        </div>
        <div>
          <p>
            Hey everyone! My name&apos;s Darian and I&apos;m a junior at Townsend Harris
            High School. As Second Hand&apos;s volunteer coordinator, I am excited to
            work with all of you and use my passion for volunteering to bring
            books to those who need them. In my free time I enjoy playing music
            and cubing. My favorite book of all time would have to be Prisoner
            B-3087. It was one of the first books I read from cover to cover in
            one weekend, and it provided a basis for my love of history.
          </p>
          <div className={board.member}>
            <h2>Darian Jimenez</h2>
            <img src={getImg("/darian.jpg")} />
            <p>Volunteer Coordinator</p>
          </div>
        </div>
        <div>
          <div className={board.member}>
            <h2>Claire Grumbacher</h2>
            <img src={getImg("/claire.jpg")} />
            <p>Secretary</p>
          </div>
          <p>
            Hello! My name is Claire Grumbacher. I am a sophomore at Francis
            Lewis High School in Queens, New York. To me, the idea of learning
            something on your own is absolutely incredible and books are the
            perfect tool to access that very skill. In my free time, I (of
            course) enjoy reading, but I also love playing the guitar,
            crocheting, and connecting with others. Currently, I am reading a
            book that quenches my thirst for a political and science fiction
            dystopian called 1984, which recounts the captivating story of
            George Orwell.
          </p>
        </div>
        <div>
          <p>
            Hello everyone! My name is Shafiul Haque and I&apos;m a junior at
            Stuyvesant High School. Some of my hobbies include reading, playing
            sports, and biking. As the outreach director of Second Hand, I&apos;ll be
            responsible for keeping in touch with our recipient locations and
            partner organizations. I am very excited to be a part of Second Hand
            because I believe that our community will benefit tremendously from
            the outpour of books. Personally, I love reading fantasy and
            adventure books, and I&apos;m currently reading the City of Fallen
            Angels, the fourth book in the Mortal Instrument series. The book is
            about a girl who discovers her own heritage and her family history
            in the world of magic.{" "}
          </p>
          <div className={board.member}>
            <h2>Paul Serbanescu</h2>
            <img src={getImg("/paul.jpg")} />
            <p>Webmaster</p>
          </div>
        </div>
      </section>
    </>
  );
}
