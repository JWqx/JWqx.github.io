var posts=["2024/06/11/SMT贴片工艺/","2024/06/11/hello-world/","2024/06/11/DIP流程/","2024/06/11/光伏系统/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };