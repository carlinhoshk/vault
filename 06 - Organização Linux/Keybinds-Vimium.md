
# Vimium Command Listing

## Navigating the Page
| Key               | Description                                      | Command                               |
|-------------------|--------------------------------------------------|---------------------------------------|
| `j`, `<c-e>`      | Scroll down                                      | `scrollDown`                          |
| `k`, `<c-y>`      | Scroll up                                        | `scrollUp`                            |
| `gg`              | Scroll to the top of the page                    | `scrollToTop`                         |
| `G`               | Scroll to the bottom of the page                 | `scrollToBottom`                      |
| `d`               | Scroll a half page down                          | `scrollPageDown`                      |
| `u`               | Scroll a half page up                            | `scrollPageUp`                        |
|                   | Scroll a full page down                          | `scrollFullPageDown`                  |
|                   | Scroll a full page up                            | `scrollFullPageUp`                    |
| `h`               | Scroll left                                      | `scrollLeft`                          |
| `l`               | Scroll right                                     | `scrollRight`                         |
| `zH`              | Scroll all the way to the left                   | `scrollToLeft`                        |
| `zL`              | Scroll all the way to the right                  | `scrollToRight`                       |
| `r`               | Reload the page                                  | `reload`                              |
| `R`               | Reload the page (hard)                           | `reload`                              |
| `yy`              | Copy the current URL to the clipboard            | `copyCurrentUrl`                      |
| `p`               | Open the clipboard's URL in the current tab      | `openCopiedUrlInCurrentTab`           |
| `P`               | Open the clipboard's URL in a new tab            | `openCopiedUrlInNewTab`               |
| `gu`              | Go up the URL hierarchy                          | `goUp`                                |
| `gU`              | Go to root of current URL hierarchy              | `goToRoot`                            |
| `i`               | Enter insert mode                                | `enterInsertMode`                     |
| `v`               | Enter visual mode                                | `enterVisualMode`                     |
| `V`               | Enter visual line mode                           | `enterVisualLineMode`                 |
|                   | Pass the next key to the page                    | `passNextKey`                         |
| `gi`              | Focus the first text input on the page           | `focusInput`                          |
| `f`               | Open a link in the current tab                   | `LinkHints.activateMode`              |
| `F`               | Open a link in a new tab                         | `LinkHints.activateModeToOpenInNewTab`|
|                   | Open a link in a new tab & switch to it          | `LinkHints.activateModeToOpenInNewForegroundTab` |
| `<a-f>`           | Open multiple links in a new tab                 | `LinkHints.activateModeWithQueue`     |
|                   | Download link URL                                | `LinkHints.activateModeToDownloadLink`|
|                   | Open a link in incognito window                  | `LinkHints.activateModeToOpenIncognito`|
| `yf`              | Copy a link URL to the clipboard                 | `LinkHints.activateModeToCopyLinkUrl` |
| `[[`              | Follow the link labeled previous or <            | `goPrevious`                          |
| `]]`              | Follow the link labeled next or >                | `goNext`                              |
| `gf`              | Select the next frame on the page                | `nextFrame`                           |
| `gF`              | Select the page's main/top frame                 | `mainFrame`                           |
| `m`               | Create a new mark                                | `Marks.activateCreateMode`            |
| `` ` ``           | Go to a mark                                     | `Marks.activateGotoMode`              |

---

## Using the Vomnibar
| Key   | Description                                      | Command                               |
|-------|--------------------------------------------------|---------------------------------------|
| `o`   | Open URL, bookmark, or history entry            | `Vomnibar.activate`                   |
| `O`   | Open URL, bookmark, or history entry in a new tab| `Vomnibar.activateInNewTab`           |
| `b`   | Open a bookmark                                  | `Vomnibar.activateBookmarks`          |
| `B`   | Open a bookmark in a new tab                     | `Vomnibar.activateBookmarksInNewTab`  |
| `T`   | Search through your open tabs                    | `Vomnibar.activateTabSelection`       |
| `ge`  | Edit the current URL                             | `Vomnibar.activateEditUrl`            |
| `gE`  | Edit the current URL and open in a new tab       | `Vomnibar.activateEditUrlInNewTab`    |

---

## Using Find
| Key   | Description                                      | Command                               |
|-------|--------------------------------------------------|---------------------------------------|
| `/`   | Enter find mode                                  | `enterFindMode`                       |
| `n`   | Cycle forward to the next find match             | `performFind`                         |
| `N`   | Cycle backward to the previous find match        | `performBackwardsFind`                |
| `*`   | Find the selected text                           | `findSelected`                        |
| `#`   | Find the selected text, searching backwards      | `findSelectedBackwards`               |

---

## Navigating History
| Key   | Description                                      | Command                               |
|-------|--------------------------------------------------|---------------------------------------|
| `H`   | Go back in history                               | `goBack`                              |
| `L`   | Go forward in history                            | `goForward`                           |

---

## Manipulating Tabs
| Key         | Description                                      | Command                               |
|-------------|--------------------------------------------------|---------------------------------------|
| `t`         | Create new tab                                   | `createTab`                           |
| `J`, `gT`   | Go one tab left                                  | `previousTab`                         |
| `K`, `gt`   | Go one tab right                                 | `nextTab`                             |
| `^`         | Go to previously-visited tab                     | `visitPreviousTab`                    |
| `g0`        | Go to the first tab                              | `firstTab`                            |
| `g$`        | Go to the last tab                               | `lastTab`                             |
| `yt`        | Duplicate current tab                            | `duplicateTab`                        |
| `<a-p>`     | Pin or unpin current tab                         | `togglePinTab`                        |
| `<a-m>`     | Mute or unmute current tab                       | `toggleMuteTab`                       |
| `x`         | Close current tab                                | `removeTab`                           |
| `X`         | Restore closed tab                               | `restoreTab`                          |
| `W`         | Move tab to new window                           | `moveTabToNewWindow`                  |
|             | Close tabs on the left                           | `closeTabsOnLeft`                     |
|             | Close tabs on the right                          | `closeTabsOnRight`                    |
|             | Close all other tabs                             | `closeOtherTabs`                      |
| `<<`        | Move tab to the left                             | `moveTabLeft`                         |
| `>>`        | Move tab to the right                            | `moveTabRight`                        |
|             | Set zoom                                         | `setZoom`                             |
| `zi`        | Zoom in                                          | `zoomIn`                              |
| `zo`        | Zoom out                                         | `zoomOut`                             |
| `z0`        | Reset zoom                                       | `zoomReset`                           |

---

## Miscellaneous
| Key  | Description      | Command            |
| ---- | ---------------- | ------------------ |
| `?`  | Show help        | `showHelp`         |
| `gs` | View page source | `toggleViewSource` |