$(function(){
  $(function(){
  var Logo=$('#main_logo');
  var man=$('#man_nav_hover');
  var woman=$('#woman_nav_hover');
  var community=$('#community_nav_hover');
  var event=$('#event_nav_hover');
  var qna=$('#qna_nav_hover');
  var manVoid=$('#man_sub_nav');
  var test=$('#man_sub_nav>li');
  var womanVoid=$('#woman_sub_nav');
  // var manVoid=$('#man_sub_nav');
  // var womanVoid=$('#woman_sub_nav');
  var communityVoid=$('#community_sub_nav');
  var eventVoid=$('#event_sub_nav');
  if(manVoid.css('visibility')=='hidden'){
    man.mousedown(function(){
      $('.clothes_category').css('visibility','hidden');
      $('.container').css('background','url(./images/man_bg.png)').css('backgroundRepeat','no-repeat');
      $('.sub_navs').css('visibility','hidden');
      manVoid.css('visibility','visible');
      if(manVoid.css('visibility')=='visible'){
        $('#man_outer_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#man_outer').css('visibility','visible');
        });
        $('#man_top_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#man_top').css('visibility','visible');
        });
        $('#man_shirts_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#man_shirts').css('visibility','visible');
        });
        $('#man_pants_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#man_pants').css('visibility','visible');
        });
        $('#man_shoes_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#man_shoes').css('visibility','visible');
        });
        $('#man_acc_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#man_acc').css('visibility','visible');
        });
        $('#man_bag_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#man_bag').css('visibility','visible');
        });
        $('#man_suit_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#man_suit').css('visibility','visible');
        });
      }
    });
    woman.mousedown(function(){
      $('.clothes_category').css('visibility','hidden');
      $('.container').css('background','url(./images/woman_bg.png)').css('backgroundSize','cover').css('backgroundRepeat','no-repeat');
      $('.sub_navs').css('visibility','hidden');
      womanVoid.css('visibility','visible');
      if(womanVoid.css('visibility')=='visible'){
        $('#woman_blouse_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#woman_blouse').css('visibility','visible');
        });
        $('#woman_outer_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#woman_outer').css('visibility','visible');
        });
        $('#woman_knit_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#woman_knit').css('visibility','visible');
        });
        $('#woman_skirt_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#woman_skirt').css('visibility','visible');
        });
        $('#woman_pants_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#woman_pants').css('visibility','visible');
        });
        $('#woman_acc_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#woman_acc').css('visibility','visible');
        });
        $('#woman_bag_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#woman_bag').css('visibility','visible');
        });
        $('#woman_shoes_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#woman_shoes').css('visibility','visible');
        });
        $('#woman_Jewelry_hover').mousedown(function(){
          $('.container').css('backgroundImage','none').css('backgroundColor','rgba(255, 239, 222,0.5)');
          $('.clothes_category').css('visibility','hidden');
          $('#woman_Jewelry').css('visibility','visible');
        });
      }
    });
    community.mousedown(function(){
      $('.sub_navs').css('visibility','hidden');
      communityVoid.css('visibility','visible');
    });
    event.mousedown(function(){
      $('.sub_navs').css('visibility','hidden');
      eventVoid.css('visibility','visible');
    });
  }
});
})
