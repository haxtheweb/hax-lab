/**
 * Copyright 2026 The Pennsylvania State University
 * @license Apache-2.0, see LICENSE for full text.
 */
import { svg } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";

/**
 * Puts the HAX network bar on top of the page with Lab as the current
 * property. clean-two has no place for the bar, so it lives on the body,
 * above the site, and survives theme changes.
 *
 * The bar's modules are imported here, not up front, so the rest of this
 * site's code still runs where they aren't published yet. Lab is added to
 * the network record before the bar loads, for bar versions that don't
 * list it yet; once hax-network.js ships Lab, that step does nothing.
 */
function addLab(net) {
  const HAX_NETWORK = net.HAX_NETWORK;
  const HAX_NETWORK_GLYPHS = net.HAX_NETWORK_GLYPHS;
  if (!HAX_NETWORK.properties.lab) {
    HAX_NETWORK.properties.lab = {
      url: "https://lab.hax.cloud",
      color: "creekTeal",
      on: "coalyGray",
      icon: "hax:hax2022",
      label: "Lab",
      purpose:
        "HAX Lab: where students and junior developers learn by shipping real HAX work.",
      relation:
        "Learn teaches HAX. Lab is where people go to build it with us: onboarding, the lab itself, and the people it launched.",
    };
    const at = HAX_NETWORK.order.indexOf("learn");
    HAX_NETWORK.order.splice(at + 1, 0, "lab");
  }
  // Lab: a flask, its bubbles rising one after another
  if (!HAX_NETWORK_GLYPHS.lab) {
    HAX_NETWORK_GLYPHS.lab = svg`<path class="m" d="M9.3 3h5.4M10.4 3v5.4L5.1 17.5a2 2 0 0 0 1.8 3h10.2a2 2 0 0 0 1.8-3L13.6 8.4V3"/><path class="a g-scan" d="M7.4 14.6h9.2"/><circle class="a f g-n1" cx="10.2" cy="17.6" r="1"/><circle class="a f g-n2" cx="13.9" cy="16.9" r=".9"/><circle class="a f g-n3" cx="12" cy="11.6" r=".8"/>`;
  }
}

function addBar() {
  if (globalThis.document.querySelector("hax-network-bar")) {
    return;
  }
  const bar = globalThis.document.createElement("hax-network-bar");
  bar.setAttribute("current", "lab");
  bar.style.display = "block";
  bar.t = {
    ...(bar.t || {}),
    lab: (bar.t && bar.t.lab) || "Lab",
    labAbout:
      (bar.t && bar.t.labAbout) ||
      "HAX Lab: where students and junior developers learn by shipping real HAX work.",
  };
  globalThis.document.body.insertBefore(bar, globalThis.document.body.firstChild);
  // clean-two scrolls its own container and the body doesn't scroll, but the
  // theme's scrollIntoView on page load still nudges the document and hides
  // the bar; put the document back at the top when that happens
  globalThis.addEventListener(
    "scroll",
    () => {
      if (
        globalThis.scrollY !== 0 &&
        globalThis.getComputedStyle(globalThis.document.body).overflow === "hidden"
      ) {
        globalThis.scrollTo(0, 0);
      }
    },
    { passive: true },
  );
}

import("@haxtheweb/hax-network-bar/lib/hax-network.js")
  .then((net) => {
    addLab(net);
    return import("@haxtheweb/hax-network-bar/hax-network-bar.js");
  })
  .then(() => {
    if (globalThis.document.body) {
      addBar();
    } else {
      globalThis.addEventListener("DOMContentLoaded", addBar);
    }
  })
  .catch(() => {
    // the bar isn't published where this site loads from yet; the site works without it
  });
