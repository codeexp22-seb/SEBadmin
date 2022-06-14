import CourseList from "../../components/home/CourseList"
import GroupList from "../../components/home/GroupList"
import QuickInsights from "../../components/home/QuickInsights"
import styles from '../../styles/home/Home.module.css'


const Home = () => {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <GroupList />
                <div className={styles.secondRow}>
                    <CourseList />
                    <QuickInsights />
                </div>
            </div>
        </main>
    )
}


export default Home
