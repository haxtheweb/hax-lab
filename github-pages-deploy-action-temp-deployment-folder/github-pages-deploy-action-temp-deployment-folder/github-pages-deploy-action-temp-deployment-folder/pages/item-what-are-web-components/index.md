For years every web framework invented its own idea of a "component", and every one of them only worked inside that framework. Web components are the browser's answer: a standard way to make your own tags that work anywhere HTML works, with or without a framework.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 20 minutes</li><li><strong>Do:</strong> about 1 hour</li><li><strong>You make:</strong> a list of the web components hiding on sites you use</li><li><strong>You need:</strong> the HTML and CSS basics below if they're new to you</li><li><strong>Support level:</strong> full</li></ul></div></stop-note>

Read and watch
--------------

These are the slide decks from the course. Read them in order. If one doesn't load here, open it in a new tab from the link under it.

<a11y-tabs aria-label="Slide decks"><a11y-tab label="What are web components" icon="icons:extension"><iframe-loader source="https://docs.google.com/presentation/d/1cvM-4v745oQWcpX4M0ytFLQd_eIyaOJgUEgs4V6UFk0/embed?start=false&amp;loop=false&amp;delayms=3000" height="480px" width="100%" title="What are web components slides"></iframe-loader><p><a href="https://docs.google.com/presentation/d/1cvM-4v745oQWcpX4M0ytFLQd_eIyaOJgUEgs4V6UFk0/edit?usp=sharing" rel="noopener noreferrer">Open the deck</a></p></a11y-tab><a11y-tab label="Why they last" icon="icons:history"><iframe-loader source="https://docs.google.com/presentation/d/1PBbN6x3wKTa9yuisBDkh80scPfZuR2R8GdvJMuGHLwk/embed?start=false&amp;loop=false&amp;delayms=3000" height="480px" width="100%" title="Why web components slides"></iframe-loader><p><a href="https://docs.google.com/presentation/d/1PBbN6x3wKTa9yuisBDkh80scPfZuR2R8GdvJMuGHLwk/edit?usp=sharing" rel="noopener noreferrer">Open the deck</a></p></a11y-tab><a11y-tab label="The JS landscape" icon="icons:language"><iframe-loader source="https://docs.google.com/presentation/d/1XC6OuYVe3fOdGmpZ_Q9aGXOPJKjj5VbfR3vMvCUJBdk/embed?start=false&amp;loop=false&amp;delayms=3000" height="480px" width="100%" title="JavaScript ecosystems slides"></iframe-loader><p><a href="https://docs.google.com/presentation/d/1XC6OuYVe3fOdGmpZ_Q9aGXOPJKjj5VbfR3vMvCUJBdk/edit?usp=sharing" rel="noopener noreferrer">Open the deck</a>. The <a href="https://www.youtube.com/watch?v=VyWw2JFnCRA" rel="noopener noreferrer">recorded lecture</a> walks through it.</p></a11y-tab></a11y-tabs><a11y-collapse heading="New to HTML, CSS or JavaScript? Start here" heading-button=""><div slot="content"><p>Do these first if tags and selectors are new. They go fast.</p><ul><li><a href="https://www.w3schools.com/html/default.asp" rel="noopener noreferrer">Learn HTML (W3Schools)</a> and <a href="https://www.w3schools.com/css/default.asp" rel="noopener noreferrer">Learn CSS (W3Schools)</a></li><li><a href="https://web.dev/learn/css" rel="noopener noreferrer">Learn CSS (web.dev)</a> for the box model, flexbox and media queries</li><li><a href="https://javascript.info" rel="noopener noreferrer">javascript.info</a> when you need the why behind JavaScript</li></ul></div></a11y-collapse>

The four pieces
---------------

Every web component is made from the same few browser features: **custom elements** (your own tag names), **shadow DOM** (private markup and styles), **templates** (inert HTML you can stamp out) and **slots** (holes where authors put their own content). [MDN's web components guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) has the details.

Play: native or not?
--------------------

Your character runs on its own. Jump to grab what the browser does natively, and leap over what needs a framework or a compiler before a browser can run it.

Do: find them in the wild
-------------------------

<ddd-steps-list><ddd-steps-list-item step="1" title="Inspect YouTube"><p>Open <a href="https://www.youtube.com" rel="noopener noreferrer">youtube.com</a>, right click a video card and pick Inspect. Look at the tag names in the Elements panel. Any tag with a dash in its name (like <code>ytd-rich-item-renderer</code>) is a custom element.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Inspect two more sites"><p>Try GitHub and any news site. Write down every tag with a dash you find, and any <code>#shadow-root</code> you can expand.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Inspect HAX"><p>Open <a href="https://haxtheweb.org" rel="noopener noreferrer">haxtheweb.org</a>. Nearly everything on the page is a web component. Pick one and guess what its attributes do.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="Which of these is a valid custom element name?" single-option="" randomize=""><input type="checkbox" value="video-card" data-correct="true"><input type="checkbox" value="videocard"><input type="checkbox" value="VideoCard"><input type="checkbox" value="card"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   List the custom elements you found and where.
*   In two sentences, why do web components outlast frameworks?
*   What still doesn't make sense? Write the question down; it's useful later.