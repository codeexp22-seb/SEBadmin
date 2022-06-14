import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'



const Navbar = () => {
    const router = useRouter()

    return ( 
        <nav className={styles.nav} style={(router.pathname === "/") ? {display:'none'} : {}}>
            <div>
                <div className={styles.placeholderImage}></div>
                <h1>SGT YEE JIA CHEN</h1>
                <div className={styles.menuContainer}>
                    <Link href="/dashboard/home">
                        <div className={styles.menuItem} style={(router.pathname === "/dashboard/home") ? {opacity:'100%'} : {opacity:'30%'}}>
                            <a>Home</a>
                        </div>
                    </Link>
                    <Link href="/dashboard/groups">
                    <div className={styles.menuItem} style={(router.pathname === "/dashboard/groups") ? {opacity:'100%'} : {opacity:'30%'}}>
                            <a>Groups</a>
                        </div>
                    </Link>
                    <Link href="/dashboard/courses">
                    <div className={styles.menuItem} style={(router.pathname === "/dashboard/courses") ? {opacity:'100%'} : {opacity:'30%'}}>
                            <a>Courses</a>
                        </div>
                    </Link>
                </div>
            </div>
            <button className={styles.logoutButton}>Log out</button>

        </nav>
     );
}
 
export default Navbar;