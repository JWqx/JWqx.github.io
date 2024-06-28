var posts=["2024/06/11/DIP流程/","2024/06/24/光伏储能产品知识记录/","2024/06/12/光伏电路/","2024/06/11/光伏系统/","2024/06/11/SMT贴片工艺/","2024/06/20/澳大利亚户储市场调研报告/","2024/06/20/产品数据/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };