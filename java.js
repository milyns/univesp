
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-92546141-1', 'auto');
  ga('send', 'pageview');


  let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth = items[0].offsetWidth;
  const maxIndex = items.length - 5; // 5 itens visíveis

  currentIndex = Math.min(Math.max(currentIndex + direction, 0), maxIndex);
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
