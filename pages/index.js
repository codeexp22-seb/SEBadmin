import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()

  //Login Button Function
  const loginUser = (e) => {
    e.preventDefault()
    router.push('/dashboard/home')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SEB Admin</title>
        <script src="https://kit.fontawesome.com/1b641f06db.js" crossorigin="anonymous"></script>


      </Head>

      <main className={styles.main}>
        <div className={styles.loginBox}>
          <h1>SEB ADMIN PANEL</h1>
          <form>
            <div className={styles.inputContainer}>
              <i class="fa-solid fa-envelope"></i>
              <input type="text" name="email" placeholder="Enter Your Email"/>
            </div>
            <div className={styles.inputContainer}>
              <i class="fa-solid fa-key"></i>
              <input type="password" name="password" placeholder="Password"/>
            </div>
            <button onClick={loginUser}>Login</button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
