## DOM by Adams ##

DOM Definition:
DOM Selector
Selecting specific elements in DOM is simple. Normally an element has three distinct attributes that can be selected directly by the DOM selector.

<div id="item-123" class="items">...</div>
<div id="item-456" class="items"></div>
<p>This is a paragraph</p>

document.getElementById('item-123'); // Select only the first div above.
document.getElementsByClassName('items'); // Select both divs above.
document.getElementsByTagName('p'); // Select the paragraph tag in an array-like HTML Collection
easy to make mistakes

## Query Selector ##
DOM Events
DOM Events are sent when something happens in the DOM elements. There are lots of different events existing. Some useful events are

Event	Description
'click'	When the button (usually a mouse button) is pressed and released on a single element.
'keydown'	When the user first presses a key on the keyboard
'keyup'	When the user releases a key on the keyboard
'submit'	When the user submits a form
'load'	When the page has finished loading
'resize'	When the browser window has been resized
'scroll'	When the user scrolls up or down on a page
'mouseenter'	When the user's mouse enters an element
'mouseleave'	When the user's mouse leaves an element
For built-in events like the one mentioned above, there are predefined Event Handlers for each event. For example, for the event click for an element, the method onclick will be called. As a result , we can add a customized event handler when the event click is sent.
## All above for browser
Search Query selector mdn
Event listen types see event reference
click event listener js
src import html css

## event.target VS event.currentTarget VS this##
Please refer to 02, 03  files
mdn current target
current target vs event.target difference
event.current target only print own stuff
event listener to two sides, one to 
propagation computer science - transmission of signal 
candy.
event.stopPropagation() mdn
How to change DOM;
## Why the link of js file put at the end of html file? ##
<h3> js down but window onload
window onload mdn load all the resource, then trigger the js file;

## Introduction to events ##
1. Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.

2. For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers. This won't be an exhaustive study; just what you need to know at this stage.

3. events are actions or occurrences that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. 

4. In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur. browser also has event occur.

5. A web page finishes loading also trigger event occur.

6. https://javascript.info/bubbling-and-capturing

7. Explanation of Event Listen, according the heirahe

## Bubbling ##
he bubbling principle is simple.

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:

<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

8. mdn this
    - calling the specific object, "this.walk"
    - In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. From modelling, change the model to change the content inside the model.
    - Abstraction
    - In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

- Inside a function, the value of this depends on how the function is called.

Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser.

- In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined, as shown in the following example:function call 