import type {App} from 'vue'

function useResize(el: HTMLElement, callback: Function) {
    const observer = new ResizeObserver((entries) => {
        callback(entries[0].contentRect)
    })
    observer.observe(el)
}

const install = (app: App) => {
    app.directive('resize', {
        mounted(el, binding) {
            useResize(el, binding.value)
        }
    })
}
useResize.install = install

export default useResize