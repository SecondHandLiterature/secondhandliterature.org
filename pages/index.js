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
          <p className={home.description}>loremloremloremloremloremloremloremloremloremloremloremlorem</p>
          <button className={home.button}>Donate</button>
        </div>
      </div>
    </section>

    <section className={home.missioncontainer}>
      <div className={home.mission}>
        <div className={home.missionimage}><img src={getImg("/secondhandLogo.png")} /></div>
        <div className={home.missioncontent}>
          <h1>Mission Statement</h1>
          <p>loremloremloremloremloremloremloremloremloremloremloremlorem</p>
        </div>
      </div>
    </section>
    </>
  )
}
