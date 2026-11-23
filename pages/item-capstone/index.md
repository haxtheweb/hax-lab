No steps this time, just the goal and the checkpoints. Make a HAX site in your browser, bind it to a folder on your computer, change it with the hax command line, put it in GitHub and publish it. Then change it again and watch it republish. When you can do that, you have the whole loop HAX contributors work in every day.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 10 minutes</li><li><strong>Do:</strong> about 2 to 3 hours</li><li><strong>You make:</strong> a published HAX site you built and edited in two different ways</li><li><strong>You need:</strong> Chrome or Edge (Firefox can't bind a local folder yet), and everything from chapters 1 to 5</li><li><strong>Support level:</strong> none: goal and checkpoints only</li></ul></div></stop-note>

The goal
--------

Build a small site about something you care about. It must include your card. Not as a screenshot: as a link to your vercel.app element and a page that explains how you built it, using HAX blocks like video, code and self checks, the way this site does.

Checkpoints
-----------

<ddd-steps-list><ddd-steps-list-item step="1" title="Make it in the browser"><p>On <a href="https://browser.hax.cloud" rel="noopener noreferrer">browser.hax.cloud</a>, create a site and bind it to a new, empty folder in your code folder. Add at least four pages. Everything saves into that folder on your computer.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Open it locally"><p>Open that folder in VS Code. Find <code>site.json</code> and a page's <code>index.html</code>. Run <code>hax serve</code> in the folder. Change a page in the file, save, and see it change.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Change it with the CLI"><p>Run <code>hax site --help</code> and use it to add a page from the command line. Check the page shows up in <code>site.json</code> and in the browser.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Put it on GitHub and publish"><p>Commit the folder and push it to a new public repository. Then publish it, for example with GitHub Pages using the workflow the CLI sets up:</p><code-sample copy-clipboard-button="" type="bash"><template># in the folder you bound on browser.hax.cloud (the one with site.json in it)
cd ~/Documents/git/my-hax-site
hax serve
# edit a page in pages/, save, watch the browser update
git init
git add .
git commit -m "My first HAX site"
# make an empty repo on github.com, then
git remote add origin https://github.com/&lt;your-github-name&gt;/my-hax-site.git
git push -u origin main
# publish with GitHub Pages using the CLI's workflow
hax site setup:github-actions&lt;/your-github-name&gt;</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="5" title="Republish"><p>Change something, commit, push. Watch it publish again on its own. Share the address in your journal.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

Check yourself
--------------

<self-check title="Can you teach it?"><p slot="question">Explain to someone else the path a change takes from your keyboard to your published HAX site. Say it out loud, then open this to compare.</p><p>You edit a file in the folder (in the browser editor or VS Code). git records the change in a commit. You push it to GitHub. A workflow there builds and publishes the site, and the new version appears at your address.</p></self-check>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Link your published site and its repository.
*   What was harder: the browser, the CLI, or publishing?
*   What would you add to HAX after building this?