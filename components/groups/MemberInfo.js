import styles from '../../styles/groups/MemberInfo.module.css'


const MemberInfo = () => {
    return (
        <div className={styles.container}>
            <h1>Information</h1>
            <div className={styles.personalInfo}>
                <div className={styles.profilePic}></div>
                <div>
                    <h2>PFC YEE JOHNSON</h2>
                    <p>#12345</p>
                </div>
            </div>
            <div className={styles.statsList}>
                <div className={styles.statsItem}>
                    <h3>Credits</h3>
                    <p>200</p>
                </div>
                <div className={styles.statsItem}>
                    <h3>Courses</h3>
                    <p>2</p>
                </div>
                <div className={styles.statsItem}>
                    <h3>Reedemed</h3>
                    <p>0</p>
                </div>
            </div>

            <form className={styles.courseTypeSelector}>
                <select>
                    <option value="Current Courses">Current Courses</option>
                    <option value="Completed Courses">Completed Courses</option>
                </select>
            </form>

            <table className={styles.table}>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Intro to Swift</td>
                        <td>80%</td>
                    </tr>
                    <tr>
                        <td>Bunk Layout</td>
                        <td>25%</td>
                    </tr>

                </tbody>



            </table>
        </div>
    );
}

export default MemberInfo;