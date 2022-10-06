---
sidebarDepth: 2
---

# TypeScript 代码风格指南

## [@typescript-eslint/adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)

重载的函数必须写在一起

```typescript
// bad
declare namespace NSFoo1 {
    export function foo(s: string): void;

    export function foo(n: number): void;

    export function bar(): void;

    export function foo(sn: string | number): void;
}

type TypeFoo1 = {
    foo(s: string): void;
    foo(n: number): void;
    bar(): void;
    foo(sn: string | number): void;
};

interface IFoo1 {
    foo(s: string): void;

    foo(n: number): void;

    bar(): void;

    foo(sn: string | number): void;
}
```

```typescript
// good
declare namespace NSFoo2 {
    export function foo(s: string): void;

    export function foo(n: number): void;

    export function foo(sn: string | number): void;

    export function bar(): void;
}

type TypeFoo2 = {
    foo(s: string): void;
    foo(n: number): void;
    foo(sn: string | number): void;
    bar(): void;
};

interface IFoo2 {
    foo(s: string): void;

    foo(n: number): void;

    foo(sn: string | number): void;

    bar(): void;
}
```

> 增加可读性

## [@typescript-eslint/naming-convention](https://typescript-eslint.io/rules/naming-convention)

类名与接口名必须为驼峰式

```typescript
// bad
class Invalid_Class_Name {
}

interface invalidInterface {
}
```

```typescript
// good
class ValidClassName {
}

interface ValidInterface {
}
```

## [@typescript-eslint/consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions)

类型断言必须使用 as Type，禁止使用 &lt;Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）

```typescript
// bad
let bar1: string | number;
const foo1 = <string>bar1;

const baz1 = {
    bar: 1
} as object;
```

```typescript
// good
let bar2: string | number;
const foo2 = bar2 as string;

const baz2 = {
    bar: 1
} as any;
```

> &lt;Type> 容易被理解为 jsx

## [@typescript-eslint/consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)

优先使用 interface 而不是 type

```typescript
// bad
type Foo1 = {
    foo: string;
};
```

```typescript
// good
interface Foo2 {
    foo: string;
}
```

> interface 可以 implement, extend 和 merge

## [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)

必须设置类的成员的可访问性

```typescript
// bad
class Foo2 {
    static foo = 'foo';

    static getFoo() {
        return Foo2.foo;
    }

    constructor() {
    }

    bar = 'bar';

    getBar() {
    }

    get baz() {
        return 'baz';
    }

    set baz(value) {
        console.log(value);
    }
}
```

```typescript
// good
class Foo2 {
    private static foo = 'foo';

    public static getFoo() {
        return Foo2.foo;
    }

    public constructor() {
    }

    protected bar = 'bar';

    public getBar() {
    }

    public get baz() {
        return 'baz';
    }

    public set baz(value) {
        console.log(value);
    }
}
```

> 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好

## [@typescript-eslint/member-ordering](https://typescript-eslint.io/rules/member-ordering)

指定类成员的排序规则

```typescript
// bad
class Foo1 {
    private getBar3() {
        return this.bar3;
    }

    protected getBar2() {
    }

    public getBar1() {
    }

    public constructor() {
        console.log(Foo1.getFoo3());
        console.log(this.getBar3());
    }

    private bar3 = 'bar3';
    protected bar2 = 'bar2';
    public bar1 = 'bar1';

    private static getFoo3() {
        return Foo1.foo3;
    }

    protected static getFoo2() {
    }

    public static getFoo1() {
    }

    private static foo3 = 'foo3';
    protected static foo2 = 'foo2';
    public static foo1 = 'foo1';
}
```

```typescript
// good
class Foo2 {
    public static foo1 = 'foo1';
    protected
    static foo2 = 'foo2';
    private static foo3 = 'foo3';

    public static getFoo1() {
    }

    protected static getFoo2() {
    }

    private static getFoo3() {
        return Foo2.foo3;
    }

    public bar1 = 'bar1';
    protected bar2 = 'bar2';
    private bar3 = 'bar3';

    public constructor() {
        console.log(Foo2.getFoo3());
        console.log(this.getBar3());
    }

    public getBar1() {
    }

    protected getBar2() {
    }

    private getBar3() {
        return this.bar3;
    }
}
```

::: tip
优先级：

1. static > instance
2. field > constructor > method
3. public > protected > private
   :::

## [@typescript-eslint/no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)

禁止定义空的接口

```typescript
// bad
interface Foo1 {
}
```

```typescript
// good
interface Foo2 {
    foo: string;
}
```

## [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)

禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型

```typescript
// bad
const foo1: number = 1;
const bar1: string = '';
```

```typescript
// good
const foo2 = 1;
const bar2 = '';
```

> 可以简化代码

## [@typescript-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace)

禁止使用 namespace 来定义命名空间

```typescript
// bad
namespace foo1 {
}
```

```typescript
// good
declare namespace foo1 {
}
```

> 使用 es6 引入模块，才是更标准的方式。
> 但是允许使用 declare namespace ... {} 来定义外部命名空间

## [@typescript-eslint/no-parameter-properties](https://typescript-eslint.io/rules/no-parameter-properties)

禁止给类的构造函数的参数添加修饰符

```typescript
// bad
class Foo1 {
    constructor(private name: string) {
    }
}
```

```typescript
// good
class Foo2 {
    constructor(name: string) {
    }
}
```

## [@typescript-eslint/no-require-imports](https://typescript-eslint.io/rules/no-require-imports)

禁止使用 require

```typescript
// bad
const fs = require('fs');
```

```typescript
// good
import * as fs from 'fs';
```

> 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入

## [@typescript-eslint/no-this-alias](https://typescript-eslint.io/rules/no-this-alias)

禁止将 this 赋值给其他变量，除非是解构赋值

```typescript
// bad
function foo() {
    const self = this;
    setTimeout(function () {
        self.doWork();
    });
}
```

```typescript
// good
function foo() {
    const {bar} = this;
    setTimeout(() => {
        this.doWork();
    });
}
```

## [@typescript-eslint/no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)

禁止出现没必要的 constructor

```typescript
// bad
class Foo1 {
    constructor() {
    }
}

class Bar1 extends Foo1 {
    constructor() {
        super();
    }
}
```

```typescript
// good
class Foo2 {
    constructor() {
        this.doSomething();
    }

    doSomething() {
    }
}

class Bar2 extends Foo1 {
    constructor() {
        super();
        this.doSomething();
    }

    doSomething() {
    }
}
```

## [@typescript-eslint/prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)

使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环

```typescript
// bad
const arr1 = [1, 2, 3];

for (let i = 0; i &lt; arr1.length; i++) {
    console.log(arr1[i]);
}
```

```typescript
// good
const arr2 = [1, 2, 3];

for (const x of arr2) {
    console.log(x);
}

for (let i = 0; i &lt; arr2.length; i++) {
    // i is used to write to arr, so for-of could not be used.
    arr2[i] = 0;
}

for (let i = 0; i &lt; arr2.length; i++) {
    // i is used independent of arr, so for-of could not be used.
    console.log(i, arr2[i]);
}
```

> for of 循环更加易读

## [@typescript-eslint/prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type)

可以简写为函数类型的接口或字面类型的话，则必须简写

```typescript
// bad
interface Foo1 {
    (): string;
}
```

```typescript
// good
type Foo2 = () => string;
```

## [@typescript-eslint/prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)

禁止使用 module 来定义命名空间

```typescript
// bad
module Foo1 {
}
```

```typescript
// good
namespace Foo2 {
}
```

> module 已成为 js 的关键字

## [@typescript-eslint/triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)

禁止使用三斜杠导入文件

```typescript
// bad
/// <reference path="./Animal">
```

```typescript
// good
import Animal from './Animal';
```

> 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的

## [@typescript-eslint/typedef](https://typescript-eslint.io/rules/typedef)

interface 和 type 定义时必须声明成员的类型

```typescript
// bad
type Foo1 = {
    bar;
    baz;
};
```

```typescript
// good
type Foo2 = {
    bar: boolean;
    baz: string;
};
```

## [@typescript-eslint/unified-signatures](https://typescript-eslint.io/rules/unified-signatures)

函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明

```typescript
// bad
function foo1(x: number): void;

function foo1(x: string): void;

function foo1(x: any): any {
    return x;
}
```

```typescript
// good
function foo2(x: number | string): void;

function foo2(x: any): any {
    return x;
}
```
