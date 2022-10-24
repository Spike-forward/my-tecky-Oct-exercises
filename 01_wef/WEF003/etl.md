## Notes on WEF003 ##
<h5>
JS - automatically button
HTML
CSS 
## Block Element ##

## Inline Element## 
~
not affect the webpage

## Scripting


- Div already display the table structure of html
- Form very important and useful
- Username password
- <form>: The outermost tag of the form.
<label>: The label tag for the inputs
<input>: Interactive controls that allow user to input values. There are multiple types of inputs
type="text": Normal Text input
type="password": Password Text input
type="email": Email input
type="date": Date input
type="number": Number input
type="radio": Radio button input
type="checkbox": Checkbox input
type="submit": Submit Button
type="reset": Reset Button
<select>: Select Tag to select over multiple options
<option>: Options to select
<textarea>: Tag to input paragraphs of text.

<img src= "WEF003\images\pic1.png">
## CSS ##

<h5>strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}

span.bold-text {
   font-weight: 700;
}
- id cannot be repeated
 - class can share the same class name;

Selector	Description
div	Select the element tag
.myClassName	Select element based on class name. Class name can be reused. One element may have more than one class. It would be written as class='class1 class2 class3'
#myId	Select element based on id. id must be unique in page. One element has only one id
 <b>[attr=value]	Select element by matching the value of the attribute // base on choose attribute of element</b>
div.outer div.inner	Select element by parent and child elements
div.parent > div.child	Select the immediate children div.child under the div.parent
<b> div:hover	Pseudo selector for mouse hovering the div element </b>
