## node.js ##
## Use of ps command ##
1. ps | findstr -i chrome
2. kill command for stop the queue
3. For Mac:
   ps -ef quite popular, and aux as well

## Introduction of Node.js ##
1. scoop install nodejs

## Programming in Node.js(Server) vs Programming in Browser ##
1. The biggest change between the current module and the previous module is that we are now programming in Server in this module whereas we are programming in Browser in the previous module.

2. The fundamental difference is that a Browser is a Sandbox Environment which you have no access to the Operation System directly. It means that you cannot easily access files, hardwares in your browser while you can do all of these capabilities easily in Node.js.

3. Node.js can control your storage in hard disk as well.

4. Node.js to write server in common.

5. The web server function is to 

## Introduction of NPM Platform for JS Developers (node.js package manager)##
1. https://www.npmjs.com/search?q=express
2. npm init
3. Ask you the package name;
4. Keep Pressing enter;
5. npm i express command; then u get two libraries files: node_modules and package-lock.json
6. Node modules not put on git, so use .gitignore;
7. CMS Method 3: Installing Package globally
There are many Node based command-line tools that is developed by either Node foundation officially or other third parties developers. They are not bound to any of the projects that you are working on. npm itself is such a good example. Another good example is a project management tools called forever which helps developers monitor their Node program. To install the package globally, all you have to do is add the flah --global or just -g. Please be reminded that you have to add the sudo on Ubuntu systems because the package is going to be installed in the system folders.

sudo npm install --global forever // give admin right to operate command
# or the short-form
sudo npm install -g forever // 

## Typescript TS Introduction ##
1. What is datatype? JS variable store values data type: string, number, 
2. Typescript is a programming language introduced by Microsoft to address the problems developers had when they are developing in Javascript. Typescript is a strict superset of javascript. It means that every valid Javascript program is a valid typescript program.
3. Enhanced of JS, variable or function restrict its type:
4. Strong type , weak type, static type
5. After Node is introduced , Javascript is used not only in small size application in browser. It is also used in medium to large size server side application or even desktop application. The design of Javascript initially is for small-size program , therefore it focused more on convenience over maintainability. Here are a few problems that developers normally encounter:

Javascript is a dynamic Typing programming language. The lack of typing limits the Editors/IDE ability to perform code suggestions.
Javascript tends to become more and more unmaintainable if the codebase grows in size. The problems is worsened by (1) as the support from Editor is limited.
Typescript addresses this problem by introducing optional typing to javascript. As a result, developers can choose to provide additional type for documentation and type-checking purpose. Typescript is compiled to Javascript during the compilation phase. So we don't need another runtime other than Node to help us to run Typescript.

Here is a diagram that includes many common programming languages and their categories for your references.
6. Static need to define the type first, eg., ts
7. Dynamic type no need to define, eg. js
8. Strong type,can't allow to change from string to number
9. Weak type can allow to change from string to number;
10. Here is the definitions for the categories above,

Static Type: Programmers needs to specify the type for every variables and parameters.
Dynamic Type: Programmers does not need to specify type for variables.
Strong Type : Type coercion is prohibited.
Weak Type: Type coercion is allowed.
Inferred Type: A type of Static Type. The compiler is trying to infer the types from the code . This is one of the most important feature of Typescript.

11. Installation
All typescript file are ended with *.ts instead of *.js. If you try to run them directly using Node. You are going to encounter error as Node does not run typescript file by default.

There are multiple ways to run typescript. The way that we are going to introduce in this course is to use the package ts-node. ts-node provides ad-hoc capability to run the typescript file directly(by running the compilation behind the scene).

Assuming you already have a working npm repository. To install ts-node, we have to run the following command:

## npm install ts-node typescript @types/node ##
1. Ctrl + ~
2. npm init -y   // default no need press enter many times
3. Then you have to create a tsconfig.json at the root of your project as below:
4. npm install typescript ts-node @types/node 將node 放返落去, 可以在js 落ts type;
5. 
## Type ##
For functions, 

## Objects and types##

## Enums Type ##
1.Enums is a special data type which the values are limited to several values. Good example would be direction (which is limited to East,West,South and North) and the kinds (which is limited to Club,Heart, Spade and Diamond).

## Generics ##






