import Enrollments from '../../components/courses/Enrollments';
import styles from '../../styles/courses/Courses.module.css'

const Courses = () => {
    return ( 
        <main className={styles.main}>
        <div className={styles.content}>
            <Enrollments />
            <div className={styles.divider}></div>

        </div>
    </main>
    );
}
 
export default Courses;