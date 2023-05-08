 
import { ref } from 'vue'
 
let flag = ref(false)
 
const renderDom = () => {
    return (
        <>
           <div v-show={flag.value}>景天</div>
           <div v-show={!flag.value}>雪见</div>
        </>
    )
}
 
export default renderDom