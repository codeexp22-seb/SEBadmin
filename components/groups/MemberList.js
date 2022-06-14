import styles from '../../styles/groups/MemberList.module.css'


const MemberList = () => {

    return (
        <div className={styles.container}>
            <div className={styles.groupHeader}>
                <h1>Groups</h1>
                <form>
                    <select>
                        <option value="0">Platoon 1</option>
                        <option value="1">Platoon 2</option>
                        <option value="2">Platoon 3</option>
                    </select>
                </form>
            </div>

            <div className={styles.memberHeader}>
                <h2>Members</h2>
                <button>Add Member</button>
            </div>

            <table className={styles.table}>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TAN RUI YANG</td>
                        <td>350</td>
                    </tr>
                    <tr>
                        <td>SEAN WONG</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>XENOS ANONG</td>
                        <td>250</td>
                    </tr>
                    <tr style = {{backgroundColor: '#eeeeee'}}>
                        <td>YEE JOHNSON</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>RACHEL LIM</td>
                        <td>150</td>
                    </tr>
                </tbody>



            </table>
        </div>
    );
}

export default MemberList;