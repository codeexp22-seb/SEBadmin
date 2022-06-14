import { getAuth } from "firebase/auth";

export default async function (req, res) {
    if (req.method !== 'GET') {
        res.status(405).send({ message: 'Only GET requests allowed' })
        return
      }


    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        res.status(200).send({ email: user.email, uid: user.uid });
    } else {
        res.status(403).send({ message: "You're not logged in!"})
    }
    
}
