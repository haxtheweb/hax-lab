A website is a conversation. Your browser asks for something, a server somewhere answers with text, and the browser turns that text into what you see. Everything else in this course sits on top of that one idea.

<stop-note status="info" title="At a glance"><div slot="message"><ul><li><strong>Read and watch:</strong> about 15 minutes</li><li><strong>Do:</strong> about 1 hour</li><li><strong>You make:</strong> notes on a request you watched and a page you "hacked"</li><li><strong>You need:</strong> Chrome, Edge or Firefox</li><li><strong>Support level:</strong> full</li></ul></div></stop-note>

Read and watch
--------------

*   [How the web works (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works): clients, servers, DNS, packets. Ten minutes.
*   [An overview of HTTP (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview): skim the parts about requests, responses and status codes.
*   Watch a real bug get found in a real project. Notice how much of it happens in the browser:

Play: walk the request
----------------------

Walk to each part of a request. Each one tells you what it does. Touch them all.

Do: break a tiny web app
------------------------

This little app is a front end, a server and a database pretending to live in one box. Everything runs in your browser, so you can't hurt anything. Press Insert and watch the numbered boxes light up in order.

<ddd-steps-list><ddd-steps-list-item step="1" title="Insert a character"><p>Type any name, tick Main character, press Insert. Read the five status messages as they go by. Which box was lit when the SQL was built?</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="View source"><p>Open <em>View source</em> under the browser's table. The browser never saw the database, only that HTML. Front end versus back end, in one line.</p></ddd-steps-list-item><ddd-steps-list-item step="3" title="Break it on purpose"><p>Turn the prepared statement off. Insert <code>Robert'); DROP TABLE Characters; --</code> and then Reload page. Read the SQL the server built. Why did the quote change everything?</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Fix it"><p>Press Restore database, turn the prepared statement back on and insert the same text. Compare the SQL. That's the whole lesson of SQL injection: data and code must travel separately.</p></ddd-steps-list-item></ddd-steps-list>

Do: you are a 1337 hacker (of your own screen)
----------------------------------------------

<ddd-steps-list><ddd-steps-list-item step="1" title="Open any site"><p>Open <a href="https://www.psu.edu" rel="noopener noreferrer">psu.edu</a> (or any site) in a new tab, right click the page and pick <strong>Inspect</strong>.</p></ddd-steps-list-item><ddd-steps-list-item step="2" title="Find the Console"><p>Click the <strong>Console</strong> tab. Paste one line at a time and press Enter:</p><code-sample copy-clipboard-button="" type="javascript"><template>// paste one line at a time into the Console tab
document.querySelector('h1').textContent = 'I hacked this (only on my screen)';
document.querySelector('img').src = 'https://github.com/haxtheweb.png';
document.body.style.filter = 'invert(1)';</template></code-sample></ddd-steps-list-item><ddd-steps-list-item step="3" title="Watch a real request"><p>Open the <strong>Network</strong> tab and reload. Click the first row. Find the method, the status code and the response. Compare it with the Network box in the app above.</p></ddd-steps-list-item><ddd-steps-list-item step="4" title="Reload"><p>Your changes vanish. You only changed the copy of the page in your browser. That's the front end.</p></ddd-steps-list-item></ddd-steps-list>

Stuck? Ask your study buddy
---------------------------

Use AI to explain, not to do the work for you. Paste your own code or error with the prompt, read the answer, then close the chat and type the fix yourself. If you can't explain the fix out loud, you don't own it yet.

Check yourself
--------------

<multiple-choice question="You changed a heading in the Console, then reloaded. Why did it come back?" single-option="" randomize=""><input type="checkbox" value="The browser asked the server again and drew the original HTML" data-correct="true"><input type="checkbox" value="The server noticed and undid it"><input type="checkbox" value="The Console only works for one minute"><input type="checkbox" value="Reloading clears the database"></multiple-choice> <multiple-choice question="Which part turns example.edu into an address a computer can connect to?" single-option="" randomize=""><input type="checkbox" value="DNS" data-correct="true"><input type="checkbox" value="HTTP"><input type="checkbox" value="The database"><input type="checkbox" value="CSS"></multiple-choice>

You're done when
----------------

Journal it
----------

Add a heading for this page to your dev journal (the public Gist you made in Start here) and answer in Markdown:

*   In your own words, what happens between pressing Enter in the address bar and seeing a page?
*   What languages did you notice in the bug video? List every one you can.
*   What surprised you in the Network tab?