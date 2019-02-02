# 디씨 스위퍼
![img](./img/main.png)
[디씨인사이드](https://www.dcinside.com/) 마이너갤러리의 관리 보조용 크롬 확장 프로그램입니다.

잦은 도배글이나 어그로성 게시글을 쉽게 삭제할 수 있도록 도와주는 마이너갤러리 운영자용 확장 스크립트입니다.

## 웹스토어 다운로드
<a href="https://chrome.google.com/webstore/detail/lpahimgbjeopgkgndabeccdmcokfmlfd/publish-accepted?hl=ko&authuser=1">
    <img src="./img/download_link.png" title="크롬 웹스토어 다운로드 링크" style="border:3px solid #fff;box-shadow:0px 2px 1px rgba(0,0,0,0.3);"/>
</a>


## 메인 기능 사용방법
![메인 기능 사용법](http://i.imgur.com/XMZUEUu.gif)
1. 분홍색 갤러리 id 입력칸에 갤러리 id를 입력합니다. (중갤이면 aoegame, 돌갤이면 pebble)
2. 노드 추가를 누릅니다.
3. 차단할 단어 혹은 정규식을 지정합니다.
4. 차단할지 삭제할지 프로그램이 취할 조치를 지정합니다.


## 메인기능에 대한 상세 설명
노드와 노드사이는 OR 게이트의 관계를 갖고 조건과 조건은 AND 게이트의 관계를 갖습니다.

닉에 박정희가 들어가면서 제목에 전라도가 붙은 게시물을 차단하고 싶은 경우 같은 노드에 두개의 조건을 추가하면 됩니다.

## 설정에 대한 설명
![설정](https://i.imgur.com/UWlNl00.png)

* **자동 새로고침 간격** : 설정한 수치의 간격만큼 새로고침을 수행합니다. 0으로 지정할시 기능을 해제합니다.
* **1회 최대 삭제 갯수** : 글을 한번에 삭제할 갯수의 리미트를 지정합니다. 여기서 설정한 갯수 이상의 글은 지우지 않습니다. 프로그램이 알수없는 오류로 오작동한 경우 갤러리의 글을 모두 지우는것을 방지한 설정입니다. 0으로 설정할 시 기능을 해제합니다.

## 기술스택
* [webpack](https://webpack.js.org/)
* [pug](https://pugjs.org/api/getting-started.html)
* [typescript](https://www.typescriptlang.org/)

## 주의점
이 스크립트는 자동 관리 툴이 아닌 보조 관리 툴입니다. 해당 툴을 용도에 맞지 않게 사용할시 아이디 정지 혹은 갤러리 삭제 처분을 받을 우려가 있습니다.

본 소프트웨어를 이용함으로써 발생할 수 있는 어떠한 손해도 보장하지 않습니다.

## 라이센스
본 프로젝트는 [GNU General Public License 허가서](./LICENSE) 하에 제공됩니다. 

