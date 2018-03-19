const jsonUrl = 'https://www.googleapis.com/blogger/v3/blogs/2314533088766474219/posts?fetchImages=true&maxResults=3&orderBy=published&status=live&fields=items(url%2C%20title%20%2C%20images%2Clabels)&key=AIzaSyCgjuDZI1CeoTKYdVA3VagzC6tjjSRBLhs';
$(document).ready(function () {

    //toggle menu
    document.getElementById('toggle').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        menu.style.right = (menu.style.right == '0px') ? '-380px' : '0px';
        document.getElementById('toggle').classList.toggle('close');
    });

    //Scroll effect
    const navabr = document.getElementById('navbar');
    const aboutText = document.getElementById('aboutText');
    $(document).scroll(function () {
        // navbar
        if ($(this).scrollTop() < 100) {
            navabr.style.backgroundColor = '';
        } else {
            navabr.style.backgroundColor = '#F7F7F7';
        }
        //about paralex
        if($(this).scrollTop() > 400 &&  $(this).scrollTop() < 1000   ){            
           aboutText.style.top = -($(this).scrollTop() - 800)/2 +'px' ;
        }
       
       
    });

    //get recent Posts
    document.getElementById('rpw').innerHTML = '';
    $.getJSON(jsonUrl, {})
        .done(function (data) {
            $.each(data.items, function (i, item) {
                paintRecentPosts(item['url'], item['title'], item['images'][0]['url'], (item['labels']) ? item['labels'][0] : 'UNCATEGORIZED');
            });
        });



});





function paintRecentPosts(url, title, thumb, lab) {
    let articleTemplate = `<a role="article" href="` + url + `" class="card recent-post">
                        <div class="thumb-wrap">
                            <img src="` + thumb + `" alt="` + 'image for : ' + title + `">
                        </div>
                        <footer>
                            <h3 class="label">` + lab + `</h3>
                            <h2 class="title">` + title + `</h2>
                        </footer>
                    </a>`;
    const wraper = document.getElementById('rpw');
    wraper.innerHTML += articleTemplate;
    articleTemplate = null;
}