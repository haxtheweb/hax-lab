Content modeling means deciding what your data looks like before you write any of it: which fields a card has, what type each one is, and which are required. Get this right and the code that follows is easy. Get it wrong and every card is a special case.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 15 minutes</li><li><strong>Do:</strong> about 1 hour</li><li><strong>You make:</strong> a cards.json file with at least 12 cards</li><li><strong>You need:</strong> your properties list from Project 1 and a JSON viewer</li><li><strong>Support level:</strong> medium; AI encouraged for filling in data</li></ul></div></stop-note>

Read and look
-------------

*   [json.org](https://www.json.org/json-en.html): the whole format on one page. Note there are no comments in JSON.
*   [Working with JSON (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON).
*   Real data, from HAX: open [haxtheweb.org/site.json](https://haxtheweb.org/site.json) in your browser. Every HAX site is described by one file like this. Find the `items` array and one item's `title` and `slug`.

Do
--

<ddd-steps-list><ddd-steps-list-item step="1" title="Write the model"><p>From your properties list, write each field with its type (string, number, boolean, array) and whether it's required. Add an <code>id</code>: every item needs one so code can tell them apart.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Write one card by hand"><p>Create <code>cards.json</code> next to <code>my-card.js</code>. Write one complete card by hand so you know the model works.</p><code-sample copy-clipboard-button="" type="json"><template>{
  "cards": [
    {
      "id": "c1",
      "title": "Hockey highlights",
      "image": "https://github.com/haxtheweb.png",
      "channel": "Rink Rats",
      "views": 12000,
      "published": "2026-11-18",
      "tags": ["sports", "hockey"],
      "fancy": true
    }
  ]
}</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="3" title="Let AI fill in the rest"><p>Give AI your model and your one example, and ask for eleven more. Use the prompt below. Then read every card it makes: AI gets types wrong, invents fields and repeats itself.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Validate it"><p>Paste the file into <a href="https://jsonlint.com" rel="noopener noreferrer">a JSON validator</a> or just open it in your browser through your dev server. A single missing comma breaks the whole file.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="Why does every card in your JSON need an id?" single-option="" randomize=""><input type="checkbox" value="So code can find, change or remove one specific card" data-correct="true"><input type="checkbox" value="JSON requires it"><input type="checkbox" value="It makes the file smaller"><input type="checkbox" value="Vercel won't build without it"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Paste your model.
*   What did the AI get wrong, and how did you notice?