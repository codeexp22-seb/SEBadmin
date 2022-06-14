import styles from '../../styles/home/QuickInsights.module.css'
import Image from 'next/image';
import QuickInsightsGraph from '../../public/quickInsightsGraph.png'

const QuickInsights = () => {

    return ( 
        <div className={styles.container}>
            <h1>Quick Insights</h1>
            <Image 
                src={QuickInsightsGraph}
                width={460}
                height={360}
                />
         
        </div>
       
     );
}
 
export default QuickInsights;