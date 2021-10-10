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
          <p className={home.description}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          <button className={home.button}>Donate</button>
        </div>
      </div>
    </section>

    <section className={home.missioncontainer}>
      <div className={home.mission}>
        <div className={home.missionimage}><img src={getImg("/secondhandLogo.png")} /></div>
        <div className={home.missioncontent}>
          <h1>Mission Statement</h1>
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
        </div>
      </div>
    </section>

    <section className={home.statscontainer}>
      <div className={home.stats}>
        <div className={home.books}>
          <h1>Books Donated</h1>
          <p>150</p>
        </div>
        <div className={home.smstatcontainer}>
          <div className={home.volunteers}>
            <h2>Number of Volunteers</h2>
            <p>lorem ipsum dolor set lorem ipsum dolor</p>
          </div>
          <div className={home.impact}>
            <h2>Areas Impacted</h2>
            <p>lorem ipsum dolor set lorem ipsum dolor</p>
          </div>
        </div>
      </div>
    </section>

    <div className={home.split}>
      <section className={home.becomevolunteercontainer}>
        <div className={home.becomevolunteer}>
          <h1>Become a Volunteer</h1>
          <p>lorem ipsum dolor set lorem ipsum dolorlorem ipsum dolor set lorem ipsum dolorlorem ipsum dolor set lorem ipsum dolorlorem ipsum dolor set lorem ipsum dolor</p>
          <button>Volunteer</button>
        </div>
      </section>

      <section className={home.spreadwordcontainer}>
        <div className={home.spreadword}>
          <h1>Spread the Word</h1>
          <p>lorem ipsum dolor set lorem ipsum dolorlorem ipsum dolor set lorem ipsum dolorlorem ipsum dolor set lorem ipsum dolorlorem ipsum dolor set lorem ipsum dolor</p>
          <p><i className="fa fa-instagram" aria-hidden="true"></i><i className="fa fa-facebook" aria-hidden="true"></i></p>
        </div>
      </section>
    </div>

    <section className={home.donatecontainer}>
      <div className={home.donate}>
        <h1>Donate Old Books</h1>
        <p>lorem ipsum dolor set lorem ipsum dolorlorem ipsum dolor set lorem ipsum dolorlorem ipsum dolor set lorem ipsum dolorlorem ipsum dolor set lorem ipsum dolor</p>
      </div>
    </section>
    </>
  )
}
