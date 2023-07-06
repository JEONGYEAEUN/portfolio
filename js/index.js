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

  //스크롤바를 움직일 때 키워드가 뜨도록

  $(window).scroll(function () {
    let winst = $(window).scrollTop()  //한번 움직이면 변수 안에 저장되는 값 1000
    let keywordtop = $(".typo").offset().top //1000 콘투 클래스가 전체 문서 대비 위에서 떨어진 값
    if (winst >= keywordtop) {
      $(".typo>ul>li").addClass("on")
    } else {
      $(".typo>ul>li").removeClass("on")
    }
  })


  $(".contents_wrap>div#page").on("wheel DOMMouseScroll", function (event) {
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




})