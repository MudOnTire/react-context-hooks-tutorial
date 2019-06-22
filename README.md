# 什么是Context和Hooks

**Context**

React的Context API提供了一种简洁的在组件树间共享数据的方式。当项目变大，组件层级变多，通过传递props的方式共享数据就变得难以维护，context提供了一种新的数据共享的方式：将数据集中存储在一个地方，所有的组件都能从中获取数据。听起来是不是很像redux的做法？事实上，redux内部就依赖于context实现。

**Hooks**

Hooks增强了函数式组件（functional component）的能力，使其具备类组件（class component）的一些功能比如：设置state、接入生命周期函数。

**Context & Hooks**

当context和hooks结合使用时会产生更强大的功能，类似redux那样的状态管理能力，而又不需要依赖任何第三方库。

# Hooks

## `useState()`

在function component中使用 `state`

## `useEffect()`

在component render或者re-render的时候执行一段代码

## `useContext()`

在function component中使用 `context`