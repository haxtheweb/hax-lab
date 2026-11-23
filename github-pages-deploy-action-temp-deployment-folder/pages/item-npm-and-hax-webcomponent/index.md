Nobody writes everything from scratch. Modern JavaScript projects are built from packages: small pieces of other people's code, downloaded and kept up to date by a package manager. npm is the one that comes with Node.js, and it's how you'll get Lit, DDD and every HAX element.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 20 minutes</li><li><strong>Do:</strong> about 1 hour</li><li><strong>You make:</strong> a my-card project running on your computer</li><li><strong>You need:</strong> Node.js, VS Code and the hax command working</li><li><strong>Support level:</strong> full</li></ul></div></stop-note>

Read and watch
--------------

*   [About npm](https://docs.npmjs.com/about-npm) and [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json): what a package is and the file that lists them.
*   [Intro to Lit tutorial](https://lit.dev/tutorials/intro-to-lit/): choose **JS**, not TS, at the top. Lit is the small library on top of web components that HAX uses.
*   [HAX CLI playground](https://playground.hax.cloud): try the hax command in your browser if your install is still fighting you.

Do
--

<ddd-steps-list><ddd-steps-list-item step="1" title="Pick a home for your code"><p>Make one folder for everything you build, like <code>Documents/git/your-github-name</code>. You'll come back to it for years, so make it logical.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Scaffold the component"><p>In your terminal:</p><code-sample copy-clipboard-button="" type="bash"><template># go to where you keep code, for example ~/Documents/git/&lt;your-github-name&gt;
cd ~/Documents/git
hax webcomponent my-card
cd my-card
npm install
npm start&lt;/your-github-name&gt;</template></code-sample><p>Answer the questions if it asks. A browser window opens with your element's demo.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Open it in VS Code"><p>File, Open Folder, pick <code>my-card</code>. Find <code>package.json</code>, <code>my-card.js</code> and <code>index.html</code>. Leave <code>node_modules</code> alone; npm owns it.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Read package.json"><p>Find the <code>dependencies</code> (code your element ships with) and the <code>scripts</code>. Run <code>npm run</code> to list them. <code>start</code> runs the dev server, <code>build</code> makes the files you publish, <code>dddaudit</code> checks your styles.</p></ddd-steps-list-item><ddd-steps-list-item step="5" title="Change one word"><p>In <code>index.html</code>, change the title attribute on <code>&lt;my-card&gt;</code> and save. The browser updates by itself. That's the loop you'll live in.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="Where does npm write down which packages your project needs?" single-option="" randomize=""><input type="checkbox" value="package.json" data-correct="true"><input type="checkbox" value="node_modules"><input type="checkbox" value="index.html"><input type="checkbox" value="README.md"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   What did hax webcomponent create? List the files you recognize.
*   Lit vs the plain CodePen way: easier or harder so far? Why?