import styles from '../../styles/home/CourseList.module.css'

const CourseList = () => {

    return (
        <div className={styles.container}>
            <h1>Courses</h1>
            <table className={styles.table}>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Completion Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Building a Culture of Respect and Consent</td>
                        <td>45%</td>
                    </tr>
                    <tr>
                        <td>Intro to Swift</td>
                        <td>45%</td>
                    </tr>
                </tbody>



            </table>
        </div>

    );
}

export default CourseList;