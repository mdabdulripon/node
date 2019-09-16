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


#### [Execution Context?](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)
- An Execution Context is an abstract concept of an environment where the JavaScript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.
- The function code executes inside the function execution context, and the global code executes inside the global execution context. Each function has its own execution context.*

#### [What is Call Stack?](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)
- The call stack as its name implies is a stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.
- The call stack has a LIFO structure which means that the items can be added or removed from the top of the stack only.

#### What is Callback Queue?
- When callback is completed it is pushed to the callback queue. But the callback is not immediately executed, and that’s where the event loop kicks in.

#### [What is Event Loop?](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)
- The job of the Event loop is to look into the call stack and determine if the call stack is empty or not. If the call stack is empty, it looks into the message queue to see if there’s any pending callback waiting to be executed.

