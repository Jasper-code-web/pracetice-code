import type { Plugin } from 'vite'
import * as babel from '@babel/core'; //@babel/core核心功能：将源代码转成目标代码。
import jsx from '@vue/babel-plugin-jsx'; //Vue给babel写的插件支持tsx v-model等

export default function (): Plugin {
    return {
        name: "vite-plugin-vue-tsx",
        transform(code, id) {

            if(/.tsx$/.test(id)) {
                console.log('code,id',code,id)
            }

            return code
        }
    }
}