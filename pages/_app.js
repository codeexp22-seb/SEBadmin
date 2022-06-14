import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "../firebase_config"
config.autoAddCss = false
initializeApp(firebaseConfig);
function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps} />
}

export default MyApp
