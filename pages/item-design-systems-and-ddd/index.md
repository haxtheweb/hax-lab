Every color, gap and font size in HAX comes from a **token**: a named CSS variable like `--ddd-spacing-4`. Change what a token means and every element that uses it changes with it, the same trick as your `--card-radius`, at the scale of thousands of elements.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 20 minutes</li><li><strong>Do:</strong> about 1 hour</li><li><strong>You make:</strong> your second card restyled with DDD tokens</li><li><strong>You need:</strong> your Project 1b pen</li><li><strong>Support level:</strong> medium</li></ul></div></stop-note>

Read and look
-------------

*   [DDD documentation](https://webcomponents.hax.cloud/elements/d-d-d/demo/index.html): open the color, spacing and typography sections and skim. DDD stands for Design, Develop, Deliver. It began as a student independent study and now styles all of HAX.
*   [Design tokens (Material Design)](https://m3.material.io/foundations/design-tokens/overview): another big system explaining the same idea.

One page, three systems
-----------------------

HAX themes can swap which design system their tokens point to. These are the same quiz and checklist from this course, with nothing changed but the design system. Look at heading color and weight, spacing, and accents.

  <a11y-tabs aria-label="The same page in three design systems"><a11y-tab label="DDD"><img src="files/ds-ddd.png" alt="A quiz question and checklist from this course in DDD: navy headings, bold type, round radio buttons" loading="lazy"></a11y-tab> <a11y-tab label="PatternFly"><img src="files/ds-patternfly.png" alt="The same quiz and checklist in PatternFly: lighter heading weight, more padding, blue headings" loading="lazy"></a11y-tab> <a11y-tab label="Material 3"><img src="files/ds-material.png" alt="The same quiz and checklist in Material 3: purple headings, tinted footer, purple accents" loading="lazy"></a11y-tab></a11y-tabs>

HAX also bridges Carbon, Fluent, Primer, Spectrum, USWDS, Tailwind, shadcn/ui, Bootstrap and Web Awesome. You don't need them now. You need to know the idea: content stays the same, decisions swap.

Play: the token quest
---------------------

Each idea will find you and ask a question. Answer right to unlock its house.

Do
--

<ddd-steps-list><ddd-steps-list-item step="1" title="Borrow DDD's tokens"><p>In the DDD docs, find the spacing scale, the corner radius sizes and two colors you like. Copy their token names and values into your pen's <code>:root</code>, for example <code>--ddd-spacing-4: 16px;</code>. In chapter 4 you'll get the real thing from npm; this is practice with the same names.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Swap your variables for tokens"><p>Replace your own spacing, radius and color values with DDD tokens. Your variables can point at tokens: <code>--card-radius: var(--ddd-radius-md);</code></p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Check dark mode"><p>Turn on dark mode on your computer. Does your card still read? DDD colors are written with <code>light-dark()</code> so one rule covers both. Fix anything you can't read.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Compare with a neighbor"><p>Open two other design systems, for example <a href="https://www.patternfly.org" rel="noopener noreferrer">PatternFly</a> and <a href="https://carbondesignsystem.com" rel="noopener noreferrer">Carbon</a>. Find their card. What do they decide that DDD also decides?</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="Your brand changes from blue to green. With a design system, what do you change?" single-option="" randomize=""><input type="checkbox" value="The token, once" data-correct="true"><input type="checkbox" value="Every card's CSS by hand"><input type="checkbox" value="The HTML of every page"><input type="checkbox" value="Nothing, colors can't change"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Before and after: paste three lines of CSS you changed to tokens.
*   What did PatternFly or Carbon decide that surprised you?