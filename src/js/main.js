
$(document).ready(function () {
  const JSON_URL = 'https://www.googleapis.com/blogger/v3/blogs/2314533088766474219/posts?fetchImages=true&maxResults=3&orderBy=published&status=live&fields=items(url%2C%20title%20%2C%20images%2Clabels)&key=AIzaSyCgjuDZI1CeoTKYdVA3VagzC6tjjSRBLhs';

  $("#toTop").click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 1000);
  });

  ///
  //   in-view Logic 
  ///
  inView.offset(100);
  inView('#footerImage')
      .on('enter', el => {
          el.style.transform = 'translateY(0)';

      })
      .on('exit', el => {
          el.style.transform = 'translateY(100px)';

      });
  inView('#aboutText')
      .once('enter', el => {
          el.style.transform = 'translateY(0)';
      });
  inView('#heroHeader')
      .once('enter', el => {
          el.style.transform = 'translateY(0)';
      });
});