import Head from 'next/head'
import Image from 'next/image'
import contact from '../styles/Contact.module.scss'
import getImg from '../lib/prefix'

export default function Contact() {
    return (
        <>
        <Head>
            <title>Contact | Secondhand Literature</title>
        </Head>
        <section className={contact.formcontainer}>
        <iframe className={contact.form} src="https://docs.google.com/forms/d/e/1FAIpQLSc5puSL7NNypkivN0DuqSJ0SmSgD7iKglokX4pTsvKsCBlE_A/viewform?embedded=true">Loading…</iframe>
        </section>

        </>
    )
}