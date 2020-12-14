/* eslint-disable no-undef */
const FIRST_ELEM_INDEX = 0;
const SECOND_ELEM_INDEX = 1;
const CLIENT_ID = 'afZlrdeElIEyteCB_f0Z';
const REDIRECT_URL = 'https://eibfmpikelkeedfiimelafoedmaglcna.chromiumapp.org';

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: 'click' });
  });
});
