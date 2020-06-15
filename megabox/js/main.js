function main(){
  skip();
  banner();
  login();
  popUp();
  sitemap();
  // swiper
  var mySwiper=new Swiper('.swiper-container',{
    slidesPerView:4,
    spaceBetween:40,
    loop:'ture'
  });
  $('.git_hub').click(function(){
    location.href=('https://github.com/kig1078/megabox');
  });

  var cnt=0;
  $('#prev').click(function(){
    if(cnt>0){
      cnt--;
    }else{
      cnt=3;
    }       
    userSlide(cnt);
  })
  $('#next').click(function(){
    if(cnt<3){
      cnt++;
    }else{
      cnt=0;
    }
    userSlide(cnt);
  })

  subPosition();
  $(window).resize(function(){
    subPosition();
  });

}