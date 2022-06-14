import CourseInfo from '../../components/courses/CourseInfo';
import Enrollments from '../../components/courses/Enrollments';
import styles from '../../styles/courses/Courses.module.css'

const Courses = () => {
    return ( 
        <main className={styles.main}>
        <div className={styles.content}>
            <Enrollments />
            <div className={styles.divider}></div>
            <CourseInfo />
        </div>
    </main>
    );
}
 
export default Courses;