const blog_slide=document.getElementById("front-page-blog-slides"),blog_btn_left=document.getElementById("blog-nav-btn-left"),blog_btn_right=document.getElementById("blog-nav-btn-right");var blog_scrlX=blog_slide.scrollWidth/6;blog_btn_left.onclick=()=>{blog_slide.scrollBy({left:-scrlX,behavior:"smooth"})},blog_btn_right.onclick=()=>{blog_slide.scrollBy({left:scrlX,behavior:"smooth"})};var blog_tmpVar=blog_scrlX,y=0;setInterval(()=>{0==blog_slide.scrollLeft?(blog_tmpVar=blog_scrlX,y=0):y>=blog_slide.scrollWidth-blog_scrlX-2&&(blog_tmpVar=-blog_scrlX),blog_slide.scrollBy({left:blog_tmpVar,behavior:"smooth"}),y+=blog_scrlX},3511);let show=e=>{const l=document.getElementById(e+"-btn"),s=document.getElementById(e),t=document.getElementById("carousel-slides").childElementCount;for(i=1;i<=t;i++)e!=="slide"+i?(document.getElementById("slide"+i).classList.remove("slide-show"),document.getElementById("slide"+i).classList.add("slide-hide"),document.getElementById("slide"+i+"-btn").classList.remove("slide-btn-active")):(s.classList.add("slide-show"),s.classList.remove("slide-hide"),l.classList.add("slide-btn-active"))};const slide_length=document.getElementById("carousel-slides").childElementCount;let slideshow=e=>{show("slide"+e),n=e==slide_length?1:e+1,setTimeout((function(){slideshow(n)}),5e3)};slideshow(2);const news_slide=document.getElementById("front-page-news"),news_btn_left=document.getElementById("news-btn-left"),news_btn_right=document.getElementById("news-btn-right");var scrlX=news_slide.scrollWidth/3;news_btn_left.onclick=()=>{news_slide.scrollBy({left:-scrlX,behavior:"smooth"})},news_btn_right.onclick=()=>{news_slide.scrollBy({left:scrlX,behavior:"smooth"})};var news_tmpVar=scrlX,x=0;setInterval(()=>{0==news_slide.scrollLeft?(news_tmpVar=scrlX,x=0):x>=news_slide.scrollWidth-scrlX-2&&(news_tmpVar=-scrlX),news_slide.scrollBy({left:news_tmpVar,behavior:"smooth"}),x+=scrlX},3989);
//# sourceMappingURL=maps/home.js.map