import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`


// const person = {
//     name: "张三",
//     subs: {
//         age: 2
//     }
// };
// const proxy = new Proxy(person, {
//     get: function (target, propKey) {
//         console.log(target, propKey)
//         console.log(propKey in target)
//         return target[propKey]
//         // if (propKey in target) {
//         //     return target[propKey];
//         // } else {
//         //     throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
//         // }
//     }
// });
// proxy.name // "张三"
// proxy.age = 12
// proxy.age


