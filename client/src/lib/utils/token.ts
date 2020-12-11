const USER_TOKEN = 'USER_TOKEN';

export const setToken = (userToken: string): void => {
  if (chrome.storage) chrome.storage.sync.set({ USER_TOKEN: userToken }, function () {});
};

export const getToken = () => {
  return new Promise<string>((resolve, reject) => {
    if (chrome.storage) {
      chrome.storage.sync.get([USER_TOKEN], function (result) {
        resolve(result[USER_TOKEN]);
      });
    }
  });
};
