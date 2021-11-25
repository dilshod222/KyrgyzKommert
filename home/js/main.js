function showMenu() {
    if (window.screen.width<993) {
        document.getElementById('left-menu').classList.toggle("left-menu");
        if (document.getElementById('left-menu').classList.contains('left-menu')) {
            document.getElementById('democollapse').innerHTML = '&times';
            document.getElementById('main').style.opacity=0.45;

        }

        else {
            document.getElementById('main').style.opacity=1;
            document.getElementById('democollapse').style.backgroundColor = 'white';
            document.getElementById('democollapse').innerHTML = '<span class="icon-humburger"></span>\n' +
                '                        <span class="icon-humburger"></span>\n' +
                '                        <span class="icon-humburger"></span>'
        }
    }

    else {
        document.getElementById('left-menu').classList.remove('left-menu');
    }

}

let a = document.getElementById('target')

a.addEventListener('click', function () {
    document.querySelector('div').hide()
})


// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });