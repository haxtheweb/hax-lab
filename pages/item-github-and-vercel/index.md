Your card only exists on your computer. In this step it goes to GitHub, where your history and your portfolio live, and Vercel watches that repository and publishes a fresh build every time you push. That loop is called CI/CD: continuous integration and continuous delivery. It's how almost every professional team ships.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 20 minutes</li><li><strong>Do:</strong> about 1 hour</li><li><strong>You make:</strong> a my-card repository on GitHub and a live my-card address on vercel.app</li><li><strong>You need:</strong> GitHub Desktop or git, and your Vercel account</li><li><strong>Support level:</strong> full, two ways</li></ul></div></stop-note>

Read and watch
--------------

*   [Hello World (GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world): repositories, commits and branches in ten minutes.
*   [Deploying Git repositories (Vercel)](https://vercel.com/docs/git): what happens when you push.
*   Watch a problem go from idea to shipped, end to end:

Do: get it on GitHub
--------------------

<a11y-tabs aria-label="Push your code to GitHub"><a11y-tab label="GitHub Desktop" icon="icons:cloud-upload"><ddd-steps-list><ddd-steps-list-item step="1" title="Add your folder"><p>Open GitHub Desktop. Windows: <strong>File, Add local repository</strong>. macOS: <strong>File, Add Local Repository</strong>. Pick your <code>my-card</code> folder. hax already made it a git repository.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Commit"><p>The left side lists every changed file. Type a summary like <em>Port my card into a web component</em> and press <strong>Commit to main</strong>.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Publish"><p>Press <strong>Publish repository</strong>. Untick <em>Keep this code private</em> so others can see and learn from it. Open it on github.com to check.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Every time after"><p>Change code, come back to GitHub Desktop, write a summary, Commit, then <strong>Push origin</strong>.</p></ddd-steps-list-item></ddd-steps-list></a11y-tab><a11y-tab label="Command line" icon="icons:code"><ddd-steps-list><ddd-steps-list-item step="1" title="Make an empty repository"><p>On github.com press <strong>New repository</strong>, name it <code>my-card</code>, and don't add a README (your folder already has one).</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Commit and push"><code-sample copy-clipboard-button="" type="bash"><template># inside your my-card folder
git status
git add .
git commit -m "Port my card into a web component"
# create an EMPTY repo named my-card on github.com first, then:
git remote add origin https://github.com/&lt;your-github-name&gt;/my-card.git
git branch -M main
git push -u origin main&lt;/your-github-name&gt;</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="3" title="Every time after"><p><code>git add .</code>, <code>git commit -m "what changed"</code>, <code>git push</code>.</p></ddd-steps-list-item></ddd-steps-list></a11y-tab></a11y-tabs>

Do: connect Vercel
------------------

<ddd-steps-list><ddd-steps-list-item step="1" title="Import the repository"><p>On <a href="https://vercel.com/new" rel="noopener noreferrer">vercel.com/new</a>, pick your <code>my-card</code> repository and press Import.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Check the settings"><p>Build command <code>npm run build</code>, output directory <code>public</code>. Vercel usually guesses; fix them if it doesn't. Press Deploy.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Watch it build"><p>Read the build log as it runs. When it's done you get a <code>something.vercel.app</code> address. Open it on your phone.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Close the loop"><p>Change your card, commit, push. Watch Vercel build again on its own. Your card now updates itself.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

<multiple-choice question="You pushed a change, but your vercel.app site looks the same. What do you check first?" single-option="" randomize=""><input type="checkbox" value="The latest deployment's build log in Vercel" data-correct="true"><input type="checkbox" value="Delete the repository"><input type="checkbox" value="Clear your GitHub profile"><input type="checkbox" value="Reinstall Node.js"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   Paste your GitHub repository link and your vercel.app link.
*   What did the build log say? Name one step you recognized.
*   Command line or GitHub Desktop: which did you use, and why?