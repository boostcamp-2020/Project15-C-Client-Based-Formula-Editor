const USER_TOKEN = 'USER_TOKEN';

export const setToken = (userToken: string): void => {
  chrome.storage.sync.set({ USER_TOKEN: userToken }, function () {
    console.log('Value is set to ' + userToken);
  });
};

export const getToken = (): string | null => {
  let userToken = null;
  chrome.storage.sync.get(['userToken'], function (result) {
    userToken = result['userToken'];
  });

  return userToken;
};

// TODO. export const removeToken = () => {chrome.storage.sync.remove(['usetToken'], function () {});};
