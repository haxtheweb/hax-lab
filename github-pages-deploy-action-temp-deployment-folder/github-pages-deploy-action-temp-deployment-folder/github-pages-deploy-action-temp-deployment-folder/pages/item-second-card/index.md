Now make a different card that shares the first one's DNA. Maybe it's the channel card that sits next to videos, or a playlist card. Same corners, same spacing, same type, different content and shape. Doing this by copy and paste shows you why the next chapter, design systems, exists.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 10 minutes</li><li><strong>Do:</strong> about 1 hour</li><li><strong>You make:</strong> two related cards side by side in one pen</li><li><strong>You need:</strong> your Project 1 pen</li><li><strong>Support level:</strong> medium: fewer steps, same tools</li></ul></div></stop-note>

Read
----

*   [CSS custom properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties): variables in CSS.
*   [A guide to flexbox (CSS-Tricks)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/): how to sit cards next to each other.

Do
--

<ddd-steps-list><ddd-steps-list-item step="1" title="Fork your first pen"><p>Keep the original untouched. Fork it and work in the copy.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Pull out the shared decisions"><p>Move the values both cards share (radius, gap, border, font) into CSS variables at the top. Give each card a shared class plus its own:</p><code-sample copy-clipboard-button="" type="css"><template>/* one set of decisions, used by every card */
:root {
  --card-radius: 12px;
  --card-gap: 16px;
  --card-border: 1px solid #ccc;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: var(--card-gap);
}
.card {
  border: var(--card-border);
  border-radius: var(--card-radius);
}
.card.video { max-width: 400px; }
.card.channel { max-width: 280px; text-align: center; }</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="3" title="Build the second card"><p>Model it on paper first, like last time. Then build it with the shared class and only the CSS that makes it different.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Put them side by side"><p>Wrap both in <code>.wrapper</code> with <code>display: flex</code>. Add a third card. On a phone they should stack.</p></ddd-steps-list-item><ddd-steps-list-item step="5" title="Change one variable"><p>Change <code>--card-radius</code> to 0. Both cards change at once. That's the point.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="You change --card-radius once and both cards update. What did you just build, in miniature?" single-option="" randomize=""><input type="checkbox" value="A design system" data-correct="true"><input type="checkbox" value="A database"><input type="checkbox" value="A framework"><input type="checkbox" value="A media query"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Link the forked pen.
*   What did both cards share? What made them different?
*   How did copying CSS between them feel? What would happen with 40 cards?