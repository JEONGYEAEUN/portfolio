$(document).ready(function () {

  //인트로타이핑
  let introtxt = "MY DESIGN PORTFOLIO."
  let txt = document.querySelector(".introTxt")
  let index = 0

  function typing() {
    txt.textContent += introtxt[index]
    index++
    if (index > introtxt.length - 1) {
      clearInterval(timer_intro)
    }
  }

  let timer_intro = setInterval(function () {
    typing()
  }, 200)

  // 사이드메뉴 버튼

  $(".intrologo>img").click(function () {

    if ($("nav").hasClass("on") == false) {
      //메뉴 닫힌 상태에서 열기
      $("nav").addClass("on")
    }
  })

  $(".sideclose").click(function () {

    if ($("nav").hasClass("on") == true) {
      //사이드 메뉴 열린 상태에서 x버튼으로 닫기
      $("nav").removeClass("on")
    }
  })

  //팝업이미지 팝업창


  $(".fileimg>.popup").click(function (e) {
    e.preventDefault()
    $(".whitebackground").addClass("on")
    $(".popup_page").addClass("on")
  })

  $(".popupR span.popclose").click(function (e) {
    e.preventDefault()
    $(".whitebackground").removeClass("on")
    $(".popup_page").removeClass("on")

  })

  $(document).on("click", ".popupR span.popclose", function (e) {
    e.preventDefault()
    $(".whitebackground").removeClass("on")
    $(".popup_page").removeClass("on")
  })



  // 팝업 페이드인 슬라이드

  let count = 0;
  $(".popnext").click(function (e) {
    e.preventDefault()
    count++;
    if (count > 7) {
      count = 0
    }
    $(".poptrain>li").removeClass("on")
    $(".poptrain>li").eq(count).addClass("on")
    $(".popupR").html(SliderTextArray[count])
  })

  $(".popprev").click(function (e) {
    e.preventDefault()
    count--;
    if (count < 0) {
      count = 7
    }
    $(".poptrain>li").removeClass("on")
    $(".poptrain>li").eq(count).addClass("on")
    $(".popupR").html(SliderTextArray[count])
  })


  //배너 슬라이드 팝업창

  $(".fileimg>.banner").click(function (e) {
    e.preventDefault()
    $(".whitebackground2").addClass("on")
    $(".banner_page").addClass("on")
  })

  $(".banner_page>span.bannerclose").click(function (e) {
    e.preventDefault()
    $(".whitebackground2").removeClass("on")
    $(".banner_page").removeClass("on")

  })

  $(document).on("click", ".banner_page>span.bannerclose", function (e) {
    e.preventDefault()
    $(".whitebackground2").removeClass("on")
    $(".banner_page").removeClass("on")
  })



  //배너슬라이드 

  $(".bannext").click(function (e) {
    count++
    e.preventDefault()
    //기차가 왼쪽으로 500px
    if (count > 3) { count = 0 } //0은 처음으로 돌아가게 하는 기능
    $(".bannertrain").css("transform", "translateX(" + (-25 * count) + "%)")
  })

  $(".banprev").click(function (e) {
    e.preventDefault()
    count--
    if (count < 0) { count = 3 }
    $(".bannertrain").css("transform", "translateX(" + (-25 * count) + "%)")
  })

  //스크롤바를 움직일 때 키워드가 뜨도록

  $(window).scroll(function () {
    let winst = $(window).scrollTop()  //한번 움직이면 변수 안에 저장되는 값 1000

    let keywordtop = $(".typo").offset().top //1000 콘투 클래스가 전체 문서 대비 위에서 떨어진 값
    if (winst >= keywordtop) {
      $(".typo>ul>li").addClass("on")
    } else {
      $(".typo>ul>li").removeClass("on")
    }

    $("#nametxt path").each(function () {
      let path = $(this)
      let idx = path.index()
      let secondTerm = 1
      let delay = idx * secondTerm

      let pathLength = $(this).get(0).getTotalLength()
      $(this).css("stroke-dasharray", pathLength)
      $(this).css("stroke-dashoffset", pathLength)

      setTimeout(function () {
        path.css("transition", `stroke-dashoffset 2s ease ${delay}s,fill 2s ease ${delay + 1}s`)
      }, 1000)

    })

    setTimeout(function () {
      $("#nametxt").addClass("on")
    }, 2000)
  })


  $(".contents_wrap>div").on("wheel DOMMouseScroll", function (event) {
    //console.log(event)
    let E = event.originalEvent
    let delta = 0;
    if (E.detail) {
      delta = E.detail * -40
    } else {
      delta = E.wheelDelta
    }

    if (delta < 0) {
      //마우스 휠을 내렸을 때
      //console.log($(this).next().length)
      if ($(this).next().length != 0) {
        let posTop = $(this).next().offset().top
        //정해준 영역의 다음 형제로 스크롤 되게
        $("html,body").stop().animate({ scrollTop: posTop }, 1000)
      }

    } else {
      //마우스 휠을 올렸을 때
      if ($(this).prev().length != 0) {
        let posTop = $(this).prev().offset().top
        $("html,body").stop().animate({ scrollTop: posTop }, 1000)
      }
    }
    return false
  })

  //각각의 메뉴리스트를 클릭했을 때 해당되는 영역으로 부드럽게 스크롤 이동될 수 있도록
  $(".gnb>li>a").click(function (e) {
    e.preventDefault() //a태그가 갖고있는 기본 기능을 제거

    let target = $(this).attr("href")
    //클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target변수에 저장된다.
    //(문자데이터 형태로 "#s1""#s2"...)
    let target_top = $(target).offset().top
    //$("html,body").stop().animate({ scrollTop: target_top }, 1000)
    //moveScroll(top: target_top,1000)
    moveScroll({ top: target_top, speed: 1000 })
  })

  // function moveScroll(top, speed) {
  //   $("html,body").stop().animate({ scrollTop: top }, speed)
  // }

  function moveScroll(option) {
    $("html,body").stop().animate({ scrollTop: option.top }, option.speed)
  }

  $(".Dbottom img").mouseover(function () {
    let imgsrc = $(this).attr("src")
    let changedsrc = imgsrc.replace("close", "open")
    $(this).attr("src", changedsrc)
  })

  $(".Dbottom img").mouseout(function () {
    let imgsrc = $(this).attr("src")
    let changedsrc = imgsrc.replace("open", "close")
    $(this).attr("src", changedsrc)
  })

  let SliderTextArray = [
    `  <div class="popup_exp">
          <dl>
            <dt class="popTitle">블랙프라이데이 팝업</dt>
            <dd>블랙프라이데이를 주제로 팝업 디자인을 하였습니다.<br>
              일 년에 단 한 번 있는 한정 세일 기간에 걸맞게 전체적인<br> 컨셉을 시계로 설정하였고 블랙프라이데이라는 이름에<br>
              집중하여 블랙 컬러를 배경색으로 설정하고 대표 타이포에<br> 포인트가 되도록 금색으로 설정하였습니다.</dd>
            <dt>Color Palette</dt>
            <dd class="colorList">
              <span style="
    width: 30px;
    height: 30px;
    background: #ff0000;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #000000;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #d4af37;
    display: block;
    border-radius: 50%;
    "></span>
            </dd>
            <dt>Font</dt>
            <dd>
              <ul class="font">
                <li>Prata Regular</li>
                <li>Open Sans</li>
              </ul>
            </dd>
            <dt>Size</dt>
            <dd>500x500px</dd>
          </dl>
        </div>
        <span class="popclose"><i class="fa-solid fa-xmark"></i></span>`,
    `<div class="popup_exp">
          <dl>
            <dt class="popTitle">연말 팝업</dt>
            <dd>연말을 주제로 팝업 디자인을 하였습니다.<br>
              색을 최소로 사용하고 심플하게 구성을 짜보았습니다.<br>
              심플하지만 연말 특유의 따뜻한 감성은 가져가기 위해<br>
              폰트와 아이콘에 디자인적인 요소를 더했습니다.</dd>
            <dt>Color Palette</dt>
            <dd class="colorList">
               <span style="
    width: 30px;
    height: 30px;
    background: #010723;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #ffffd4;
    border:1px solid #b2b2b2;
    box-sizing: border-box;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #4c5564;
    display: block;
    border-radius: 50%;
    "></span>
            </dd>
            <dt>Font</dt>
            <dd>
              <ul class="font">
                <li>Amatic SC</li>
              </ul>
            </dd>
            <dt>Size</dt>
            <dd>500x500px</dd>
          </dl>
        </div> 
        <span class="popclose"><i class="fa-solid fa-xmark"></i></span>`,
    `<div class="popup_exp">
          <dl>
            <dt class="popTitle">할로윈 팝업</dt>
            <dd>할로윈을 주제로 팝업 디자인을 하였습니다.<br>
              보라색과 주황색을 주요 색상으로 선택하고<br>
              일러스트 제작과 폰트 변형을 통해 곳곳에 테마에<br> 어울리는 재미 요소를 더해주었습니다.</dd>
            <dt>Color Palette</dt>
            <dd class="colorList">
             <span style="
    width: 30px;
    height: 30px;
    background: #24002d;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #fefffd;
    border:1px solid #b2b2b2;
    box-sizing: border-box;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #f1933c;
    display: block;
    border-radius: 50%;
    "></span>
    
            </dd>
            <dt>Font</dt>
            <dd>
              <ul class="font">
                <li>Creepster</li>
              </ul>
            </dd>
            <dt>Size</dt>
            <dd>500x500px</dd>
          </dl>
        </div> <span class="popclose"><i class="fa-solid fa-xmark"></i></span>`,
    `<div class="popup_exp">
          <dl>
            <dt class="popTitle">신년 팝업</dt>
            <dd>신년을 주제로 팝업 디자인을 하였습니다.<br>
              해돋이를 전체적인 컨셉으로 정하고 지난 한 해와<br>
              올해의 맞닿은 시간을 떠오르는 해와 바다 표면에<br>
              비친 달로 표현하였습니다. 전통적인 스타일의 테두리로<br>
              꾸밈을 더하여 한국적인 멋을 더했습니다.</dd>
            <dt>Color Palette</dt>
            <dd class="colorList">
                  <span style="
    width: 30px;
    height: 30px;
    background: #F07235;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #EFD88C;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #3765DA;
    display: block;
    border-radius: 50%;
    "></span>
     <span style="
    width: 30px;
    height: 30px;
    background: #EFBAC0;
    display: block;
    border-radius: 50%;
    "></span>
            </dd>
            <dt>Font</dt>
            <dd>
              <ul class="font">
                <li>Noto Serif HK</li>
                <li>HY신명조</li>
              </ul>
            </dd>
            <dt>Size</dt>
            <dd>500x500px</dd>
          </dl>
        </div>  <span class="popclose"><i class="fa-solid fa-xmark"></i></span>`,
    `<div class="popup_exp">
          <dl>
            <dt class="popTitle">장마철 기획전 팝업</dt>
            <dd>장마철 기획전을 주제로 팝업 디자인을 하였습니다.<br>
              우산이 펴져 있는 모습을 꽃으로 연상해 떠올릴 수 있도록<br> 이파리 디테일을 더해주었습니다.<br>
              장마를 뜻하는 '오란비'라는 단어를 제목으로 설정하여<br>
              사용자의 흥미를 유발할 수 있도록 하였습니다.</dd>
            <dt>Color Palette</dt>
            <dd class="colorList">
               <span style="
    width: 30px;
    height: 30px;
    background: #4da5db;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #c09ff4;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #ffa764;
    display: block;
    border-radius: 50%;
    "></span>
     <span style="
    width: 30px;
    height: 30px;
    background: #f2bdf2;
    display: block;
    border-radius: 50%;
    "></span>
            </dd>
            <dt>Font</dt>
            <dd>
              <ul class="font">
                <li>HS봄바람체 2.1</li>
                <li>Noto Sans KR</li>
              </ul>
            </dd>
            <dt>Size</dt>
            <dd>500x500px</dd>
          </dl>
        </div> <span class="popclose"><i class="fa-solid fa-xmark"></i></span>`,
    `<div class="popup_exp">
          <dl>
            <dt class="popTitle">한복의 날 팝업</dt>
            <dd>10월 21일 한복의 날을 주제로 팝업 디자인을 하였습니다.<br>
              큰 배경을 한복 저고리 모양으로 만들어 한복의 날<br>
              이라는 것을 한눈에 알 수 있도록 하였고, 한국의<br>
              오방색을 포인트 색으로 사용해 한국의 멋을 더해주었습니다.</dd>
            <dt>Color Palette</dt>
            <dd class="colorList">
               <span style="
    width: 30px;
    height: 30px;
    background: #af1c1d;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #2c418c;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #ebc751;
    display: block;
    border-radius: 50%;
    "></span>
     <span style="
    width: 30px;
    height: 30px;
    background: #f9f6e7;
    border:1px solid #b2b2b2;
    box-sizing: border-box;
    display: block;
    border-radius: 50%;
    "></span>
            </dd>
            <dt>Font</dt>
            <dd>
              <ul class="font">
                <li>Gugi Regular</li>
                <li>Noto Sans KR</li>
                <li>Noto Serif HK</li>
              </ul>
            </dd>
            <dt>Size</dt>
            <dd>500x500px</dd>
          </dl>
        </div> <span class="popclose"><i class="fa-solid fa-xmark"></i></span>`,
    `<div class="popup_exp">
          <dl>
            <dt class="popTitle">농구대회 팝업</dt>
            <dd>농구대회를 주제로 팝업 디자인을 하였습니다.<br>
              전체적인 구성을 분할하여 색 조합을 하였고 여러<br>
              오브젝트를 과감하게 배치하여 깔끔하지만, 스포츠<br>
              특유의 활기찬 느낌을 더해주었습니다.</dd>
            <dt>Color Palette</dt>
            <dd class="colorList">
               <span style="
    width: 30px;
    height: 30px;
    background: #ff922b;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #00153d;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #dfbd8d;
    display: block;
    border-radius: 50%;
    "></span>
            </dd>
            <dt>Font</dt>
            <dd>
              <ul class="font">
                <li>Tilt Warp Regular</li>
                <li>Noto Sans KR</li>
              </ul>
            </dd>
            <dt>Size</dt>
            <dd>500x500px</dd>
          </dl>
        </div> <span class="popclose"><i class="fa-solid fa-xmark"></i></span>`,
    `<div class="popup_exp">
          <dl>
            <dt class="popTitle">벚꽃축제 팝업</dt>
            <dd>벚꽃축제를 주제로 팝업 디자인을 하였습니다.<br>
              벛꽃이 피어난 모습을 구름처럼 표현해 주었습니다<br>
              제목에 쓰인 'ㅊ'을 벚꽃으로 표현해 디자인적인<br> 재미를 더해주었습니다.</dd>
            <dt>Color Palette</dt>
            <dd class="colorList">
              <span style="
    width: 30px;
    height: 30px;
    background: #70d2fc;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #fbdae1;
    display: block;
    border-radius: 50%;
    "></span>
              <span style="
    width: 30px;
    height: 30px;
    background: #e88b98;
    display: block;
    border-radius: 50%;
    "></span>
            </dd>
            <dt>Font</dt>
            <dd>
              <ul class="font">
                <li>Sunflower</li>
                <li>에스코어 드림</li>
              </ul>
            </dd>
            <dt>Size</dt>
            <dd>500x500px</dd>
          </dl>
        </div> <span class="popclose"><i class="fa-solid fa-xmark"></i></span>`]



});