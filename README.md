# 🚆 지하철 정보 서비스 : 열차타요
<div align="center">
  <img src="https://github.com/joooo24/react-metro/assets/58600024/bc1446c2-6a28-46fd-8621-b20cae7c5c3c">
</div>

<br>

- 배포 URL : https://yeol-cha-ta-yo.netlify.app
- Admin Passkey : 1234 

<br>

## 프로젝트 소개

- **열차타요**는 지하철을 이용하는 사람들에게 역정보, 이동소요시간을 제공하는 웹사이트입니다.

<br>

## 팀원 구성

<div align="center">

| **장재훈** | **주현정** | **김수민** | **김수향** | **이상훈** |
| :------: |  :------: | :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/58600024?s=64&v=4" height=150 width=150> <br/>](https://github.com/jjhoooon) | [<img src="https://avatars.githubusercontent.com/u/61533589?s=64&v=4" height=150 width=150> <br/>](https://github.com/joooo24) | [<img src="https://avatars.githubusercontent.com/u/95954000?s=64&v=4" height=150 width=150> <br/>](https://github.com/ssuminii) | [<img src="https://avatars.githubusercontent.com/u/156069479?s=64&v=4" height=150 width=150> <br/>](https://github.com/suhyang1166) | [<img src="https://avatars.githubusercontent.com/u/114380985?s=64&v=4" height=150 width=150> <br/>](https://github.com/leesanghun0) |
| Product Owner |  Scrum Master | Developer | Developer | Developer |
</div>

<br>

## 1. 개발 환경

- Front : HTML, CSS, React, Reudx-toolkit, React-Query
- Back-end : [서울 열린데이터 광장](https://data.seoul.go.kr/dataList/datasetList.do), json-server
- 버전 및 이슈관리 : Github, Github Project
- 협업 툴 : Slack, Notion, Discord
- 서비스 배포 환경 : Netlify
- 디자인 : [Figma](https://www.figma.com/file/tCF0bHEYY8Y6dv82xYS2qu/team3-metro?type=design&node-id=33-265&mode=design&t=dCaltVO6ay45OoiT-0)
<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, styled-component

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- styled-component
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
    - S dot naming을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.
    

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- airbnb의 코딩 컨벤션을 참고해 사용했고, 예외 규칙은 팀원들과 협의했습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.

### 브랜치 전략

- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 프로젝트 구조

<details>
<summary>구조 접기/펼치기</summary>
<div markdown="1">

```
📦src
 ┣ 📂actions
 ┃ ┣ 📜authenticateActions.js
 ┃ ┗ 📜favoritesActions.js
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📂line
 ┃ ┃ ┃ ┣ 📜line1.png
 ┃ ┃ ┃ ┣ 📜line2.png
 ┃ ┃ ┃ ┣ 📜line3.png
 ┃ ┃ ┃ ┣ 📜line4.png
 ┃ ┃ ┃ ┣ 📜line5.png
 ┃ ┃ ┃ ┣ 📜line6.png
 ┃ ┃ ┃ ┣ 📜line7.png
 ┃ ┃ ┃ ┗ 📜line8.png
 ┃ ┃ ┣ 📜left-arrow.svg
 ┃ ┃ ┣ 📜login.svg
 ┃ ┃ ┣ 📜mainlogo.svg
 ┃ ┃ ┣ 📜menuclose.svg
 ┃ ┃ ┣ 📜menusearch.svg
 ┃ ┃ ┣ 📜right-arrow.svg
 ┃ ┃ ┣ 📜search.svg
 ┃ ┃ ┣ 📜seoul-metro-map.svg
 ┃ ┃ ┣ 📜seoul-metro.svg
 ┃ ┃ ┣ 📜sidebar-main-img.svg
 ┃ ┃ ┣ 📜sorry.png
 ┃ ┃ ┣ 📜star.svg
 ┃ ┃ ┣ 📜subway.png
 ┃ ┃ ┗ 📜toggle.svg
 ┣ 📂common
 ┃ ┣ 📂FavoriteStationList
 ┃ ┃ ┣ 📜FavoriteStationList.css
 ┃ ┃ ┗ 📜FavoriteStationList.jsx
 ┃ ┗ 📂KakaoMap
 ┃ ┃ ┗ 📜KakaoMap.js
 ┣ 📂components
 ┃ ┗ 📂SideBar
 ┃ ┃ ┣ 📜SideBar.css
 ┃ ┃ ┗ 📜SideBar.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useFavorites.js
 ┃ ┣ 📜useRealtimePosition.js
 ┃ ┣ 📜useSearchFirstAndLastTime.js
 ┃ ┣ 📜useStationAddress.js
 ┃ ┣ 📜useStationFullTIme.js
 ┃ ┣ 📜useStationInfo.js
 ┃ ┣ 📜useStationNameInfo.js
 ┃ ┣ 📜useStationPosition.js
 ┃ ┣ 📜useStationReqre.js
 ┃ ┣ 📜useStationReqreAll.js
 ┃ ┗ 📜useStationReqreTime.js
 ┣ 📂layouts
 ┃ ┣ 📂component
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜Footer.css
 ┃ ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┃ ┣ 📜Header.css
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📜AppLayout.css
 ┃ ┗ 📜AppLayout.jsx
 ┣ 📂pages
 ┃ ┣ 📂AdminPage
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📜ReceiveList.css
 ┃ ┃ ┃ ┗ 📜ReceiveList.jsx
 ┃ ┃ ┣ 📜AdminPage.jsx
 ┃ ┃ ┗ 📜AdminPage.style.css
 ┃ ┣ 📂LoginPage
 ┃ ┃ ┣ 📜LoginPage.css
 ┃ ┃ ┗ 📜LoginPage.jsx
 ┃ ┣ 📂MainPage
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┗ 📂SearchFrom
 ┃ ┃ ┃ ┃ ┣ 📜SearchForm.css
 ┃ ┃ ┃ ┃ ┗ 📜SearchForm.jsx
 ┃ ┃ ┣ 📜MainPage.css
 ┃ ┃ ┗ 📜MainPage.jsx
 ┃ ┣ 📂ResultPage
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📂DepartureArrivalTime
 ┃ ┃ ┃ ┃ ┣ 📜DepartureArrivalTime.jsx
 ┃ ┃ ┃ ┃ ┗ 📜DepartureArrivalTime.style.css
 ┃ ┃ ┃ ┣ 📂ReportForm
 ┃ ┃ ┃ ┃ ┣ 📜ReportForm.jsx
 ┃ ┃ ┃ ┃ ┗ 📜ReportForm.style.css
 ┃ ┃ ┃ ┣ 📂RequiredTime
 ┃ ┃ ┃ ┃ ┣ 📜RequiredTime.jsx
 ┃ ┃ ┃ ┃ ┗ 📜RequiredTime.style.css
 ┃ ┃ ┃ ┣ 📜Stopover.css
 ┃ ┃ ┃ ┗ 📜Stopover.jsx
 ┃ ┃ ┣ 📜ResultPage.css
 ┃ ┃ ┗ 📜ResultPage.jsx
 ┃ ┣ 📂StationDetailPage
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📂ArrivalInfo
 ┃ ┃ ┃ ┃ ┗ 📜ArrivalInfo.jsx
 ┃ ┃ ┃ ┣ 📂FullSubwayMap
 ┃ ┃ ┃ ┃ ┣ 📜FullSubwayMap.css
 ┃ ┃ ┃ ┃ ┗ 📜FullSubwayMap.jsx
 ┃ ┃ ┃ ┣ 📂FullTimetable
 ┃ ┃ ┃ ┃ ┣ 📜FullTimetable.css
 ┃ ┃ ┃ ┃ ┗ 📜FullTimetable.jsx
 ┃ ┃ ┃ ┣ 📂RealTimeInfo
 ┃ ┃ ┃ ┃ ┗ 📜RealTimeInfo.jsx
 ┃ ┃ ┃ ┣ 📂StationAddressInfo
 ┃ ┃ ┃ ┃ ┗ 📜StationAddressInfo.jsx
 ┃ ┃ ┃ ┗ 📂StationList
 ┃ ┃ ┃ ┃ ┗ 📜StationList.jsx
 ┃ ┃ ┣ 📜StationDetailPage.css
 ┃ ┃ ┗ 📜StationDetailPage.jsx
 ┃ ┣ 📜ErrorPage.jsx
 ┃ ┣ 📜NotFoundPage.jsx
 ┃ ┗ 📜PrivateRoute.jsx
 ┣ 📂store
 ┃ ┣ 📜authenticateReducer.js
 ┃ ┣ 📜favoritesSlice.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜reportsSlice.js
 ┣ 📂utils
 ┃ ┣ 📂time
 ┃ ┃ ┣ 📜addMinutes.js
 ┃ ┃ ┣ 📜calTime.js
 ┃ ┃ ┗ 📜timeToMinutes.js
 ┃ ┗ 📜api.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```
</div>
</details>
<br>

