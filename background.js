/* This Source Code Form is subject to the terms of the Mozilla Public
 - License, v. 2.0. If a copy of the MPL was not distributed with this
 - file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* based on https://github.com/mdn/webextensions-examples/blob/master/context-menu-copy-link-with-types/background.js
     and on https://github.com/mdn/webextensions-examples/blob/master/context-menu-copy-link-with-types/clipboard-helper.js
     and on https://gitlab.com/mjanetmars/copy-tab-url
     and on https://github.com/chitsaou/copy-as-markdown */

/* create context menu button */

browser.contextMenus.create({
    id: "of-copy-tab",
    title: "Copy [Title - URL]",
    type: "normal",
    contexts: ["tab"]
});

browser.contextMenus.create({
    id: "of-copy-page",
    title: "Copy [Title - URL]",
    type: "normal",
    contexts: ["page"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "of-copy-tab" || info.menuItemId === "of-copy-page") {
        function oncopy(event) {
            event.preventDefault();
            event.clipboardData.setData("text/plain", tab.title + " - " + tab.url);
        }

        document.addEventListener("copy", oncopy, true);
        document.execCommand("copy");
    }
});
