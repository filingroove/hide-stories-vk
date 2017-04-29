var s = document.createElement('script');

s.src = chrome.extension.getURL('js/hide-stories-vk.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);