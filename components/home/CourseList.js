import styles from '../../styles/home/CourseList.module.css'
import { getFirestore, collection, getCollection, query, getDocs } from 'firebase/firestore';
import { getApp } from 'firebase/app';
import { useEffect, useState } from 'react';

const app = getApp();
const db = getFirestore(app);

const CourseList = (props) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function getData() {
            const courseHandle = collection(db, "courses")
            const q = query(courseHandle);
            const courseSnap = await getDocs(q);
            let coursesArr = [];
            courseSnap.forEach((course) => {
                coursesArr.push(course.data());
            })
            courses = coursesArr;
            setCourses(coursesArr);
        }
        getData()
    }, [])
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
                    {
                        courses.map((course, index) => {
                            
                            let completions = 0;
                            let keys = Object.keys(course.enrollments);
                            keys.forEach((key) => {
                                if (course.enrollments[key] === course.modules) {
                                    completions += 1;
                                }
                            })
                            return <tr key = {index}>
                                <td>{course.name}</td>
                                <td>{`${(completions / keys.length) * 100}%`}</td>
                            </tr>
                        })


                    }
                    
                </tbody>



            </table>
        </div>

    );
}

export default CourseList;