//theme change


var body = document.querySelector(".light-body");
var navbar = document.querySelector(".light-navbar");
var logo = document.querySelector(".logo");
var themeBtn = document.querySelector(".light-theme__btn");
var navSocialLinks = document.querySelector(".light-nav__social-links");
var socialTags = document.querySelector(".social-tags");
var hamburgerOpen = document.querySelector(".ham1")
var hamburger = document.querySelector(".hamburger")
var mobileNav = document.querySelector(".mobile-nav");
var ham1 = document.querySelectorAll(".ham")[0]
var ham2 = document.querySelectorAll(".ham")[1]
var ham3 = document.querySelectorAll(".ham")[2]
var mobileBrand = document.querySelector(".mobile-brand")
var mySignature = document.querySelector(".my-signature")
var header = document.querySelector(".header-main")
//icons
var icon1 = document.querySelectorAll(".icon1")[0]
var icon2 = document.querySelectorAll(".icon1")[1]
var icon3 = document.querySelectorAll(".icon1")[2]
var icon4 = document.querySelectorAll(".icon1")[3]
var icon5 = document.querySelectorAll(".icon1")[4]
var icon6 = document.querySelectorAll(".icon1")[5]
var icon7 = document.querySelectorAll(".icon1")[8]
var icon8 = document.querySelectorAll(".icon1")[9]
var icon9 = document.querySelectorAll(".icon1")[10]
var icon10 = document.querySelectorAll(".icon1")[11]
var icon11 = document.querySelectorAll(".icon1")[12]
var icon12 = document.querySelectorAll(".icon1")[13]
var icon13 = document.querySelectorAll(".icon1")[14]
var icon14 = document.querySelectorAll(".icon1")[15]
var icon15 = document.querySelectorAll(".icon1")[22]
var icon16 = document.querySelectorAll(".icon1")[23]
var icon17 = document.querySelectorAll(".icon1")[24]
var icon18 = document.querySelectorAll(".icon1")[25]
var icon19 = document.querySelectorAll(".icon1")[26]
var icon20 = document.querySelectorAll(".icon1")[27]
var backdrop = document.querySelector(".backdrop")
var indexCTA = document.querySelector(".index-cta")
var profile = document.querySelector(".profile-main")
var contact = document.querySelector(".contact")

function changeTheme() {
    body.classList.toggle("dark-body");
    navbar.classList.toggle("dark-navbar");
    themeBtn.classList.toggle("dark-theme__btn");
    navSocialLinks.classList.toggle("dark-nav__social-links");
    hamburger.classList.toggle("dark-hamburger")
    ham1.classList.toggle("dark-ham")
    ham2.classList.toggle("dark-ham")
    ham3.classList.toggle("dark-ham")
    mobileBrand.classList.toggle("dark-mobile__brand")
    mySignature.classList.toggle("dark-signature")
    header.classList.toggle("dark-main")
    //icons
    icon1.classList.toggle("icon1-dark")
    icon2.classList.toggle("icon1-dark")
    icon3.classList.toggle("icon1-dark")
    icon4.classList.toggle("icon1-dark")
    icon5.classList.toggle("icon1-dark")
    icon6.classList.toggle("icon1-dark")
    icon7.classList.toggle("icon1-dark")
    icon8.classList.toggle("icon1-dark")
    icon9.classList.toggle("icon1-dark")
    icon10.classList.toggle("icon1-dark")
    icon11.classList.toggle("icon1-dark")
    icon12.classList.toggle("icon1-dark")
    icon13.classList.toggle("icon1-dark")
    icon14.classList.toggle("icon1-dark")
    icon15.classList.toggle("icon1-dark")
    icon16.classList.toggle("icon1-dark")
    icon17.classList.toggle("icon1-dark")
    icon18.classList.toggle("icon1-dark")
    icon19.classList.toggle("icon1-dark")
    icon20.classList.toggle("icon1-dark")
    backdrop.classList.toggle("dark-backdrop")
    indexCTA.classList.toggle("dark-index__cta")
    profile.classList.toggle("dark-text")
    contact.classList.toggle("dark-text")
}

function openNav() {
    hamburgerOpen.classList.toggle("ham-open");
    mobileNav.classList.toggle("display");
    hamburger.classList.toggle("hamburger-open")
    backdrop.classList.toggle("display")
    var audio = new Audio('sounds/button-11.mp3');
    audio.play();
}