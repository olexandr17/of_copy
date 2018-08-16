# OFCopy

**OFCopy** is a WebExt-based Firefox add-on that allows users to copy the title and the URL of a tab from the context menu.

The add-on is officially available here: https://addons.mozilla.org/en-US/firefox/addon/ofcopy/

## Known bugs

### Context menu item positioning

This is a limitation of the API, since add-ons can't choose where menu items are positioned. Hopefully this will be changed in future versions of the WebExt API.

## Sources

This add-on was built based on the following sources:

- **Clipboard code implementation:**
-- `https://github.com/mdn/webextensions-examples/blob/master/context-menu-copy-link-with-types/background.js`
-- `https://github.com/mdn/webextensions-examples/blob/master/context-menu-copy-link-with-types/clipboard-helper.js`
-- `https://gitlab.com/mjanetmars/copy-tab-url`
-- `https://github.com/chitsaou/copy-as-markdown`