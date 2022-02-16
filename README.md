# Random-Pass-Package

This is package which lets you generate random passwords with options like, length and should it contain: numbers / letters / speacial chars.

<!-- [![download badge](https://badgen.net/npm/dt/@shreyazz/random_pass/?color=blue&icon=npm&labelColor=black&scale=1.1)](https://www.npmjs.com/package/@shreyazz/random_pass) -->

## Installation and Importing

1. Install the package

```bash
npm i @shreyazz/random_pass
```

2. Import package

```js
const randomPass = require("@shreyazz/random_pass");
```

or

```js
import randomPass from "@shreyazz/random_pass";
```

---

## Functions

There are two functions in the package. (Here I'm assuming that the package is imported in `randomPass` variable)

- .info()
- .generateRandomPass()

1. **randomPass.info()**
   It console logs the information about the package and how to use it.
   <br />
2. **randomPass.generateRandomPass()**
   This function takes one parameter, an object. That object contains two properties. Length (Length of the password) and shouldContain (array of things you want to include in the password like, numbers or special chars)

   ```js
   const password = randomPass.generateRandomPass({
     length: 10,
     shouldContain: ["numbers", "letters", "spl-chars"],
   });
   ```

---

## Stuff to know before usage.

- `shouldContain` array must have at least two options.
- To include:
  - Letters: `letters`
  - Numbers: `numbers`,
  - Speacial Characters: `spl-chars`

Example: If I want to include only Numbers and Special Characters

```js
const password = randomPass.generateRandomPass({
  length: 5,
  shouldContain: ["numbers", "spl-chars"],
});
```

---

Made with ❤️ by [Shreyas Pahune](https://github.com/shreyazz)
