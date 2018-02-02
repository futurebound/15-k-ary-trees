![cf](http://i.imgur.com/7v5ASc8.png) lab 25 - Tree Data Structure
====

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Requirements
#### Configuration
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **test/** -- directory for holding your programs unit and integration tests

#### Testing
  * write at least three test assertions for each constructor method
  * organize your tests into appropriate describe/it blocks for test output readability

####  Documentation
  * in your README, write documentation for you data structures
  * your documentation should includes code block usage examples
  * provide instructions for:
    * installing and using your data structure
    * running any command line interface
    * accessing each method
    * running your tests

#### Feature Tasks
  * use the node fs module to read an HTML document into a buffer (minimal.html => found in the /assets dir)
  * parse the buffer and use the root `<html>` element, subsequent HTML tags, and their text content to build a tree data structure
    * hint: you will need to refactor your node to allow a different type of data to be stored in the `.value` property. The remainder of the node should not change
      * ```javascript
          Tree = Node {
            value: {
              eleName: 'xxx',
              textContent: 'yyy' (can be empty string??)
            },
              children: SLL [{Node}, {Node}, ...]
            }
          }
        ```

## Stretch:
  * implement the ability to parse both classes & ids; and any other attribute nodes you would like to consider
    * there is a test file in /assets dir called stretch.html

#### Rubric:
  * Tests: 2pts
  * Passes linter: 1pts
  * Completed Data Structure: 3pts
  * Completed FP methods: 2pts
  * Big-O notation: 2pts
