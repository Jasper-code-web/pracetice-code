
import { defineComponent } from "vue";

const A = (_, {slots}) => (<>
    <section>{slots.default ? slots.default() : '默认值'}</section>
</>)

export default defineComponent({
    setup() {
        const slots = {
            default: () => (<>
                <section>My name is Jasper</section>
            </>)
        }
        return () => (<>
            <A v-slots={slots}></A>
        </>)
    }
})