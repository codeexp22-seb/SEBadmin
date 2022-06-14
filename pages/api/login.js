import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { resolveHref } from "next/dist/shared/lib/router/router";

export default async function (req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
      }
    
    const details = req.body;

    const auth = getAuth();
    const email = details.email;
    const password = details.password;
   
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        res.status(200).send({ loggedIn: "Logged in successfully!" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return res.status(500).send({ errorCode: errorCode, error: errorMessage });
      });
    
}
