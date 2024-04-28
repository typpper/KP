function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const isActive = menuItems.classList.contains('active');

    if (isActive) {
        menuItems.classList.remove('active');
    } else {
        menuItems.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var scrollingElement = document.querySelector('nav');

    function handleScroll() {
        var mediaQuery = window.matchMedia('(min-width: 769px)');

        if (mediaQuery.matches) {
            var scrollPosition = window.scrollY;

            if (scrollPosition > 300) {
                scrollingElement.style.backgroundColor = 'rgba(20, 20, 20, 1)';
            } else {
                scrollingElement.style.backgroundColor = 'rgba(20, 20, 20, 0)';
            }
        }
    }

    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu');

    burgerIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
        burgerIcon.classList.toggle('change');
    });
    menu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            burgerIcon.classList.remove('change');
        });
    });

    window.addEventListener('scroll', handleScroll);
});

$(document).ready(function() {  
    ajaxGetXML(); 
})

function ajaxGetXML(){ 
$.ajax({ 
    type: "GET", 
    url: "footer.xml", 
    dataType: "xml", 
    success: function(data) { 
        var html = ""; 
        $(data).find('block').each(function(){ 
            var brand = $(this).find('brand').html(); 
            var note = $(this).find('note').html(); 
            html += "<p>"+brand+"</p>"; 
            html += "<p>"+note+"</p>";   
        });          
        $('footer').html(html); 
    }, 
    error: function() {
        console.log("Ошибка при загрузке XML файла.");
    }
}); 
}
