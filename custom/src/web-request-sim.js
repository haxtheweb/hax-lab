/**
 * Copyright 2026 The Pennsylvania State University
 * @license Apache-2.0, see LICENSE for full text.
 */
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { html, css } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import "@haxtheweb/simple-fields/lib/simple-fields-field.js";

/**
 * `web-request-sim`
 * A tiny "database web app" that runs entirely in the page: a form posts a
 * request, a pretend server builds SQL, a pretend database stores the row and
 * the server sends HTML back. Each hop lights up so learners see which layer
 * is doing the work. Turning off the prepared statement shows why input
 * must never be glued into SQL.
 * @element web-request-sim
 */
const SEED = [
  { name: "Pat Pixel", main: true },
  { name: "Dee Bugger", main: true },
  { name: "Lorem Ipsum", main: false },
  { name: "Null Pointer", main: false },
];

const LAYERS = ["browser", "network", "server", "database"];

export class WebRequestSim extends DDD {
  static get tag() {
    return "web-request-sim";
  }

  constructor() {
    super();
    this.title = "Cast list app";
    this.prepared = true;
    this.rows = SEED.map((r) => ({ ...r }));
    this.tableExists = true;
    this.log = [];
    this.sql = "SELECT Name, Main FROM Characters";
    this.active = "";
    this.status = "";
    this.serverError = "";
    this.name = "";
    this.main = false;
    this.busy = false;
    this.page = this._buildPage();
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      prepared: { type: Boolean, reflect: true },
      rows: { type: Array, state: true },
      tableExists: { type: Boolean, state: true },
      log: { type: Array, state: true },
      sql: { type: String, state: true },
      active: { type: String, reflect: true },
      status: { type: String, state: true },
      serverError: { type: String, state: true },
      name: { type: String, state: true },
      main: { type: Boolean, state: true },
      busy: { type: Boolean, state: true },
      page: { type: Object, state: true },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
          margin: var(--ddd-spacing-6) 0;
        }
        .frame {
          border: var(--ddd-border-sm);
          border-color: light-dark(var(--ddd-theme-default-limestoneGray), var(--ddd-theme-default-slateGray));
          border-radius: var(--ddd-radius-md);
          background-color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-coalyGray));
          padding: var(--ddd-spacing-4);
        }
        h3 {
          margin: 0 0 var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
        }
        .intro {
          margin: 0 0 var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-4xs);
          line-height: var(--ddd-lh-150);
        }
        .layers {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: var(--ddd-spacing-4);
        }
        section {
          border: var(--ddd-border-sm);
          border-color: light-dark(var(--ddd-theme-default-limestoneGray), var(--ddd-theme-default-slateGray));
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-3);
          min-width: 0;
          transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
        }
        section.on {
          border-color: light-dark(var(--ddd-theme-default-beaverBlue), var(--ddd-theme-default-skyBlue));
          box-shadow: 0 0 0 var(--ddd-spacing-1) light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-nittanyNavy));
        }
        section h4 {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          margin: 0 0 var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-4xs);
          font-weight: var(--ddd-font-weight-bold);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: var(--ddd-icon-xs);
          height: var(--ddd-icon-xs);
          border-radius: 50%;
          border: var(--ddd-border-sm);
          border-color: currentColor;
          font-size: var(--ddd-font-size-4xs);
        }
        section.on .num {
          background-color: light-dark(var(--ddd-theme-default-beaverBlue), var(--ddd-theme-default-skyBlue));
          border-color: light-dark(var(--ddd-theme-default-beaverBlue), var(--ddd-theme-default-skyBlue));
          color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-coalyGray));
        }
        .address {
          display: block;
          font-family: var(--ddd-font-secondary, monospace);
          font-size: var(--ddd-font-size-4xs);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          border-radius: var(--ddd-radius-sm);
          background-color: light-dark(var(--ddd-theme-default-limestoneMaxLight), var(--ddd-theme-default-potentialMidnight));
          margin-bottom: var(--ddd-spacing-3);
          overflow-wrap: anywhere;
        }
        form {
          display: grid;
          gap: var(--ddd-spacing-2);
          margin-bottom: var(--ddd-spacing-3);
        }
        simple-fields-field {
          --simple-fields-color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
          --simple-fields-background-color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-coalyGray));
          --simple-fields-accent-color: light-dark(var(--ddd-theme-default-beaverBlue), var(--ddd-theme-default-skyBlue));
          --simple-fields-border-color: light-dark(var(--ddd-theme-default-slateGray), var(--ddd-theme-default-limestoneGray));
          --simple-fields-font-family: var(--ddd-font-primary);
          --simple-fields-border-color-light: light-dark(var(--ddd-theme-default-slateGray), var(--ddd-theme-default-limestoneGray));
          --simple-fields-input-background-color: transparent;
          --simple-fields-input-max-width: 100%;
          --simple-fields-border-radius: var(--ddd-radius-sm);
        }
        simple-fields-field::part(label) {
          font-size: var(--ddd-font-size-4xs);
          font-weight: var(--ddd-font-weight-bold);
        }
        simple-fields-field[type="text"]::part(field-main-inner) {
          border: var(--ddd-border-sm);
          border-color: light-dark(var(--ddd-theme-default-slateGray), var(--ddd-theme-default-limestoneGray));
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-1);
          min-height: var(--ddd-spacing-8);
          box-sizing: border-box;
          max-width: 100%;
          margin-inline-end: var(--ddd-spacing-1);
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-2);
        }
        button {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-4xs);
          font-weight: var(--ddd-font-weight-bold);
          min-height: var(--ddd-spacing-10);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-sm);
          border: var(--ddd-border-sm);
          border-color: light-dark(var(--ddd-theme-default-beaverBlue), var(--ddd-theme-default-skyBlue));
          background-color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-coalyGray));
          color: light-dark(var(--ddd-theme-default-beaverBlue), var(--ddd-theme-default-skyBlue));
          cursor: pointer;
        }
        button.primary {
          background-color: light-dark(var(--ddd-theme-default-beaverBlue), var(--ddd-theme-default-skyBlue));
          color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-coalyGray));
        }
        button:hover:not([disabled]),
        button:focus-visible {
          outline: var(--ddd-border-md);
          outline-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
          outline-offset: 2px;
        }
        button:active:not([disabled]) {
          transform: translateY(1px);
        }
        button[disabled] {
          cursor: not-allowed;
          opacity: 0.6;
        }
        button[aria-pressed="true"] {
          border-width: 3px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: var(--ddd-font-size-4xs);
        }
        th,
        td {
          text-align: left;
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          border-bottom: var(--ddd-border-xs);
          border-color: light-dark(var(--ddd-theme-default-limestoneGray), var(--ddd-theme-default-slateGray));
          overflow-wrap: anywhere;
        }
        .error {
          padding: var(--ddd-spacing-2);
          border-radius: var(--ddd-radius-sm);
          border: var(--ddd-border-sm);
          border-color: light-dark(var(--ddd-theme-default-original87Pink), var(--ddd-theme-default-roarLight));
          background-color: light-dark(var(--ddd-theme-default-roarMaxlight), var(--ddd-theme-default-potentialMidnight));
          font-size: var(--ddd-font-size-4xs);
          margin-bottom: var(--ddd-spacing-2);
          overflow-wrap: anywhere;
        }
        ol.log {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: var(--ddd-spacing-2);
        }
        ol.log li,
        pre {
          font-family: var(--ddd-font-secondary, monospace);
          font-size: var(--ddd-font-size-4xs);
          line-height: var(--ddd-lh-140);
          padding: var(--ddd-spacing-2);
          border-radius: var(--ddd-radius-sm);
          background-color: light-dark(var(--ddd-theme-default-limestoneMaxLight), var(--ddd-theme-default-potentialMidnight));
          overflow-wrap: anywhere;
          white-space: pre-wrap;
          margin: 0;
        }
        .dir {
          font-weight: var(--ddd-font-weight-bold);
        }
        .empty {
          font-size: var(--ddd-font-size-4xs);
          font-style: italic;
        }
        details {
          margin-top: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-4xs);
        }
        details,
        details[open] {
          border: none;
          padding: 0;
          background-color: transparent;
        }
        details summary {
          cursor: pointer;
          min-height: var(--ddd-spacing-6);
          display: list-item;
          padding: var(--ddd-spacing-1) 0;
          margin: 0;
          font-size: var(--ddd-font-size-4xs);
          font-weight: var(--ddd-font-weight-bold);
          line-height: var(--ddd-lh-140);
          background-color: transparent;
          color: light-dark(var(--ddd-theme-default-beaverBlue), var(--ddd-theme-default-skyBlue));
        }
        summary:focus-visible {
          outline: var(--ddd-border-md);
          outline-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        }
        .safety {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--ddd-spacing-3);
          margin-top: var(--ddd-spacing-4);
          padding-top: var(--ddd-spacing-4);
          border-top: var(--ddd-border-sm);
          border-color: light-dark(var(--ddd-theme-default-limestoneGray), var(--ddd-theme-default-slateGray));
        }
        .safety p {
          flex: 1 1 240px;
          margin: 0;
          font-size: var(--ddd-font-size-4xs);
          line-height: var(--ddd-lh-150);
        }
        .live {
          margin: var(--ddd-spacing-3) 0 0;
          font-size: var(--ddd-font-size-4xs);
          font-weight: var(--ddd-font-weight-bold);
          min-height: 1.5em;
        }
        @media (prefers-reduced-motion: reduce) {
          section {
            transition: none;
          }
        }
      `,
    ];
  }

  // the HTML the pretend server sends back for the current table
  _buildPage() {
    if (!this.tableExists) {
      return { error: "Table 'Characters' doesn't exist", rows: [] };
    }
    if (this.serverError) {
      return { error: this.serverError, rows: [] };
    }
    return { error: "", rows: this.rows.map((r) => ({ ...r })) };
  }

  _source() {
    if (this.page.error) {
      return `<p class="error">Error: ${this.page.error}</p>`;
    }
    return (
      "<table>\n  <tr><th>Character</th><th>Main?</th></tr>\n" +
      this.page.rows.map((r) => `  <tr><td>${r.name}</td><td>${r.main ? "yes" : "no"}</td></tr>`).join("\n") +
      "\n</table>"
    );
  }

  _quote(value) {
    return "'" + value + "'";
  }

  // run the INSERT the way a careless (or careful) server would
  _runInsert(name, main) {
    this.serverError = "";
    if (!this.tableExists) {
      this.sql = `INSERT INTO Characters (Name, Main) VALUES (${this._quote(name)}, ${main ? 1 : 0})`;
      return;
    }
    if (this.prepared) {
      this.sql = `INSERT INTO Characters (Name, Main) VALUES (?, ?)\n-- values sent separately: [${JSON.stringify(name)}, ${main ? 1 : 0}]`;
      this.rows = [...this.rows, { name, main }];
      return;
    }
    const built = `INSERT INTO Characters (Name, Main) VALUES (${this._quote(name)}, ${main ? 1 : 0})`;
    this.sql = built;
    if (name.indexOf("'") === -1) {
      this.rows = [...this.rows, { name, main }];
      return;
    }
    // the quote ended the string early, so the rest is read as SQL
    const after = name.slice(name.indexOf("'") + 1);
    const statements = after.split(";").slice(1).map((s) => s.trim().toUpperCase());
    const value = name.slice(0, name.indexOf("'"));
    if (/^\)\s*;/.test(after) && statements.length) {
      this.rows = [...this.rows, { name: value, main: false }];
      statements.forEach((s) => {
        if (s.indexOf("DROP TABLE CHARACTERS") === 0) {
          this.tableExists = false;
          this.rows = [];
        } else if (s.indexOf("DELETE FROM CHARACTERS") === 0) {
          this.rows = [];
        }
      });
      return;
    }
    this.serverError = `You have an error in your SQL syntax near '${after.slice(0, 40)}'`;
  }

  _wait(ms) {
    const reduce = globalThis.matchMedia && globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return new Promise((resolve) => setTimeout(resolve, reduce ? 0 : ms));
  }

  async _step(layer, text) {
    this.active = layer;
    this.status = text;
    await this._wait(900);
  }

  _addLog(dir, text) {
    this.log = [{ dir, text }, ...this.log].slice(0, 6);
  }

  async _send(kind) {
    if (this.busy) {
      return;
    }
    const name = (this.name || "").trim();
    if (kind === "insert" && !name) {
      this.status = "Type a name first. The server can't insert nothing.";
      return;
    }
    this.busy = true;
    const body = kind === "insert" ? `name=${encodeURIComponent(name)}&main=${this.main ? 1 : 0}` : "";
    await this._step("browser", kind === "insert" ? "1 of 5: the browser packs the form into a request." : "1 of 5: the browser asks for the page again.");
    this._addLog("→", kind === "insert" ? `POST /db.php\n${body}` : "GET /db.php");
    await this._step("network", "2 of 5: the request travels across the network to the server.");
    if (kind === "insert") {
      this._runInsert(name, this.main);
    } else {
      this.serverError = "";
      this.sql = "SELECT Name, Main FROM Characters";
    }
    await this._step("server", "3 of 5: the server runs PHP, which builds a SQL query.");
    await this._step("database", this.tableExists ? "4 of 5: the database runs the query and hands back rows." : "4 of 5: the database can't find the table.");
    this.page = this._buildPage();
    const code = this.page.error ? (this.tableExists ? "500 Internal Server Error" : "500 Internal Server Error (no table)") : "200 OK";
    this._addLog("←", `${code}\ncontent-type: text/html`);
    await this._step("network", "5 of 5: HTML travels back. The browser draws it.");
    this.active = "";
    this.status = this.page.error ? "The page came back with an error. Read it: errors are clues." : "Done. Everything you see in the browser is HTML the server sent.";
    if (kind === "insert") {
      this.name = "";
      this.main = false;
    }
    this.busy = false;
  }

  _restore() {
    this.rows = SEED.map((r) => ({ ...r }));
    this.tableExists = true;
    this.serverError = "";
    this.sql = "SELECT Name, Main FROM Characters";
    this.page = this._buildPage();
    this.log = [];
    this.status = "The database was restored from last night's backup.";
  }

  _togglePrepared() {
    this.prepared = !this.prepared;
    this.status = this.prepared ? "Prepared statements on: input travels separately from the SQL." : "Prepared statements off: input is glued into the SQL text.";
  }

  _submit(e) {
    e.preventDefault();
    this._send("insert");
  }

  render() {
    const on = (l) => (this.active === l ? "on" : "");
    return html`
      <div class="frame">
        <h3>${this.title}</h3>
        <p class="intro">Add a character and watch the request travel. The numbered boxes light up as each layer does its job.</p>
        <div class="layers">
          <section class="${on("browser")}" aria-label="Browser">
            <h4><span class="num" aria-hidden="true">1</span> Browser (front end)</h4>
            <span class="address">https://example.edu/db.php</span>
            <form @submit="${this._submit}">
              <simple-fields-field
                type="text"
                label="Name"
                .value="${this.name}"
                @value-changed="${(e) => { this.name = e.detail.value; }}"
              ></simple-fields-field>
              <simple-fields-field
                type="checkbox"
                label="Main character?"
                .value="${this.main}"
                @value-changed="${(e) => { this.main = !!e.detail.value; }}"
              ></simple-fields-field>
              <div class="row">
                <button class="primary" type="submit" ?disabled="${this.busy}">Insert</button>
                <button type="button" ?disabled="${this.busy}" @click="${() => this._send("reload")}">Reload page</button>
              </div>
            </form>
            ${this.page.error ? html`<p class="error">Error: ${this.page.error}</p>` : html`
              <table>
                <caption class="empty">What the browser shows</caption>
                <thead><tr><th scope="col">Character</th><th scope="col">Main?</th></tr></thead>
                <tbody>
                  ${this.page.rows.length ? this.page.rows.map((r) => html`<tr><td>${r.name}</td><td>${r.main ? "yes" : "no"}</td></tr>`) : html`<tr><td colspan="2" class="empty">No rows came back</td></tr>`}
                </tbody>
              </table>`}
            <details>
              <summary>View source (what the server actually sent)</summary>
              <pre>${this._source()}</pre>
            </details>
          </section>
          <section class="${on("network")}" aria-label="Network">
            <h4><span class="num" aria-hidden="true">2</span> Network (HTTP)</h4>
            ${this.log.length ? html`<ol class="log">${this.log.map((l) => html`<li><span class="dir">${l.dir === "→" ? "Request →" : "← Response"}</span>\n${l.text}</li>`)}</ol>` : html`<p class="empty">Nothing sent yet. Press Insert.</p>`}
          </section>
          <section class="${on("server")}" aria-label="Server">
            <h4><span class="num" aria-hidden="true">3</span> Server (back end)</h4>
            <pre>${this.sql}</pre>
          </section>
          <section class="${on("database")}" aria-label="Database">
            <h4><span class="num" aria-hidden="true">4</span> Database</h4>
            ${this.tableExists ? html`
              <table>
                <caption class="empty">Characters table</caption>
                <thead><tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Main</th></tr></thead>
                <tbody>
                  ${this.rows.length ? this.rows.map((r, i) => html`<tr><td>${i + 1}</td><td>${r.name}</td><td>${r.main ? 1 : 0}</td></tr>`) : html`<tr><td colspan="3" class="empty">Empty table</td></tr>`}
                </tbody>
              </table>` : html`<p class="error">The Characters table is gone.</p>`}
          </section>
        </div>
        <div class="safety">
          <button type="button" aria-pressed="${this.prepared ? "true" : "false"}" ?disabled="${this.busy}" @click="${this._togglePrepared}">Prepared statement: ${this.prepared ? "on" : "off"}</button>
          <button type="button" ?disabled="${this.busy}" @click="${this._restore}">Restore database</button>
          <p>Turn prepared statements off, then try inserting <code>Robert'); DROP TABLE Characters; --</code> and press Reload page.</p>
        </div>
        <p class="live" role="status" aria-live="polite">${this.status}</p>
      </div>
    `;
  }

  static get haxProperties() {
    return {
      canScale: false,
      canEditSource: true,
      gizmo: {
        title: "Web request simulator",
        description: "A tiny database web app that shows a request travel from browser to server to database and back.",
        icon: "icons:swap-horiz",
        color: "blue",
        tags: ["Instructional", "interactive", "simulation"],
        handles: [],
        meta: { author: "haxtheweb" },
      },
      settings: {
        configure: [
          { property: "title", title: "Title", inputMethod: "textfield" },
          { property: "prepared", title: "Start with prepared statements on", inputMethod: "boolean" },
        ],
        advanced: [],
      },
      demoSchema: [{ tag: "web-request-sim", properties: { title: "Cast list app", prepared: true }, content: "" }],
    };
  }
}

globalThis.customElements.define(WebRequestSim.tag, WebRequestSim);
