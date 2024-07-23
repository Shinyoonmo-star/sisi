
function ActiveOnVisible_init(){
    $('.active-on-visible').each(function(index,node){
        var $node = $(node);
        var onFuncName = $node. attr('data-active-on-visible-on-func-name');
        var oFFuncName = $node. attr('data-active-on-visible-off-func-name');
   $node.data('data-active-on-visible-on-func-name',onFuncName);
   $node.data('data-active-on-visible-off-func-name',offFuncName);
   
    });

    $(window).resize(_.debounce(ActiveOnVisible__initOffset, 500));
    ActiveOnVisible__initOffset();

    $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 50));
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset(){
	var windowHeight = $(window).height();

	$('.actve-on-visible:not(.actived)').each(function(index,node){
		var $node = $(node);

		var offsetTop = node.offset().top;

		var matrix = $node.css('transform').replace(/[^0-9\-.,]/g, '').split(',')
		var translateX = matrix[12] || matrix[4];
		var translateX = matrix[13] || matrix[5];

		if (translateY) {
			offsetTop -= translateY;
		}

		$node.attr('data-active-on-visible-offsetTop', offsetTop);
		$node.data('data-active-on-visible-offsetTop', offsetTop);

		if ( !$node.attr('data-active-on-visible-diff-y') ) {
      $node.attr('data-active-on-visible-diff-y', '0');
    }

		if (!$node.attr('data-active-on-visible-delay')){
			$node.attr('data-active-onvisible-delay','0');
		}

		var diffY = $node.attr('data-active-on-visible-diff-y');
    var delay = $node.attr('data-active-on-visible-delay');

if( duffY.substr(-2, 2) == 'vh'){
	diffY = parseInt(diffY);

	diffY = windowHeight * (diffY/100);
}
else if ( diffY.substr(-1, 1)== '%' ){
	diffY = parseInt(diffY);

	diffY =$node.height() * (diffY / 100);
}

else{
	diffY = parseInt(diffY);
}

$node.attr('data-active-on-visible-diff-y-real',diffY)
$node.attr('data-active-on-visible-diff-y',diffY)
$node.attr('data-active-on-visible-delay',diffY)

});
	
ActiveOnVisible__checkAndActive(); 
}

function ActiveOnVisible__checkAndActive(){
	$('.active-onvisible:not(.actived)').each(function(index, node){
		var $node = $(node);

		var offsetTop = $node.data('data-active-on-visible-offsetTop') * 1;
		var diffY = parseInt($node.data('data-active-on-visible-diff-y'));
		var diffY = parseInt($node.data('data-active-on-visible-delay'));
		

		var onFuncName = $node.data('data-active-onvisible-on-func-name');
		var offFuncName = $node.data('data-active-onvisible-off-func-name');

		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var nodeHeight = $node.height();

		
		
		if ( scrollTop + windowHeight + diffY > offsetTop ) {
      setTimeout(function() {
        if ( $node.hasClass('active') == false ) {
          $node.addClass('active');

          if ( $node.hasClass('can-active-once') ) {
            $node.addClass('actived');
          }

          if ( window[onFuncName] ) {
            window[onFuncName]($node);
          }
        }
      }, delay);
    }
    else {
      if ( $node.hasClass('active') ) {
        $node.removeClass('active');

        if ( window[offFuncName] ) {
          window[offFuncName]($node);
        }
      }
    }
  });
}
$(function(){
	ActiveOnVisible__initOffset();
})
// 발견되면 활성화시키는 라이브 러리


function SliderBox1__init() {
	$('.slider-box-1 > .slick').slick({
		// 스크롤바 아래 점으로 페이지네이션
		dots:false, 
		// 자동 스크롤 사용 여부
		autoplay: false, 
		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간
		autoplaySpeed: 5000, 
		// 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
		pauseOnHover:false, 
		// 한 화면에 보여질 컨텐츠 개수
		slidesToShow: 3, 
		 // 스크롤 한번에 움직일 컨텐츠 개수
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: 0,		
		arrows: true,
		prevArrow: ".slider-box-1 > .arrows > .btn-arrow-left",
		nextArrow: ".slider-box-1 > .arrows > .btn-arrow-right",
	});
}

SliderBox1__init();
