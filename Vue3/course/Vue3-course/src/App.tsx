
import { defineComponent } from "vue";

const A = (_, {slots}) => (<>
    <section>{slots.default ? slots.default() : '默认值'}</section>
</>)

export default defineComponent({
    setup() {
        const slot = {
            default: () => (<div>小满default slot</div>)
        }
        return () => (<>
            <A v-slots={slot}></A>
        </>)
    }
})