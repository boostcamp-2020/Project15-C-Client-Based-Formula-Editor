const USER_TOKEN = 'USER_TOKEN';

export const setToken = (userToken: string): void => {
  chrome.storage.sync.set({ USER_TOKEN: userToken }, function () {
    console.log('Value is set to ' + userToken);
  });
};

export const getToken = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get([USER_TOKEN], function (result) {
      resolve(result[USER_TOKEN]);
    });
  });
};

// TODO. export const removeToken = () => {chrome.storage.sync.remove(['usetToken'], function () {});};
