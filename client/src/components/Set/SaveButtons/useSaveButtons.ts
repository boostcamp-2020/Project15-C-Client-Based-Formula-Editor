const useSaveButtons = () => {
  const onClickLoginHandler = () => {
    chrome.runtime.sendMessage({ message: 'login' }, (response) => {
      console.log(response);
    });
  };

  return {
    onClickLoginHandler,
  };
};

export default useSaveButtons;
