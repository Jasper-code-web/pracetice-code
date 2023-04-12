# 基本介绍

* pubic下的静态资源不会被vite编译

* assets目录下的图片如果比较小可以通过配置打包成base64,这样就可以不占用资源

* vite将index.html作为入口文件，webpack把js作为入口文件。script采用esm方式引入

  ```html
  <script type="module" src="/src/main.ts"></script>
  ```

* vite采用esbuild编译，rollup打包

* <template></template>在顶层只能有一个，<style>可以有多个，<script setup>只能有一个，非setup的<script>可以有多个

# npm run dev查找规则

1. 系统会先查找本地的`` node_modules``中有没有vite可执行
2. 如果没有，就去``  全局包（npm install -g）``查找 ，有就执行
3. 以上都没有就去``  环境变量``中查找，如果再找不到就会报错



























