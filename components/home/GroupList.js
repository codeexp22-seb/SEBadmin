import styles from '../../styles/home/GroupList.module.css'

const GroupList = () => {

    return ( 
        <div className={styles.container}>
            <h1>Groups</h1>
            <div className={styles.groupList}>
                <div className={styles.groupItem}>
                    <h1>Platoon 1</h1>
                    <p> 10 Credits </p>
                </div>
            </div>
        </div>
       
     );
}
 
export default GroupList;