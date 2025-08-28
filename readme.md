# Emergency Service Project - JavaScript DOM & Events


### 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

* **`getElementById`**

  * Selects **one element** by its unique `id`.
  * Returns a single DOM element.
  * Example: `document.getElementById('count-heart')`

* **`getElementsByClassName`**

  * Selects **all elements** with a specific class.
  * Returns a **live HTMLCollection** (updates automatically if DOM changes).
  * Example: `document.getElementsByClassName('copy-btn')`

* **`querySelector` / `querySelectorAll`**

  * Uses **CSS selectors** to select elements.
  * `querySelector` → first matching element.
  * `querySelectorAll` → all matching elements in a **static NodeList**.
  * Example: `document.querySelector('.card')` or `document.querySelectorAll('.call-btn')`

---

### 2. How to create and insert a new element into the DOM

1. **Create an element**:

   ```js
   const div = document.createElement('div');
   ```
2. **Add content or attributes**:

   ```js
   div.innerText = 'Hello World';
   div.className = 'my-div';
   ```
3. **Insert into DOM**:

   ```js
   const container = document.getElementById('container');
   container.appendChild(div); // adds at the end
   ```

In the project, we do this when adding a **call history item** after clicking a call button.

---

### 3. What is Event Bubbling and how does it work

* **Event Bubbling** means an event starts at the **target element** and bubbles **upwards** to its parent elements.
* Example in project: clicking a **heart** triggers the click on the heart first. If there were a parent listener, it would fire after.
* Useful to understand why multiple listeners on parent-child elements can all trigger.

---

### 4. What is Event Delegation and why is it useful

* **Event Delegation**: attach a **single event listener to a parent element** and handle events for its children.

* **Benefits**:

  * Fewer event listeners → better performance.
  * Works for dynamically added elements.

* Example in project: instead of attaching separate listeners for every copy button, we could attach one listener on the card container and check if the clicked target is a button.

---

### 5. Difference between `preventDefault()` and `stopPropagation()`

* **`preventDefault()`**

  * Stops the **default browser action** for an element.
  * Example: stopping a form submission or link navigation.

* **`stopPropagation()`**

  * Stops the **event from bubbling or capturing further** in the DOM tree.

* Key difference:

  * `preventDefault()` → stops browser's default action.
  * `stopPropagation()` → stops the event from reaching parent elements.


