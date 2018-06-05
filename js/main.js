$(document).ready(function () {
    const JSON_URL = 'https://www.googleapis.com/blogger/v3/blogs/2314533088766474219/posts?fetchImages=true&maxResults=3&orderBy=published&status=live&fields=items(url%2C%20title%20%2C%20images%2Clabels)&key=AIzaSyCgjuDZI1CeoTKYdVA3VagzC6tjjSRBLhs';


    /**
     * Create A Post NodeElement
     */
    function getPostElement(title, img, url) {
        var postElement = document.createElement('A');
        // postElement.classList.add('col-md-4');
        // postElement.classList.add('col-sm-6');
        // postElement.classList.add('bpost');
        postElement.className = "col-md-4 col-sm-6 bpost";
        postElement.href = url;

        //create childs
        var titleElement = document.createElement('H4');
        titleElement.innerHTML = title;
        titleElement.classList.add('bpost__title');

        var imgElement = document.createElement('IMG');
        imgElement.src = img;
        imgElement.classList.add('bpost__image');
        
        // append childs
        postElement.appendChild(imgElement);
        postElement.appendChild(titleElement);
        return postElement;
    }


    function paintPosts() {
        var posts = document.getElementById('posts');
        posts.innerHTML = '';

        $.getJSON(JSON_URL, {})
            .done(function (data) {
                $.each(data.items, function (i, item) {
                    posts.appendChild(getPostElement(item['title'], item['images'][0]['url'], item['url']));
                });
            });
    }

    $("#toTop").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({scrollTop: 0}, 1000);
     });
    paintPosts();
});