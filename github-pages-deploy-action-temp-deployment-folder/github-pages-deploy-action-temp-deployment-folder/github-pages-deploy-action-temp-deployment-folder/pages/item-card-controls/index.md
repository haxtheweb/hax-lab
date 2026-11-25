Close the AI tab. This page is yours alone, because this is the skill everything else depends on: find an element, listen for a user, check a rule, change the page. You'll do it in plain JavaScript in CodePen first, then bring it into your component.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 15 minutes</li><li><strong>Do:</strong> about 1 to 2 hours</li><li><strong>You make:</strong> buttons that add, clone, change and remove cards, with limits</li><li><strong>You need:</strong> your Project 1b pen, MDN, and no AI</li><li><strong>Support level:</strong> light: requirements, not steps</li></ul></div></stop-note>

Read and watch
--------------

*   [querySelector (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and [addEventListener (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
*   [classList (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList): how to toggle a state without touching styles.
*   Follow along with a past class doing exactly this, with [this starting pen](https://codepen.io/btopro/pen/PoLJXVj):

Requirements
------------

Fork your Project 1b pen. Add a row of buttons. Each one needs to:

<ddd-steps-list><ddd-steps-list-item step="1" title="Add a card"><p>Adds a new card at the end. There can never be more than 10.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Clone a card"><p>Copies the first card, content and all, with <code>cloneNode(true)</code>.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Change a setting"><p>Toggles a <code>fancy</code> class on <strong>every</strong> card, on and off. Test the class with <code>classList.contains</code>, not the style.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Change content"><p>Changes the title of the last card, and its image.</p></ddd-steps-list-item><ddd-steps-list-item step="5" title="Remove a card"><p>Removes the last card. Never removes the only one left.</p></ddd-steps-list-item><ddd-steps-list-item step="6" title="Show the rules"><p>Disable Add at 10 and Remove at 1, so the user can see the limit instead of guessing.</p></ddd-steps-list-item></ddd-steps-list>

Here's the shape of one button. The comments are the recipe for the other five:

When it works, bring it home
----------------------------

Move the same behavior into `card-list`: keep the cards in an `items` array property, change the array, and let Lit re-render. Notice you no longer touch the page directly. That shift, from changing the page to changing the data, is the step from scripts to components.

Stuck? Search, don't ask
------------------------

Search the small thing: "javascript remove last child of element", "disable button javascript". Read the MDN result, try it, inspect it. If you're still stuck after 20 minutes, ask a person, and show them what you tried.

<multiple-choice question="The Remove button is clicked when only one card is left. What should your code do first?" single-option="" randomize=""><input type="checkbox" value="Check the count and stop before removing" data-correct="true"><input type="checkbox" value="Remove it, then add one back"><input type="checkbox" value="Throw an error"><input type="checkbox" value="Reload the page"></multiple-choice> <multiple-choice question="You want every card to look fancy. Which is better?" single-option="" randomize=""><input type="checkbox" value="card.classList.toggle('fancy')" data-correct="true"><input type="checkbox" value="card.style.backgroundColor = 'gold'"><input type="checkbox" value="card.id = 'fancy'"><input type="checkbox" value="document.write('fancy')"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Which requirement took longest, and what finally made it click?
*   What did you search for? List the searches that worked.
*   Paste your pen link.