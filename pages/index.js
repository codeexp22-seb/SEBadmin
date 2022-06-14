import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  async function attemptLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    const res = await fetch("/api/login/", {
      method: "POST",
      headers: new Headers({'Content-Type': 'application/json'}),
      body: json
    })
    if (res.status === 200) {
      // Logged in 
      // Do something? idk
      console.log("logged in successfully!")
    } else {
      console.log("Login failed.")
    }
  }

  return (
    <div className={styles.container}>
       
      <Head>
        <title>SEB Login</title>
        <meta name="description" content="Generated by create next app" />
       


      </Head>

      <main className={styles.main}>
        <div className={styles.loginBox}>
          <h1>SEB ADMIN PANEL</h1>
          <form onSubmit={ (e) => attemptLogin(e) }>
            <div className={styles.inputContainer}>
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="text" name="email" placeholder="Enter Your Email" required/>
            </div>
            <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faKey} />
              <input type="password" name="password" placeholder="Password" required/>
            </div>
            <button>Login</button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )

  
}
