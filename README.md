# PH-Assignment-5

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
> getElementById: selects a single element by its ID, IDs should be unique. Returns one element.
> getElementsByClassName: selects all elements with that class. Returns an HTMLCollection.
> querySelector: selects the first element that matches any CSS selector.
> querySelectorAll: selects all elements that match a CSS selector. Returns a Nodelist.

2. How do you create and insert a new element into the DOM?
Answer:
>const newDiv = document.createElement('div');
>newDiv.textContent = "Hello, I am a new div";
>const container = document.getElementById("container");
>container.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
Answer:
>Event Bubbling is when an event triggered on a child element "bubbles up" to its parent elements automatically.

How it works:
> You click pr interact with an element.
>The event first runs on he target element.
> Then the event moves up through its parent one by one.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
>Event Delegation is a technique where you attach one event listener to a parent element instead of attaching ot to many child elements. Then, you use the event's target to figure put which child triggered the event. 
Why it's useful:
> Performance: Less memory usage because you don't attached hundreds of listeners
> Dynamic elements: Works for elements added after the page loads
> Cleaner code: One listener handles many elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
> preventDefault(): stops the default browser action for an event.
> stopPropagation(): stops the event from bubbling up(or capturing down) the DOM.