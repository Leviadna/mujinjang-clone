$(()=>{
  new Swiper('.swiper-container', {
    slidesPerView:'1',
    loop:true,
    pagination:{
      el:'.box_paging',
      type:'fraction'
    },
    direction:'horizontal'
  });

  $('.btn_like').click(function(){
    if($('.btn_like').hasClass('on')){
      $('.btn_like').removeClass('on');
      $('.ico_heart').attr('fill','none');
      $('.ico_heart').children('path').attr('stroke','currentColor');
    }else{
      $('.btn_like').addClass('on');
      $('.ico_heart').attr('fill','red');
      $('.ico_heart').children('path').attr('stroke','red');
    }
  });

  $('.link_prd').on('click', function(e){
    e.preventDefault();
    $('.link_prd').attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
  });

  $('.link_menu').on('click', function(e){
    e.preventDefault();
    $('.link_menu').attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
  });

  $('.btn_secret').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
    }else{
      $(this).removeClass('on');
      $(this).addClass('on');
    }
  });

  $('.btn_size').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
    }else{
      $('.btn_size').removeClass('on');
      $(this).addClass('on');
    }
  });

  $('.btn_notice').click(function(){
    if($(this).next().hasClass('on')){
      $(this).next().removeClass('on');
    }else{
      $(this).next().removeClass('on');
      $(this).next().addClass('on');
    }
  });

  $('.btn_like_prd').click(function(){
    if($('.btn_like_prd').hasClass('on')){
      $('.btn_like_prd').removeClass('on');
      $('.ico_heart_prd').attr('fill','none');
      $('.ico_heart_prd').children('path').attr('stroke','currentColor');
    }else{
      $('.btn_like_prd').addClass('on');
      $('.ico_heart_prd').attr('fill','red');
      $('.ico_heart_prd').children('path').attr('stroke','red');
    }
  });

  $('.btn_top').on("click",function(){
    $('html, body').animate({
      scrollTop : 0
    },300)
  }); 

  $('.btn_foot').click(function(){
    if($(this).next().hasClass('on')){
      $(this).next().removeClass('on');
    }else{
      $('.btn_foot').next().removeClass('on');
      $(this).next().addClass('on');
    }
  });
});