# 开始

声明式渲染：Vue基于HTML拓展了一套模板语法。可以声明式地描述最终输出的HTML和JavaScript之间的关系

### 可以使用vue的不同场景:

* 无需构建步骤，渐进式增强静态的HTML
* 在任何页面中作为Web Componpents 嵌入
* 单页面应用（SPA）
* 全栈/服务端渲染（SSR)
* Jamstack/静态站点生成（SSG）
* 开发桌面端、移动端、WebGL，甚至是命令行终端的界面

### 挂载应用

1. 应用实例必须在调用了.mount()方法后才会渲染出来。该方法接收一个容器参数，可以是一个实际的DOM元素或是一个CSS选择器字符串。

``` html
<div id="#app"></div>
```

```javascript
app.mount('#app')
```

2. 应用根组件的内容将会被渲染到容器元素中。容器元素将不会被作为应用的一部分。
3. .mount()应该始终在整个应用配置和资源注册完成之后被调用。不同于其它资源注册方法，它的返回值是根组件实例而非应用实例

### 应用配置

1. 应用实例会暴露一个.config对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器。

``` javascript
app.config.errorHandler = (err) => {}
```

2. 应用实例还提供了一些方法来注册应用范围内可用的资源，比如注册一个组件

```java
app.component('Component', Component)
```

### 多个应用实例

```java
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```

# 模板语法

1. Vue使用一种基于HTML的模板语法，能够声明式地将组件实例的数据绑定到呈现的DOM上。
2. 在底层机制中，Vue会将模板编译成高度优化的JavaScript代码。结合响应式系统，当应用状态变更时，Vue能够智能地推导出需要从新渲染的组件的最少数量，并应用最少的DOM操作。
3. 也可以结合JSX支持直接手写渲染函数而不采用模板。但是，这将不会享受到和模板同级别的编译时优化。

### 模板语法Mustache

```html
<span>{{ data }}</span>
```

### 指令Directives

使用v-作为前缀，它们是由Vue提供的特殊attribute。它们将为渲染的DOM应用特殊的响应式行为。

* v-html

``` html
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

span的内容将被替换为rawHtml的值

* v-bind

  v-bind和模板语法都支持完整JavaScript表达式。仅支持单一表达式，判断标准是否可以合法的写在return后面

  ```html
  {{ number + 1 }}
  
  {{ ok ? 'YES' : 'NO' }}
  
  {{ message.split('').reverse().join('') }}
  
  <div :id="`list-${id}`"></div>
  ```

* v-if

* v-for

* v-on

* v-slot

#### 动态参数

动态参数的值类型必须是string、null（显示移除绑定）， 其它类型会发出警告。限制：1.在动态参数中引号‘’和空格<space/>都是不合法的 2.应该尽量避免使用大写字母，浏览器会强制转换为小写字母

```html
<!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```

#### 修饰符Modifiers

修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式绑定。例如`.prevent`修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()`：

```html
<form @submit.prevent="onSubmit">...</form>
```

























