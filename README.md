# 부스토랑
  
<p align="center"><img src="https://user-images.githubusercontent.com/60457112/102003187-569c7a80-3d47-11eb-8412-3103461df502.gif" title="수식 셰프"/></p>


<p align="center">
  <img src="https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript"/>
  <img src="https://img.shields.io/badge/typescript-v4.0.5-blue?logo=typescript"/>
  <img src="https://img.shields.io/badge/node.js-v15.2.1-green?logo=node.js"/>
  <img src="https://img.shields.io/badge/mysql-v5.7.32-blue?logo=mysql"/>
</P>
<p align="center">
  <img src="https://img.shields.io/badge/react-17.0.1-1cf?logo=react"/>
  <img src="https://img.shields.io/badge/redux-4.0.5-purple?logo=redux"/>
  <img src="https://img.shields.io/badge/emotion-11.0.0-pink?logo=emotion"/>
  <img src="https://img.shields.io/badge/Webpack-v4.44.1-%238DD6F9?logo=webpack"/>
  <img src="https://img.shields.io/badge/Babel-v7.12.1-%23F9DC3E?logo=Babel"/>
</p>

### 📩 Download URL
- 🔗 크롬 확장프로그램 다운 (검수중)
- 🐳 [웨일 확장프로그램 다운](https://store.whale.naver.com/detail/fjifenfnigndpihijgnnaoadjodljkla)

### 📷 [프로젝트 실행 화면]()

### 📚 [Wiki 보러가기](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki)

## 📌 프로젝트 소개
> 수식 셰프는 **크롬 확장프로그램**을 통해 **어느 웹 사이트**에서나 수식을 **편집**하고, **적용**할 수 있는 서비스를 제공합니다. **일회성**이 강한 기존 수식 편집기의 단점을 보완하여 **지속가능한 수식 편집 서비스**를 제공하는 것을 목표로 프로젝트를 진행하였습니다.
### 📺 프로젝트 시연 영상
> 링크를 누르면 유튜브 페이지로 이동합니다

### ⚙️ 주요 기능
#### 1. 수식 편집 지원
- 적분, 삼각함수, 행렬 등의 **다양한 수식**을 지원
- **키보드** 및 **GUI 입력** 지원

**2. 계산기 및 수식 템플릿 지원**
- **공학용 계산기** 기능 지원
- 사용 빈도가 높은 수식들로 구성된 **수식 템플릿** 지원

**3. QR 코드 생성 및 클립보드 복사**
- 편집한 수식을 **QR 코드**로 생성 및 공유
- **웹 에디터**에 수식을 적용할 수 있는 **클립보드 복사** 기능 지원

**4. 이미지 저장 및 텍스트 저장**
- 편집한 수식을 **이미지 파일**로 저장
- 편집한 수식을 **텍스트 파일**로 저장

**5. 로그인 및 즐겨찾기**
- 네이버 **OAuth**를 이용한 **소셜** **로그인**
- 자주 사용하는 수식을 등록 후 **재사용**할 수 있는 **즐겨찾기** 기능 지원

**6. 사용자 편리성 증진**

- 확장프로그램 **최소화 모드** 지원
- '**@'** 입력 시, **수식 추천** 기능 지원

## 📌 기술 스택
![1](https://user-images.githubusercontent.com/60457112/102003331-35d52480-3d49-11eb-8b28-a69653ca5e7b.jpg)
### Front-End : React, Typescript, Redux, Emotion, Webpack & Babel, Mathquill Library  
### Back-End : Express, Typescript, Mysql2, TypeORM, NCloud

## 📌 기술 특장점
[수식셰프](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki/%EC%88%98%EC%8B%9D%EC%85%B0%ED%94%84-%EA%B8%B0%EC%88%A0-%ED%8A%B9%EC%9E%A5%EC%A0%90)

## 🗂 Directory

<details>
<summary>server</summary>
  <div markdown="1">
    
```
🗃 Project Folder  
📁server  
├── app.js
├── 📁src  
│   ├── 📁controllers 
│   ├── 📁entity
│   ├── 📁repository
│   ├── 📁router
│   │   ├── 📁user
│   │   └── 📁favorite
│   ├── 📁service
│   ├── 📁types
│   ├── 📁utils  
│   └──📁views
└── 📁__tests__  
```

  </div>
</details>

<details>
<summary>client</summary>
  <div markdown="1">
    
  ```
  📁client  
  ├── 📁public
  │   ├── 📁image    
  │   ├── background.js  
  │   ├── content.css
  │   ├── icon.png
  │   ├── manifest.json
  │   └── index.html
  └── 📁src
      ├── App
      ├── 📁components  
      │   ├── index.tsx   
      │   ├── style.ts
      │   └── use(폴더명).ts
      ├── 📁contexts
      │   ├── index.ts   
      │   ├── 📁latex
      │   └── 📁user
      ├── 📁hooks
      ├── 📁lib  
      │   ├── 📁apis
      │   ├── 📁constants
      │   └── 📁utils
      ├── 📁pages
      └── 📁__tests__  
  ```
  
  </div>
</details>

## 👩🏻‍💻 Members
| 🖥️ Full Stack | 🖥️ Full Stack | 🖥️ Full Stack | 🖥️ Full Stack |
| :----------: |  :--------:  |  :---------: |  :---------: |
|![image](https://user-images.githubusercontent.com/23556120/99749140-41a24200-2b21-11eb-992a-6221872b3e5e.png)|![image](https://user-images.githubusercontent.com/23556120/99749193-58489900-2b21-11eb-9271-145b292a6080.png)|![image](https://user-images.githubusercontent.com/23556120/99749230-6a2a3c00-2b21-11eb-9801-4e39472ee4a3.png)|![image](https://user-images.githubusercontent.com/23556120/99749255-77472b00-2b21-11eb-8c63-d66d5c73f002.png)|
| **[J032 김동현](https://github.com/dooking)** | **[J067 문건우](https://github.com/geonwoomun)** | **[J073 박기호](https://github.com/qkrrlgh519)** | **[J175 장우영](https://github.com/Woo-Dong93)** |
| **Hack Your Life 😎** | **코드는 이쁘게 ^_^**  | **:fire:Inner Peace:fire:** | **장그래** |


## ⭐ Show your support
Please ⭐️ this repository if this project helped you!
