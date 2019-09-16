# Node
*Node js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.*

#### Why node js?
- It is nice to have the front and backend application in the same languages.
- No syntactical difference.
- Shared code, data structure, function and algorithm.
- Shared library - underscore js.
- Lightweight framework that includes bare minimum modules.
- Asynchronous by default. So it performs faster than other frameworks.


#### Abbreviations:
- [x] Http: Hyper Text Transfer Protocol.
- [x] Https: Hyper Text Transfer Protocol Secure.
- [x] I/O: Input & Output.
- [x] REPL: Read Eval Print Loop.


#### Synchronous - blocking
*Synchronous code running subsequently, which means each statement of code running one after another.*

#### Asynchronous - non blocking
*JavaScript is a single-threaded programming language which means only one thing can happen at a time. That's where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.*

#### Module
- Node js introduce three type of modules
  - Core modules : *The core modules include bare minimum functionalities of Node.js. [list of core module](https://www.w3schools.com/nodejs/ref_modules.asp)*
  - Local modules: *Local modules are modules created locally in your Node.js application.*
  - Third party modules: *You can use npm distribute packages for third party module. For example, [lodash](https://lodash.com/docs/).*

#### What is buffer?
*Node js introduce new data type called Buffer. Buffer mainly used to store binary data, while reading from a file or receiving packets over the network.*


#### Node js defaults to local:
- Node js is little different from the javascript when it comes to global scope. 
    - In JavaScript, variable declaration with var keyword become global. 
    - In node js, everything become local by default.

#### Access Global Scope
- In JavaScript, global scope is the window object. 
- In Node.js, global object represents the global scope.



