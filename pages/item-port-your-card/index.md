Move your CodePen card into `my-card.js`. The parts that changed from card to card become properties. The description becomes a slot so it can hold real HTML. Your colors and spacing become DDD tokens. Then you let tools check your work before a human does.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 20 minutes</li><li><strong>Do:</strong> about 1 to 2 hours</li><li><strong>You make:</strong> a my-card element used five different ways in index.html</li><li><strong>You need:</strong> your Project 1 pen and the my-card project</li><li><strong>Support level:</strong> medium</li></ul></div></stop-note>

Read and watch
--------------

*   [Lit cheat sheet](https://lit.dev/articles/lit-cheat-sheet/): properties, reflect, events and slots on one page (use JS).
*   Code crit of a past class's cards: what went well and what didn't.

Do
--

<ddd-steps-list><ddd-steps-list-item step="1" title="Move the HTML and CSS"><p>Paste your card's HTML into <code>render()</code> and its CSS into <code>static get styles()</code>. Leave the imports, <code>haxProperties</code> and the translation code that the generator wrote alone; you'll use them later.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Make properties"><p>Every value from your properties list becomes a property: declare it in <code>static get properties()</code>, give it a default in the constructor, use it in <code>render()</code>. Aim for at least three: title, image and one more.</p><code-sample copy-clipboard-button="" type="javascript"><template>import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class MyCard extends DDDSuper(LitElement) {
  static get tag() {
    return "my-card";
  }
  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.fancy = false;
  }
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        max-width: 400px;
        padding: var(--ddd-spacing-2);
        border: var(--ddd-border-sm);
        border-radius: var(--ddd-radius-md);
      }
      :host([fancy]) {
        background-color: var(--ddd-theme-accent);
        box-shadow: var(--ddd-boxShadow-md);
      }
      img {
        width: 100%;
        border-radius: var(--ddd-radius-sm);
      }
    `];
  }
  render() {
    return html`
      &lt;img src="${this.image}" alt=""&gt;
      &lt;h3&gt;${this.title}&lt;/h3&gt;
      &lt;slot&gt;&lt;/slot&gt;
    `;
  }
}
globalThis.customElements.define(MyCard.tag, MyCard);</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="3" title="Add a slot and a fancy state"><p>Put a <code>&lt;slot&gt;&lt;/slot&gt;</code> where the description goes. Add a <code>fancy</code> Boolean with <code>reflect: true</code>, then style it with <code>:host([fancy])</code>.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Use it five ways"><p>In <code>index.html</code>, make five different cards with attributes alone. No JavaScript in index.html.</p><code-sample copy-clipboard-button="" type="html"><template>&lt;my-card title="Hockey highlights" image="https://github.com/haxtheweb.png" fancy=""&gt;
  &lt;p&gt;Slotted HTML can be &lt;strong&gt;bold&lt;/strong&gt;, unlike a property.&lt;/p&gt;
&lt;/my-card&gt;</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="5" title="Audit it"><p>Run <code>npm run dddaudit</code> (or <code>hax audit</code>) in the project folder and fix what makes sense: it points at values that should be DDD tokens. Then open your demo, right click, Inspect, and run the <strong>Lighthouse</strong> tab with Accessibility ticked. Fix every red item. Try the <a href="https://wave.webaim.org/extension/" rel="noopener noreferrer">WAVE extension</a> too.</p></ddd-steps-list-item></ddd-steps-list>

Before you move on
------------------

*   All human-readable text comes from a property or a slot, never typed into `render()`.
*   Selectors use classes. No `id` lookups.
*   Comment each method in plain words. You should be able to explain every line.

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="You want authors to put bold text and links in your card's description. What do you use?" single-option="" randomize=""><input type="checkbox" value="A slot" data-correct="true"><input type="checkbox" value="A String property"><input type="checkbox" value="An id"><input type="checkbox" value="A media query"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Which property was hardest to wire up? Why?
*   Paste one audit finding and how you fixed it.
*   What does reflect: true do, in your words?