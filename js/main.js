/*===== change the menu icon =====*/
let i = 1;

function togglerNav(tog) {
    if (i == 1) {
        tog.setAttribute('src', '../images/icons/close.svg');
        i = 0;

        document.getElementById("navMenu").classList.remove('close');
    } else if (i == 0) {
        tog.setAttribute('src', '../images/icons/bar.svg');
        i = 1;

        document.getElementById("navMenu").classList.add('close');
    }
}

/*===== change the menu style =====*/
if (window.innerWidth >= 991) {
    document.getElementById("navMenu").classList.remove('open');
    document.getElementById("navMenu").classList.remove('close');
}

window.addEventListener('resize', function () {
    /* closes menu when screen size changes */
    document.getElementById("navMenu").classList.add('close');
    document.getElementById("imgNav").setAttribute('src', '../images/icons/bar.svg');
    i = 1;

    /* remove mobile */
    if (screen.width >= 991 || window.innerWidth >= 991) {
        document.getElementById("navMenu").classList.remove('open');
        document.getElementById("navMenu").classList.remove('close');
    }

    /* add mobile */
    if (screen.width <= 991 || window.innerWidth <= 991) {
        document.getElementById("navMenu").classList.add('close');
        document.getElementById("navMenu").classList.add('open');
    }
})

/*add mobile when refreshing the page*/
if (screen.width <= 991) {
    document.getElementById("navMenu").classList.add('close');
    document.getElementById("navMenu").classList.add('open');
}

/*===== Menu selection section =====*/
/* add "active" */
document.getElementById('home-menu').classList.add('active');

let about, projects;

function changeMenu(btn) {
    /* change menu icon */
    document.getElementById("imgNav").setAttribute('src', '../images/icons/bar.svg');
    i = 1;

    /* remove mobile */
    if (screen.width <= 991) {
        document.getElementById("navMenu").classList.add('close');
    }

    /* remove the previous "active" */
    document.getElementById('home-menu').classList.remove('active');
    document.getElementById('about-menu').classList.remove('active');
    document.getElementById('projects-menu').classList.remove('active');

    /* add "active" */
    btn.classList.add('active');

    /* change the header */
    if (btn.id == "about-menu" || btn.id == "projects-menu") {
        document.getElementById('bg-dark').style.opacity = "1";
        document.getElementById('bg-dark').style.visibility = "visible";

        document.getElementById('home-area').style.opacity = "0";
        document.getElementById('home-area').style.visibility = "hidden";
    }
    else if (btn.id == "home-menu") {
        document.getElementById('bg-dark').style.opacity = "0";
        document.getElementById('bg-dark').style.visibility = "hidden";

        document.getElementById('home-area').style.opacity = "1";
        document.getElementById('home-area').style.visibility = "visible";
    }

    /* change the main screen */
    if (btn.id == "about-menu") {
        about = 1;

        if (projects == 1) {
            document.getElementById('projects-area').classList.remove('show');
        }

        document.getElementById('about-me').classList.add('show');
        document.getElementById('img-profile').classList.add('show-fluid-left');

        /* Progress-bar */
        barsAbout();
    }

    if (btn.id == "home-menu" && about == 1) {
        about = 0;
        document.getElementById('about-me').classList.remove('show');
        document.getElementById('img-profile').classList.remove('show-fluid-left');

        /* Progress-bar */
        barsHome();
    }

    if (btn.id == "projects-menu") {
        projects = 1;

        if (about == 1) {
            document.getElementById('about-me').classList.remove('show');
            document.getElementById('img-profile').classList.remove('show-fluid-left');
        }

        document.getElementById('projects-area').classList.add('show');
    }

    if (btn.id == "home-menu" && projects == 1) {
        projects = 0;
        document.getElementById('projects-area').classList.remove('show');
    }
}

/* Progress-bar */
function barsHome() {
    document.getElementById('html').style.width = "0%";
    document.getElementById('css').style.width = "0%";
    document.getElementById('js').style.width = "0%";
    document.getElementById('bts').style.width = "0%";
    document.getElementById('c').style.width = "0%";
    document.getElementById('pl-sql').style.width = "0%";
    document.getElementById('t-sql').style.width = "0%";
    document.getElementById('java').style.width = "0%";
}

function barsAbout() {
    document.getElementById('html').style.width = "100%";
    document.getElementById('css').style.width = "100%";
    document.getElementById('js').style.width = "90%";
    document.getElementById('bts').style.width = "70%";
    document.getElementById('c').style.width = "90%";
    document.getElementById('pl-sql').style.width = "60%";
    document.getElementById('t-sql').style.width = "60%";
    document.getElementById('java').style.width = "50%";
}

/*===== Projects Section =====*/
function changeIconOver(box) {
    if (box.id == "gitIcon") {
        box.children[0].children[0].setAttribute('src', '../images/icons/githubGreen.svg');
    }
    else {
        box.children[0].children[0].setAttribute('src', '../images/icons/webGreen.svg');
    }

}

function changeIconLeave(box) {
    if (box.id == "gitIcon") {
        box.children[0].children[0].setAttribute('src', '../images/icons/github.svg');
    }
    else {
        box.children[0].children[0].setAttribute('src', '../images/icons/web.svg');
    }
}