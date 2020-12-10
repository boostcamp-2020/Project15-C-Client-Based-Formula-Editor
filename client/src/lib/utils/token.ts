const USER_TOKEN = 'USER_TOKEN';

export const setToken = (userToken: string): void => {
  chrome.storage.sync.set({ USER_TOKEN: userToken }, function () {});
};

export const getToken = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get([USER_TOKEN], function (result) {
      resolve(result[USER_TOKEN]);
    });
  });
};
