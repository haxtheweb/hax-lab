HAX is a way to make websites without thinking about it, in a format that keeps working. A HAX site is a folder: one `site.json` that lists every page, one HTML file per page, and the files you uploaded. Pages are made of web components, the same kind you just built. No database, nothing to upgrade, copy the folder and the site comes with it.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 20 minutes</li><li><strong>Do:</strong> about 45 minutes</li><li><strong>You make:</strong> a map of one real HAX site's files</li><li><strong>You need:</strong> a JSON viewer</li><li><strong>Support level:</strong> medium</li></ul></div></stop-note>

Read and look
-------------

*   [haxtheweb.org](https://haxtheweb.org): what HAX is for and who uses it.
*   [hax.cloud](https://www.hax.cloud): the stories and decisions behind the project, if you want the why.
*   [The web components gallery](https://webcomponents.hax.cloud): every element HAX ships, with demos. Find one that's a card.

How the pieces fit
------------------

<ddd-steps-list><ddd-steps-list-item step="1" title="site.json"><p>Lists every page: title, slug, order, parent and where its HTML lives. It follows <a href="https://github.com/haxtheweb/json-outline-schema" rel="noopener noreferrer">JSON Outline Schema</a>, the same idea as the cards.json you modeled.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="pages/"><p>One <code>index.html</code> per page. Plain HTML plus custom elements like <code>video-player</code> and <code>multiple-choice</code>.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Themes and design systems"><p>The theme draws the menu, header and layout around the pages. Swap the theme and the content stays put. Design systems swap underneath, as you saw in chapter 3.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="The editor"><p>HAX's editor reads each element's <code>haxProperties</code> to know what it can do. That's the file <code>hax webcomponent</code> made for your card. Fill it in, and your element can be dragged into any HAX page.</p></ddd-steps-list-item></ddd-steps-list>

Do
--

<ddd-steps-list><ddd-steps-list-item step="1" title="Read a site"><p>Open the <code>site.json</code> of the site you're reading right now, in <a href="https://github.com/haxtheweb/hax-lab/blob/master/site.json" rel="noopener noreferrer">the hax-lab repository</a>. Find this page's item by its title. Note its <code>slug</code>, its <code>parent</code> and its <code>location</code>, then open the file it points to under <code>pages/</code>.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Read a page"><p>On that page, right click and Inspect. Find three custom elements. Look each one up in the gallery.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Read some code"><p>Open the <a href="https://github.com/haxtheweb/webcomponents" rel="noopener noreferrer">webcomponents repository</a>. Find one element's folder under <code>elements/</code> and open its main <code>.js</code> file. You'll recognize <code>static get properties()</code>, <code>render()</code> and DDD tokens.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="Your HAX site is a folder. What happens if you copy it to another computer?" single-option="" randomize=""><input type="checkbox" value="The whole site comes with it, pages, files and all" data-correct="true"><input type="checkbox" value="You also need to export the database"><input type="checkbox" value="Only the theme comes"><input type="checkbox" value="It stops working without the original server"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Which element did you read, and what did you recognize?
*   What would it take to make your my-card show up in the HAX editor?