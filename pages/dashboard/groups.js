import MemberInfo from '../../components/groups/MemberInfo';
import MemberList from '../../components/groups/MemberList';
import styles from '../../styles/groups/Groups.module.css'


const Groups = () => {
    return ( 
        <main className={styles.main}>
        <div className={styles.content}>
            <MemberList />
            <div className={styles.divider}></div>
            <MemberInfo />
        </div>
    </main>
        );
}
 
export default Groups;