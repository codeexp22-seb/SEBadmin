import styles from '../../styles/home/GroupList.module.css'

const GroupList = () => {

    return ( 
        <div className={styles.container}>
            <h1>Groups</h1>
            <div className={styles.groupList}>
                <div className={styles.groupItem}>
                    <div className={styles.groupIcon}></div>
                    <h1>Platoon 1</h1>
                    <p> 10 Credits </p>
                </div>
                <div className={styles.groupItem}>
                    <div className={styles.groupIcon}></div>
                    <h1>Platoon 2</h1>
                    <p> 37 Credits </p>
                </div>
                <div className={styles.groupItem}>
                    <div className={styles.groupIcon}></div>
                    <h1>Platoon 3</h1>
                    <p> 26 Credits </p>
                </div>
            </div>
            
        </div>
       
     );
}
 
export default GroupList;