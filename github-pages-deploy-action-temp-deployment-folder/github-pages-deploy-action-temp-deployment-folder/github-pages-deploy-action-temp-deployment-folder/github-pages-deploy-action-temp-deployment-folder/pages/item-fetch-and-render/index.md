Your element will now load `cards.json` itself and draw a card for every item. You'll use AI as a pair programmer for this one: it writes a first draft, you read it, run it and make it yours.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 15 minutes</li><li><strong>Do:</strong> about 1 to 2 hours</li><li><strong>You make:</strong> a card-list element that renders cards from JSON, live on Vercel</li><li><strong>You need:</strong> cards.json and your my-card project</li><li><strong>Support level:</strong> medium; AI as pair programmer</li></ul></div></stop-note>

Read and play
-------------

*   [Using fetch (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
*   [Rendering lists (Lit)](https://lit.dev/docs/components/rendering/#rendering-lists): `.map()` inside a template.
*   [A commented pen](https://codepen.io/btopro/pen/LEGdLyo?editors=1010) that fetches from a website and walks through the JSON.

Do
--

<ddd-steps-list><ddd-steps-list-item step="1" title="Add a second element"><p>Run <code>hax webcomponent wc:element</code> (or copy <code>my-card.js</code>) to make <code>card-list.js</code> in the same project. It owns the data. <code>my-card</code> stays dumb: it just shows what it's given.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Ask for a first draft"><p>Use the first prompt below with your real files. Read the answer before you paste anything. Every line it writes, you should be able to explain.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Fetch the file"><p>Your draft should do roughly this. <code>import.meta.url</code> makes the path work both on your computer and on Vercel:</p><code-sample copy-clipboard-button="" type="javascript"><template>// in your element: load the JSON that sits next to this file
async firstUpdated() {
  const url = new URL("./cards.json", import.meta.url).href;
  const response = await fetch(url);
  const data = await response.json();
  this.items = data.cards;
}</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="4" title="Render the list"><p>Map over the items and hand each one to <code>my-card</code>:</p><code-sample copy-clipboard-button="" type="javascript"><template>render() {
  return html`
    &lt;div class="list"&gt;
      ${this.items.map((item) =&amp;gt; html`
        &lt;my-card title="${item.title}" image="${item.image}" ?fancy="${item.fancy}"&gt;&lt;/my-card&gt;
      `)}
    &lt;/div&gt;
  `;
}</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="5" title="Ship it"><p>Commit, push and check your vercel.app address. Open the Network tab and find the request for <code>cards.json</code>. You did on day one what you just built.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="Why do you build the JSON path with new URL('./cards.json', import.meta.url)?" single-option="" randomize=""><input type="checkbox" value="So the file is found relative to the code, both locally and on Vercel" data-correct="true"><input type="checkbox" value="fetch only accepts URL objects"><input type="checkbox" value="It makes the JSON load faster"><input type="checkbox" value="It's required by JSON"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   What did AI write that you didn't understand at first? What is it doing?
*   What did you have to change to make its draft work?