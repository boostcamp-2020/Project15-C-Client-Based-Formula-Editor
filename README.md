# 부스토랑

> [간단한 다운로드를 통해 수식 셰프를 경험해보세요!]()  
  
<p align="center"><img src="https://user-images.githubusercontent.com/60457112/102003187-569c7a80-3d47-11eb-8412-3103461df502.gif" title="수식 셰프"/></p>


<p align="center">
  <img src="https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript"/>
  <img src="https://img.shields.io/badge/typescript-v4.0.5-blue?logo=typescript"/>
  <img src="https://img.shields.io/badge/node.js-v15.2.1-green?logo=node.js"/>
  <img src="https://img.shields.io/badge/mysql-v5.7.32-blue?logo=mysql"/>
  <img src="https://img.shields.io/badge/react-17.0.1-1cf?logo=react"/>
  <img src="https://img.shields.io/badge/redux-4.0.5-purple?logo=redux"/>
  <img src="https://img.shields.io/badge/emotion-11.0.0-pink?logo=emotion"/>
  <img src="https://img.shields.io/badge/Webpack-v4.44.1-%238DD6F9?logo=webpack"/>
  <img src="https://img.shields.io/badge/Babel-v7.12.1-%23F9DC3E?logo=Babel"/>
</p>

### 📩 [Download URL]()

### 📷 [프로젝트 실행 화면]()

### 📚 [Wiki 보러가기](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki)

## 📌 프로젝트 소개
> 수식 셰프는 **크롬 확장프로그램**을 통해 **어느 웹 사이트**에서나 수식을 **편집**하고, **적용**할 수 있는 서비스를 제공합니다. **일회성**이 강한 기존 수식 편집기의 단점을 보완하여 **지속가능한 수식 편집 서비스**를 제공하는 것을 목표로 프로젝트를 진행하였습니다.
### 📺 프로젝트 시연 영상
> 링크를 누르면 유튜브 페이지로 이동합니다
<p align="center"><img src="https://user-images.githubusercontent.com/60457112/99751593-dd35b180-2b25-11eb-886d-65bb2e2ecaf4.png"/></p>

### ⚙️ 주요 기능
**수식 편집 지원**
- 적분, 삼각함수, 행렬 등의 **다양한 수식**을 지원
- **키보드** 및 **GUI 입력** 지원

**계산기 및 수식 템플릿 지원**
- **공학용 계산기** 기능 지원
- 사용 빈도가 높은 수식들로 구성된 **수식 템플릿** 지원

**QR 코드 생성 및 클립보드 복사**
- 편집한 수식을 **QR 코드**로 생성 및 공유
- **웹 에디터**에 수식을 적용할 수 있는 **클립보드 복사** 기능 지원

**이미지 저장 및 텍스트 저장**
- 편집한 수식을 **이미지 파일**로 저장
- 편집한 수식을 **텍스트 파일**로 저장

**로그인 및 즐겨찾기**
- 네이버 **OAuth**를 이용한 **소셜** **로그인**
- 자주 사용하는 수식을 등록 후 **재사용**할 수 있는 **즐겨찾기** 기능 지원

**사용자 편리성 증진**

- 확장프로그램 **최소화 모드** 지원
- '**@'** 입력 시, **수식 추천** 기능 지원


## 🔥 기술 특장점
### ⚒️ 기술 스택
---
![1](https://user-images.githubusercontent.com/60457112/102003331-35d52480-3d49-11eb-8b28-a69653ca5e7b.jpg)
**Front-End** : React, Typescript, Redux, Emotion, Webpack & Babel, Mathquill Library  
**Back-End** : Express, Typescript, Mysql2, TypeORM, NCloud

### 🌈 기술 특장점
---
### ⚙️ Chrome, Whale Extension 환경 개발
> 🔗[리액트 + 타입스크립트로 크롬 확장프로그램 적용하기](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki/%EB%A6%AC%EC%95%A1%ED%8A%B8---%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-=-%ED%81%AC%EB%A1%AC-%ED%99%95%EC%9E%A5%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0!)  

웹 사이트 **어느 곳에서나 수식을 편집**하고, 편집한 수식을 쉽게 사용할 수 있는 서비스를 제공하기 위해 **Chrome Extension** 환경을 선택하게 되었습니다.   
저희 팀은 **React**와 **Typescript**을 이용하여 개발 환경을 구축하였으며, **Chrome과 Whale Store**에 등록하여 **확장프로그램**으로 사용하였습니다.

---

### 📚 오픈소스 수정 후, NPM 모듈 재배포 
> 🔗 [나만의 모듈을 NPM 사이트에 직접 배포해보기](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki/%EB%82%98%EB%A7%8C%EC%9D%98-%EB%AA%A8%EB%93%88%EC%9D%84-NPM-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90-%EC%A7%81%EC%A0%91-%EB%B0%B0%ED%8F%AC%ED%95%B4%EB%B3%B4%EA%B8%B0)  
> 🔗 [React-Mathquill 라이브러리 분석](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki/React-Mathquill-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%B6%84%EC%84%9D)  
> 🔗 [boost-mathquill link](https://www.npmjs.com/package/boost-mathquill)  

수식 편집을 구현하기 위해 **MathQuill 라이브러리**를 사용하였습니다.  
MathQuill 라이브러리는 Tag로 그려진 수식들을 직접 수정할 수 있어 사용자에게 **효율적인 UI**를 제공할 수 있었습니다.  
하지만 이중 적분, 행렬, 복잡한 기호 등 **저희가 원하는 수식이 지원되지 않는 경우**가 많이 있었고, 이와 관련된 issue 및 PR을 찾아보니 거절 당한 것을 확인했습니다.  
라이브러리의 라이센스를 확인한 후, MathQuill 라이브러리를 fork한 후, 기존 라이브러리에 없던 수식을 직접 추가하였습니다.  
이렇게 만들어진 저희팀만의 라이브러리는 **NPM 모듈**로 **재배포**하여 사용하였습니다.  

---

### 📁 컴포넌트 및 폴더 구조 설계

여러 React 디자인 패턴이 존재하지만, 이미 존재하는 디자인 패턴의 장점을 합쳐 **저희 팀만의 폴더 구조**를 고민하고 설계 해보았습니다.

**수식 셰프**라는 프로젝트명에 맞게 폴더 구조를 크게 **Ingredient(재료)**, **Meal(음식)**, **Set(세트)** 로 나누었습니다. 

```
- Ingredient : 재사용이 가능한 가장 작은 단위의 컴포넌트
- Meal : Ingredient와 추가적인 코드들로 합쳐진 컴포넌트
- Set : Meal과 Ingredient 및 추가적인 코드들로 합쳐진 컴포넌트로, 페이지를 구성하는 주요 컴포넌트
```

각각의 컴포넌트 폴더 안에는 크게 **index.tsx**, **style.ts**, **useComponent.ts**로 나누어 코드를 작성하였습니다.

```
- index.tsx : view 부분을 rendering 해주는 코드 작성
- style.ts : emotion 라이브러리를 이용하여 컴포넌트 기반 스타일 코드 작성
- useComponent.ts : 해당 컴포넌트에 필요한 logic 코드 작성
```

---

### ⚛️ Redux를 활용한 상태 관리
> 🔗 [TypeScript + React에 Redux 적용하기](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki/TypeScript---React%EC%97%90-Redux-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)  
> 🔗 [TypeScript Redux에서 createAction 만들어보기](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki/TypeScript-Redux%EC%97%90%EC%84%9C-createAction-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0)  

React 프로젝트가 커질 때 심해질 수 있는 **Prop Drilling** 현상을 방지하며 state를 좀 더 효율적으로 관리하기 위해 **Redux Library**를 사용하였습니다. 

**Redux**를 적용하면서 상태들을 중앙화 함으로써 컴포넌트 개발에 효율성을 증가시킬 수 있었습니다. 

또한 프로젝트에서 다양한 수식들의 상태를 효율적으로 관리할 수 있었고, 수식 관련 부수적인 기능들을 쉽게 개발할 수 있었습니다.

---
 
### 🔍 Custom Hooks를 통해 재사용성 높이기
> 🔗 [Custom Hooks 생성기](https://github.com/boostcamp-2020/Project15-C-Client-Based-Formula-Editor/wiki/useDebounce,-useThrottle)  

프로젝트를 진행하는 과정에서, **hooks**와 관련된 중복 코드가 많다는 사실을 알게 되었습니다.

이를 해결하기 위해, 자주 사용되는 로직들은 **Custom hook**으로 분리하였습니다.

**Custom hook**을 사용함으로써 **깔끔하고** **재사용성**이 높은 코드를 작성할 수 있었습니다.

```
- useInput : Input과 관련 있는 로직을 담당하는 hooks
- useToggle : On/Off 상태 관련 로직을 담당하는 hooks
- useModal : Modal을 쉽게 만들어주는 hooks
- useCurrentTab : Redux의 특정 상태를 가져오는 hooks
- useDebounce : Debounce와 관련 있는 로직을 담당하는 hooks
- useThrottle : Throttle과 관련 있는 로직을 담당하는 hooks
```

---

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
