import styles from '../../styles/courses/Enrollments.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


const Enrollments = () => {

    return (
        <div className={styles.container}>
            <div className={styles.groupHeader}>
                <h1>Courses</h1>
                <form>
                    <select>
                        <option value="0">Intro To Swift</option>
                        <option value="1">Intro To Rifles</option>
                        <option value="2">Bunk Layout</option>
                    </select>
                </form>
            </div>

            <div className={styles.memberHeader}>
                <h2>Enrollments</h2>
                <div className={styles.filterIcon}>
                    <FontAwesomeIcon icon={faFilter} />
                </div>
                
            </div>

            <table className={styles.table}>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TAN RUI YANG</td>
                        <td>12/30</td>
                    </tr>
                    <tr>
                        <td>SEAN WONG</td>
                        <td>11/30</td>
                    </tr>
                    <tr>
                        <td>YEE JOHNSON</td>
                        <td>3/30</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default Enrollments;