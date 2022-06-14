import styles from '../../styles/courses/CourseInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { collection, query, getFirestore, where, getDocs } from 'firebase/firestore';
import { getApp } from 'firebase/app';
const app = getApp();
const db = getFirestore(app);
const CourseInfo = () => {
    const [course, setCourse] = useState({});

    useEffect(() => {
        async function getData() {
            const courseHandle = collection(db, "courses")
            const q = query(courseHandle, where("name", '==', "Intro to Swift"));
            const courseSnap = await getDocs(q);
            let foundCourse = courseSnap;
            courseSnap.forEach((course) => {
                foundCourse = course.data()
            })
            console.log(Object.keys(foundCourse).length)
            setCourse(foundCourse);
        }
        getData()
    }, [])
    return (
        <div className={styles.container}>
            <h1>Information</h1>
            <div className={styles.courseMainInfo}>
                <div className={styles.coursePic}></div>
                <div>
                    <h2>{course.name}</h2>
                    <p>Learn the basics of Swift!</p>
                </div>
            </div>
            <div className={styles.statsList}>
                <div className={styles.statsItem}>
                    <h3>Credits</h3>
                    <p>{course.credits}</p>
                </div>
                <div className={styles.statsItem}>
                    <h3>Modules</h3>
                    <p>{course.modules}</p>
                </div>
                <div className={styles.statsItem}>
                    <h3>Enrolled</h3>
                    <p>3</p>
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