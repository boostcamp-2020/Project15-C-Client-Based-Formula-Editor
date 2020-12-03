import React, { useEffect } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}
const { naver } = window;

const app = document.createElement('div');
app.id = 'naverIdLogin';
document.body.appendChild(app);

function testComponent() {
  const Login = () => {
    Naver();
    UserProfile();
  };

  useEffect(Login, []);

  const Naver = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: '',
      callbackUrl: 'http://127.0.0.1:8080',
      isPopup: true,
      loginButton: { color: 'green', type: 1, height: 30 },
      callbackHandle: false,
    });
    naverLogin.init();
  };

  const UserProfile = () => {
    window.location.href.includes('access_token') && GetUser();
    function GetUser() {
      const location = window.location.href.split('=')[1];
      const token = location.split('&')[0];
      console.log('token: ', token);
      fetch(`http://127.0.0.1:3000/api/login`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem('access_token', res.token);
          console.log('nick: ', res.nickname, '/// image: ', res.image);
        })
        .catch((err) => console.log('err : ', err));
    }
  };
  return (
    <div className="login">
      <div>
        <div>로그인</div>
      </div>
      <button onClick={Login} id="naverIdLogin" />
    </div>
  );
}

export default testComponent;
