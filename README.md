# cracking-coding-interview-js

Cracking-coding-interview-js is my take series on [Cracking Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850) using vanilla javascript. This book is good coding practice, for up-skilling a developer's coding muscles.


## To run any of the examples

CD in to the directory containing filename.js for example and run command below. 

```

node filename.js

```

Some of the examples do not have a test, you can simply add one as:
```
  // assume i have function like below.
  const doSomething = (inputData) => {
    return inputData + 2;
  };
  
  // add simple test like this 
  [1, 3, 2]
  .map(x => doSomething(x))
  .forEach(y => console.log(y));
  
```
