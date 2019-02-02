# 디씨 스위퍼
![img](./img/main.png)
[디씨인사이드](https://www.dcinside.com/) 마이너갤러리의 관리 보조용 크롬 확장 프로그램입니다.

잦은 도배글이나 어그로성 게시글을 쉽게 삭제할 수 있도록 도와주는 마이너갤러리 운영자용 확장 스크립트입니다.

## 버전 히스토리
 * **[0.5.2](./version_history/0.5.2.zip) 2019/02/02**
    * 오토 새로고침 한도를 60초까지 증가하였습니다.
    * 오토 새로고침기능을 5초 미만으로 세팅할 경우 경고메세지를 출력시켰습니다.
    * 팝업 UI를 전체적으로 변경하였습니다.
    * 데이터 내보내기/ 불러오기 기능을 구현하였습니다.
    * 자잘한 버그를 고쳤습니다.
    * 아이콘을 변경하였습니다.
 * **0.5 2019/02/01**
    * 최초 공개
 
## 설치
### 크롬 웹스토어 다운로드
<a href="https://chrome.google.com/webstore/detail/lpahimgbjeopgkgndabeccdmcokfmlfd/publish-accepted?hl=ko&authuser=1">
    <img src="./img/download_link.png" title="크롬 웹스토어 다운로드 링크" style="border:3px solid #fff;box-shadow:0px 2px 1px rgba(0,0,0,0.3);"/>
</a>

### 수동 설치
19년 2월 2일 기준으로 크롬 웹스토어의 검수가 길어지고 있습니다. 급한 완장분들은 아래와 같은 방법으로 다운로드 해 주시기 바랍니다.
* 버전 히스토리에서 사용할 버전을 다운로드 받습니다.
* 압축을 해제합니다.
* [확장프로그램 관리 페이지](chrome://extension)으로 이동합니다. 
* 우측상단의 개발자모드 슬라이더를 켭니다.
* "압축해제된 확장프로그램을 로드합니다." 버튼을 클릭합니다.
* 압축 해제한 파일을 선택합니다.

이 방법은 차후에 크롬 버전 업데이트, 스크립트 정식버전 다운로드시 설정한 데이터가 모조리 날라갈 수 있습니다. 꼭 설정 내보내기로 차단세팅을 백업해주시기 바랍니다.

## 메인 기능 사용방법
![메인 기능 사용법](http://i.imgur.com/XMZUEUu.gif)
1. 분홍색 갤러리 id 입력칸에 갤러리 id를 입력합니다. (중갤이면 aoegame, 돌갤이면 pebble)
2. 노드 추가를 누릅니다.
3. 차단할 단어 혹은 정규식을 지정합니다.
4. 차단할지 삭제할지 프로그램이 취할 조치를 지정합니다.


## 메인기능에 대한 상세 설명
노드와 노드사이는 OR 게이트의 관계를 갖고 조건과 조건은 AND 게이트의 관계를 갖습니다.

닉에 박정희가 들어가면서 제목에 전라도가 붙은 게시물을 차단하고 싶은 경우 같은 노드에 두개의 조건을 추가하면 됩니다.

## 추가 기능
![setting](https://i.imgur.com/feqzvCR.gif)

### 자동 새로고침 간격
해당 갤러리에서 설정한 간격만큼 새로고침을 수행합니다. 0으로 지정할시 기능을 해제합니다.

디씨인사이드는 트래픽관리에 매우 엄격합니다. 과거에 자동으로 갤 관리해주는 툴을 대형 마이너 갤러리인 스마갤에서 개발해 사용하였다가 터진 이력이 있습니다. 그러니까 적당히 써라

### 1회 최대 삭제 갯수
글을 한번에 삭제할 갯수의 리미트를 지정합니다. 여기서 설정한 갯수 이상의 글은 지우지 않습니다. 0으로 설정할 시 기능을 해제합니다.

프로그램이 알수없는 오류로 오작동한 경우 갤러리의 글을 모두 지우는것을 방지한 설정입니다. 테스터도 두세명밖에 구하지 않아 사용하는데 불안정할 수 있습니다. 혹시 모르니까 최악의 상황을 생각해 적어도 10정도는 설정해놓는것을 추천드립니다.

### 설정 내보내기
설정을 내보냅니다.

### 설정 불러오기
설정을 불러옵니다.

## 기술스택
* [webpack](https://webpack.js.org/)
* [pug](https://pugjs.org/api/getting-started.html)
* [typescript](https://www.typescriptlang.org/)

## 주의점
이 스크립트는 자동 관리 툴이 아닌 보조 관리 툴입니다. 해당 툴을 용도에 맞지 않게 사용할시 아이디 정지 혹은 갤러리 삭제 처분을 받을 우려가 있습니다.

본 소프트웨어를 이용함으로써 발생할 수 있는 어떠한 손해도 보장하지 않습니다.

## 라이센스
본 프로젝트는 [GNU General Public License 허가서](./LICENSE) 하에 제공됩니다. 

