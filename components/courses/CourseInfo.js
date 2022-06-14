import styles from '../../styles/courses/CourseInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const CourseInfo = () => {
    return (
        <div className={styles.container}>
            <h1>Information</h1>
            <div className={styles.courseMainInfo}>
                <div className={styles.coursePic}></div>
                <div>
                    <h2>Intro to Swift</h2>
                    <p>Learn the basics of Swift!</p>
                </div>
            </div>
            <div className={styles.statsList}>
                <div className={styles.statsItem}>
                    <h3>Credits</h3>
                    <p>200</p>
                </div>
                <div className={styles.statsItem}>
                    <h3>Modules</h3>
                    <p>30</p>
                </div>
                <div className={styles.statsItem}>
                    <h3>Enrolled</h3>
                    <p>20</p>
                </div>
            </div>

            <div className={styles.modulesHeader}>
                <h3>Modules</h3>
                <div className={styles.modulesPageIndicator}>
                    <p>1-5 of 30</p>
                    <button>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>

            <table className={styles.table}>

                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Build a Name Card</td>
                    </tr>
                    <tr>
                        <td>Swift Language 1</td>
                    </tr>
                    <tr>
                        <td>Clicker!</td>
                    </tr>
                    <tr>
                        <td>Swift Language 2</td>
                    </tr>
                    <tr>
                        <td>Quiz</td>
                    </tr>

                </tbody>



            </table>
        </div>
    );
}

export default CourseInfo;