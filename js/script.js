let menu = document.getElementById('menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active')
    } else {
        document.querySelector('header').classList.remove('active')
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active')
    } else {
        document.querySelector('header').classList.remove('active')
    }

}

document.querySelector('.home').onmousemove = e => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;
        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
}
document.querySelector('.home').onmouseleave = e => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        elm.style.transform = `translateX(0px) translateY(0px)`
    })
}

var swiper = new Swiper(".herbs-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 5,
        },
    },
});
var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1040: {
            slidesPerView: 4,
        },
    },
});
var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1040: {
            slidesPerView: 3,
        },
    },
});



const cartDescription = document.querySelectorAll('.herbs .box .content p');
function ellipsify(cartDescription) {
    if (cartDescription.length > 100) {
        cartDescription = cartDescription.substring(0, 100)+"...";
    }
    return cartDescription;
}

cartDescription.forEach(element => {
    element.textContent = ellipsify(element.textContent)
});