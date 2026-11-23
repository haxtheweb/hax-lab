Your first project is small on purpose: rebuild one video card from YouTube in plain HTML and CSS. A card is the perfect first thing to build. It has an image, a title, some details and a layout, and you'll find it on nearly every website.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 15 minutes</li><li><strong>Do:</strong> about 1 to 2 hours</li><li><strong>You make:</strong> a responsive video card in a public CodePen</li><li><strong>You need:</strong> your CodePen account</li><li><strong>Support level:</strong> full, with an example to model</li></ul></div></stop-note>

Read and watch
--------------

*   [The box model (web.dev)](https://web.dev/learn/css/box-model): margin, border, padding. You'll use all three.
*   [Media queries (web.dev)](https://web.dev/learn/css/media-queries): how one card changes on a phone.
*   Fork [this meme maker pen](https://codepen.io/btopro/pen/gOjGpam) and change its text and font size to see how HTML, CSS and a pen fit together.

Do
--

<ddd-steps-list><ddd-steps-list-item step="1" title="Pick a card and take it apart"><p>Screenshot one video card on YouTube. On paper (or a sticky note), draw boxes around every piece: thumbnail, duration badge, avatar, title, channel, views, date. Label each box with what it is. This is your model.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="List its properties"><p>Which parts change from card to card (title, image, views)? Those are its <strong>properties</strong>. Which never change (the layout, the rounded corners)? Write both lists in your journal. You'll need them in chapter 4.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Build the HTML"><p>Make a new pen. Use classes, never ids or inline styles. Start from something like this:</p><code-sample copy-clipboard-button="" type="html"><template>&lt;div class="wrapper"&gt;
  &lt;div class="card"&gt;
    &lt;img class="card-image" src="https://github.com/haxtheweb.png" alt="HAX logo, a stylized hand"&gt;
    &lt;div class="card-text"&gt;
      &lt;h3 class="card-title"&gt;Video title goes here&lt;/h3&gt;
      &lt;p class="card-meta"&gt;Channel name · 12K views · 2 days ago&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="4" title="Style it"><p>Keep it no wider than 400px. Space it with padding and margin in steps of 4, 8 or 16 pixels; try 8, then 12, then 16 and keep what looks right. Then add a media query so it fills the width on screens under 500px:</p><code-sample copy-clipboard-button="" type="css"><template>.card {
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 8px;
}
.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
}
@media (max-width: 500px) {
  .card { max-width: 100%; }
}</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="5" title="Test it"><p>Use the editor's layout buttons or drag the window narrow. Check it on your phone. Does the title wrap cleanly? Does the image keep its shape?</p></ddd-steps-list-item></ddd-steps-list>

Common mistakes to look for
---------------------------

*   `class="thing"`, never `class = "thing"`. No spaces around the equals sign.
*   No `<center>`, `<br>` for spacing, or `style=""` on tags. CSS does that.
*   Every `alt` describes the image for someone who can't see it.
*   Every tag you open, you close, in the order you opened it.

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="Your card's title should change for every video, but the rounded corners never should. In component terms, the title is a…" single-option="" randomize=""><input type="checkbox" value="Property" data-correct="true"><input type="checkbox" value="Media query"><input type="checkbox" value="Selector"><input type="checkbox" value="Border"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Link your pen and your model sketch.
*   Which CSS property took longest to figure out?
*   Which websites or videos helped? Share them.