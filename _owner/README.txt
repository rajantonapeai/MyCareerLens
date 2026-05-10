MyCareerLens — Owner Stats Bookmarklet
========================================

This folder contains a "bookmarklet" — a small browser bookmark that, when
clicked, shows you live owner statistics about your MyCareerLens deployment:

  - Total visits
  - Total starts (people who reached the question wizard)
  - Total completions
  - Drop-off rates and completion percentages

The bookmarklet lives ONLY in your browser's bookmarks bar. The public
MyCareerLens site has no owner code — visitors cannot discover or activate
this. Only you, with this bookmarklet installed in your browser, can see
the stats.


HOW TO INSTALL (one-time setup, ~30 seconds)
============================================

OPTION 1 — Drag-and-drop (easiest, desktop browsers)
----------------------------------------------------
1. Open install_bookmarklet.html in your browser (double-click the file).
2. Make sure your bookmarks bar is visible:
     - Chrome / Edge: Ctrl+Shift+B
     - Firefox: Ctrl+Shift+B
3. Drag the green button "MyCareerLens Stats" from the page onto your
   bookmarks bar.
4. Done. You'll see "MyCareerLens Stats" as a bookmark.


OPTION 2 — Manual paste (for browsers that block drag-and-drop, or mobile)
--------------------------------------------------------------------------
1. Right-click your bookmarks bar -> "Add page..." (or similar).
2. For the Name, enter:  MyCareerLens Stats
3. For the URL, paste the entire content of bookmarklet_oneline.txt
   (it begins with "javascript:")
4. Save. Done.


OPTION 3 — Mobile (Chrome / Safari on Android / iOS)
----------------------------------------------------
Mobile browsers make bookmarklets clunky. Workarounds:
  - Chrome Android: bookmark any page first, then edit the bookmark and
    replace its URL with the content of bookmarklet_oneline.txt.
  - Safari iOS: same idea — bookmark any page, edit the URL.

Better on mobile: just open the public Abacus URLs directly:
  https://abacus.jasoncameron.dev/get/mycareerlens-prod/visits
  https://abacus.jasoncameron.dev/get/mycareerlens-prod/starts
  https://abacus.jasoncameron.dev/get/mycareerlens-prod/completions
Each shows a JSON like {"value": 96}. Three URLs, three numbers.


HOW TO USE
==========

1. Click the "MyCareerLens Stats" bookmark in your bookmarks bar.
2. A popup appears showing the current stats.
3. Click OK to dismiss.

Best to be on https://rajantonapeai.github.io/mycareerlens/ when you click
(or any other tab is fine, but if the popup says "(unavailable)" it may
be due to CORS — try again from the public site).


PRIVACY
=======

The bookmarklet:
  - Lives ONLY in your browser's bookmarks bar.
  - Is not stored on any server, GitHub, or Anthropic system.
  - Does not collect any data from anyone.
  - Reads three publicly-readable Abacus integer counters via the same
    public API that the MyCareerLens site itself uses.
  - Shows results only to you, in an alert popup, then disappears.

If you ever want to remove it: right-click the bookmark and Delete.


WHAT IF I CHANGE BROWSERS / DEVICES?
=====================================

The bookmarklet only exists in the browser where you installed it.
To use it elsewhere, repeat the installation on that other browser.

If you sync bookmarks across devices (Chrome Sync, Firefox Sync, etc.),
the bookmark will sync automatically.


WHAT IF THE NUMBERS LOOK WRONG?
================================

  - Numbers come live from the public Abacus counter service.
  - Visits increments at most once per browser per 24 hours.
  - Starts increments at most once per session (when user reaches first question).
  - Completions increments at most once per completed session.
  - All three include any test runs you did (yourself, family, AI tools, etc.)
    and any bot/crawler traffic.
  - Numbers reflect cumulative all-time totals; they only go up, never down.


SUPPORT FILES IN THIS FOLDER
============================

  - install_bookmarklet.html  — the drag-to-bookmarks-bar installer page
  - bookmarklet_oneline.txt   — the bookmarklet code as one line (for manual install)
  - bookmarklet_raw.js        — the readable JavaScript source (for reference)
  - README.txt                — this file


IMPORTANT — DO NOT COMMIT THIS FOLDER TO GITHUB
================================================

This folder is for your eyes only. The .gitignore in D:\CareerLens\
excludes it from any git push. Do not move these files into the public
deployment. The public site is, and should remain, free of owner-mode code.
