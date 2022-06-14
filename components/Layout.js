import Navbar from "./Navbar";
import { useRouter } from 'next/router'


const Layout = ({ children }) => {
    const router = useRouter()

    return (
        <div>
            <Navbar />
            {children}
        </div>);
}

export default Layout;