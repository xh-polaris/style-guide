---
sidebarDepth: 2
---

# Vue 代码风格指南

## 命名规范

统一使用短横线分隔的小写字母(kebab-case)命名规范

属于组件或类的,统一使用大驼峰(UpperCamelCase)命名规范

其他非组件或类的,统一使用小写字母开头的(kebab-case)命名规范

展开node_modules中的项目依赖,会发现几乎所有的项目文件夹命名都是 kebab-case命名的,使用kebab-case命名的文件

> 例：my-component.vue

## [vue/attributes-order](https://eslint.vuejs.org/rules/attributes-order)

标签属性必须按规则排序

```vue
// bad
```

```vue
// good
```

## [vue/comment-directive](https://eslint.vuejs.org/rules/comment-directive)

支持在模版中使用 eslint-disable-next-line 等注释

```vue
// bad
```

```vue
// good
```

## [vue/eqeqeq](https://eslint.vuejs.org/rules/eqeqeq)

必须使用 === 或 !==，禁止使用 == 或 !=

```vue
// bad
<template>
  <div :attr="foo == 1"/>
</template>
```

```vue
// good
<template>
  <div :attr="foo === 1"/>
</template>
```

## [vue/jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars)

已定义的 jsx element 必须使用

```vue
// bad
```

```vue
// good
```

## [vue/no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties)

计算属性禁止包含异步方法

```vue
// bad
```

```vue
// good
```

## [vue/no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes)

禁止出现重复的属性

```vue
// bad
```

```vue
// good
```

## [vue/no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error)

禁止出现语法错误

```vue
// bad
<template>
  <div>{{ message. }}</div>
</template>
```

```vue
// good
<template>
  <div>{{ message }}</div>
</template>
```

## [vue/no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys)

禁止覆盖保留字

```vue
// bad
```

```vue
// good
```

## [vue/no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache)

禁止在 &lt;textarea> 中出现 Mustache 语法

```vue
// bad
```

```vue
// good
```

## [vue/no-unused-components](https://eslint.vuejs.org/rules/no-unused-components)

禁止定义在 components 中的组件未使用

```vue
// bad
```

```vue
// good
```

## [vue/no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars)

模版中已定义的变量必须使用

```vue
// bad
```

```vue
// good
```

## [vue/no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for)

禁止在同一个元素上使用 v-if 和 v-for 指令

```vue
// bad
```

```vue
// good
```

## [vue/order-in-components](https://eslint.vuejs.org/rules/order-in-components)

组件的属性必须为一定的顺序

```vue
// bad
```

```vue
// good
```

## [vue/require-component-is](https://eslint.vuejs.org/rules/require-component-is)

&lt;component> 必须有 v-bind:is

```vue
// bad
```

```vue
// good
```

## [vue/require-default-prop](https://eslint.vuejs.org/rules/require-default-prop)

props 如果不是 required 的字段，必须有默认值

```vue
// bad
```

```vue
// good
```

## [vue/require-direct-export](https://eslint.vuejs.org/rules/require-direct-export)

禁止手动 export default

```vue
// bad
```

```vue
// good
```

## [vue/require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor)

props 的取值必须是构造函数

```vue
// bad
```

```vue
// good
```

## [vue/require-render-return](https://eslint.vuejs.org/rules/require-render-return)

render 函数必须有返回值

```vue
// bad
```

```vue
// good
```

## [vue/require-v-for-key](https://eslint.vuejs.org/rules/require-v-for-key)

v-for 指令的元素必须有 v-bind:key

```vue
// bad
```

```vue
// good
```

## [vue/return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property)

计算属性必须有返回值

```vue
// bad
```

```vue
// good
```

## [vue/this-in-template](https://eslint.vuejs.org/rules/this-in-template)

禁止在模版中用 this

```vue
// bad
```

```vue
// good
```

## [vue/use-v-on-exact](https://eslint.vuejs.org/rules/use-v-on-exact)

当一个节点上出现两个 v-on:click 时，其中一个必须为 exact

```vue
// bad
```

```vue
// good
```

## [vue/v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call)

禁止在 v-on 的值中调用函数

```vue
// bad
```

```vue
// good
```

## [vue/valid-template-root](https://eslint.vuejs.org/rules/valid-template-root)

template 的根节点必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind)

v-bind 指令必须合法

```vue
// bad
<template>
  <div>
    <div v-bind></div>
    <div :aaa></div>
    <div v-bind:aaa.bbb="foo"></div>
  </div>
</template>
```

```vue
// good
<template>
  <div>
    <div v-bind="foo"></div>
    <div v-bind:aaa="foo"></div>
    <div :aaa="foo"></div>
    <div :aaa.prop="foo"></div>
  </div>
</template>
```

## [vue/valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak)

v-cloak 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-else](https://eslint.vuejs.org/rules/valid-v-else)

v-else 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if)

v-else-if 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-for](https://eslint.vuejs.org/rules/valid-v-for)

v-for 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-html](https://eslint.vuejs.org/rules/valid-v-html)

v-html 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-if](https://eslint.vuejs.org/rules/valid-v-if)

v-if 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-model](https://eslint.vuejs.org/rules/valid-v-model)

v-model 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-on](https://eslint.vuejs.org/rules/valid-v-on)

v-on 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-once](https://eslint.vuejs.org/rules/valid-v-once)

v-once 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre)

v-pre 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-show](https://eslint.vuejs.org/rules/valid-v-show)

v-show 指令必须合法

```vue
// bad
```

```vue
// good
```

## [vue/valid-v-text](https://eslint.vuejs.org/rules/valid-v-text)

v-text 指令必须合法

```vue
// bad
```

```vue
// good
```
