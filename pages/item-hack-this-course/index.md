The site you're reading is a folder of files in a public GitHub repository. In this page you fork it, run it on your computer, change it with real HAX blocks, publish your copy, and send one improvement back. You'll learn the HAX blocks by using them on a site you already know inside out.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 10 minutes</li><li><strong>Do:</strong> about 1 to 2 hours</li><li><strong>You make:</strong> your own published copy of this course and a pull request back to it</li><li><strong>You need:</strong> git or GitHub Desktop, and the hax command</li><li><strong>Support level:</strong> medium: the goal and the main steps</li></ul></div></stop-note>

Read
----

*   [Fork a repo (GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo): what a fork is and how it stays linked to the original.
*   [Learn HAX](https://learn.hax.cloud): the block reference shows every block you can add, with examples.

Do
--

<ddd-steps-list><ddd-steps-list-item step="1" title="Fork it"><p>Open <a href="https://github.com/haxtheweb/hax-lab" rel="noopener noreferrer">github.com/haxtheweb/hax-lab</a> and press <strong>Fork</strong>. You now own a copy at <code>github.com/your-github-name/hax-lab</code>.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Clone it and run it"><p>Clone your fork with GitHub Desktop (<strong>File, Clone repository</strong>) or <code>git clone</code> into your code folder. Then, inside the folder:</p><code-sample copy-clipboard-button="" type="bash"><template># inside your clone of your fork
cd ~/Documents/git/hax-lab
hax serve</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="3" title="Make it yours with blocks"><p>Edit your copy in the HAX editor that <code>hax serve</code> opens. Add a page called <em>My journal</em> and move your Gist entries into it. Use at least four different blocks: a video, a code sample, a self check and a collapse. Look at how this course uses them, then do it your way.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Read what the editor wrote"><p>Open your new page's <code>index.html</code> in VS Code. Every block is a custom element with attributes, just like your card. Change one attribute by hand, save, and reload.</p></ddd-steps-list-item><ddd-steps-list-item step="5" title="Publish your copy"><p>Commit and push. Then turn on publishing with <code>hax site setup:github-actions</code>, push again, and in your fork's <strong>Settings, Pages</strong> pick GitHub Actions as the source. Your copy goes live at <code>your-github-name.github.io/hax-lab</code>.</p></ddd-steps-list-item><ddd-steps-list-item step="6" title="Send one fix back"><p>Find one thing in this course that confused you, a typo, a dead link, a step that skipped something. Fix it on a new branch in your fork and open a pull request to <code>haxtheweb/hax-lab</code>. Say what tripped you up and what you changed. Keep your journal page out of it: one fix per pull request.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="Why does your pull request leave out your journal page?" single-option="" randomize=""><input type="checkbox" value="A pull request should hold one change the original project wants" data-correct="true"><input type="checkbox" value="Journal pages can't be committed"><input type="checkbox" value="GitHub limits pull requests to one file"><input type="checkbox" value="The editor deletes journal pages"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Link your published copy and your pull request.
*   Which block was most useful, and which was hardest to get right?
*   What did the HTML of a block teach you about how HAX works?