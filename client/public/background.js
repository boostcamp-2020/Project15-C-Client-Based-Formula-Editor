const FIRST_ELEM_INDEX = 0;
const SECOND_ELEM_INDEX = 1;

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: 'click' });
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'login') {
    //TODO. LocalStorage에 token이 저장되었는지 아닌지를 분기하는 로직
    chrome.identity.launchWebAuthFlow(
      {
        url: `https://nid.naver.com/oauth2.0/authorize
						?response_type=code
						&client_id=p79sVFnmiJZHj7bUkgT0
						&redirect_uri=https://hmlhleahplpekcfmioopobbdiidjophb.chromiumapp.org
						&state=CIMqAiwWmaZxB9Yg`,
        interactive: true,
      },
      function (redirect_url) {
        const code = redirect_url.split('code=')[SECOND_ELEM_INDEX].split('&')[FIRST_ELEM_INDEX];
        const body = { code: code };
        fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(JSON.stringify(data)));
        sendResponse('success');
      }
    );

    return true;
  }
});
