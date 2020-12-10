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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'login') {
    chrome.identity.launchWebAuthFlow(
      {
        url: `https://nid.naver.com/oauth2.0/authorize
						?response_type=code
						&client_id=${CLIENT_ID}
						&redirect_uri=${REDIRECT_URL}
						&state=CIMqAiwWmaZxB9Yg`,
        interactive: true,
      },

      function (redirect_url) {
        const code = redirect_url.split('code=')[SECOND_ELEM_INDEX].split('&')[FIRST_ELEM_INDEX];
        const body = { code: code };
        fetch('https://www.formulachef.tk/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            sendResponse(data);
          });
      }
    );

    return true;
  }
});
