import CourseList from "../../components/home/CourseList"
import GroupList from "../../components/home/GroupList"
import styles from '../../styles/home/Home.module.css'


const Home = () => {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <GroupList />
                <div>
                    <CourseList />
                </div>
            </div>
        </main>
    )
}


export default Home
