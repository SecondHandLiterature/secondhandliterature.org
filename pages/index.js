/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import home from '../styles/Home.module.scss'
import getImg from '../lib/prefix'

export default function Home() {
  return (
    <>
    <Head>
      <title>Secondhand Literature</title>
    </Head>

    <section className={home.titlecontainer}>
      <div className={home.verticalcenter}>
        <img className={home.logo} src={getImg("/secondhandLogo.png")} />
        <div className={home.descriptioncontainer}>
          <p className={home.description}>We are a student-led nonprofit organization aiming to address the lack of books in underprivileged communities by hosting book donations and drives.</p>
          <Link href="/howitworks"><button className={home.button}>Donate</button></Link>
        </div>
        {/* <hr /> */}
      </div>
      <hr />
    </section>

    <div className={home.missionbgimg}></div>
    <section className={home.missioncontainer}>
      <div className={home.mission}>
        {/* <div className={home.missionimage}><img src={getImg("/secondhandLogo.png")} /></div> */}
        <div className={home.missioncontent}>
          <h1>~ Mission Statement ~</h1>
          <p>We believe in a world where every child can read. Our mission is to invest in early childhood education in order to empower the next generation. Second Hand accomplishes this by accepting unused books from donors and redistributing them to those in underprivileged areas. By bringing old books to a new pair of hands, we hope to cultivate a strong culture of reading among the youth in our community</p>
        </div>
      </div>
    </section>

    <section className={home.statscontainer}>
      <div className={home.stats}>
        <div className={home.books}>
          <h1>Books Donated</h1>
          <p>0</p>
        </div>
        <div className={home.smstatcontainer}>
          <div className={home.volunteers}>
            <h1>Number of Volunteers</h1>
            <p>0</p>
          </div>
          <div className={home.impact}>
            <h1>Areas Impacted</h1>
            <p>Aiming to Impact:<br /><br /> Jamaica, Corona, Elmhurst, Jackson Heights, Rego Park, Flushing, Woodside</p>
          </div>
        </div>
      </div>
    </section>

    <div className={home.split}>
      <section className={home.becomevolunteercontainer}>
        <div className={home.becomevolunteer}>
          <h1>Become a Volunteer</h1>
          <p>You can get involved today by becoming a volunteer. Sign up and you will be joining a group of young change-makers looking to create a positive impact in their communities. Volunteer hours are also available to those who join our team.</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5puSL7NNypkivN0DuqSJ0SmSgD7iKglokX4pTsvKsCBlE_A/viewform?usp=sf_link"><button className={home.button}>Volunteer</button></a>
        </div>
      </section>

      <section className={home.spreadwordcontainer}>
        <div className={home.spreadword}>
          <h1>Spread the Word</h1>
          <p>As a young and still developing organization, we are always grateful to those who spread the word about us. Help us broaden our reach and raise awareness of the absence of reading materials in households across the city.</p>
          <p className={home.icons}><a href="https://www.instagram.com/secondhandliterature/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a><i className="fa fa-facebook" aria-hidden="true"></i></p>
        </div>
      </section>
    </div>

    <section className={home.donatecontainer}>
      <div className={home.donate}>
        <h1>~ Donate Old Books ~</h1>
        <p>Book donations are the backbone of our organization. If you choose to give your old and unused books to us, we guarantee that they will be used to improve educational access of young learners in your area.</p>
      </div>
    </section>
    </>
  )
}
