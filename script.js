import KUTE from 'https://cdn.jsdelivr.net/npm/kute.js@2.2.4/+esm'

var menuButton = document.getElementById("toggle");
var sideNav = document.getElementById("side-nav");
var searchBar = document.getElementById("searchBar");
var searchGlass = document.getElementById("searchGlass");
var sideList = document.getElementById("side-options1");
var sideListClothing = document.getElementById("side-list-clothing");
var sideListItems = document.getElementsByClassName("item");
var sideListItemsC = document.getElementsByClassName("itemC");
var overlay = document.getElementById("overlay");
var sideOpBtns = document.getElementsByClassName("SideOp-btn");
var genderOpBtns = document.getElementsByClassName("gender-option");
var mainPageWomen = document.getElementsByClassName("mainPageWomen");
var searchBarWidth
var textWidth
var sideNavClassList = sideNav.classList;
var i;

searchBar.style.width = "0px";

function expandMenu(){
    if (sideNavClassList[2] == "side-nav-short"){
        sideNavClassList.remove("side-nav-short");
        sideNavClassList.add("side-nav-extended");
        overlay.style.display = "block";
        sideList.style.visibility = "visible";
        sideListClothing.style.visibility = "hidden";
        for(i=0; i<sideListItems.length; i++){
            sideListItems[i].style.transitionDelay = ((i*0.05)+0.1)+"s";
            sideListItems[i].style.opacity = 1;
        }
    }
    else{
        sideNavClassList.remove("side-nav-extended");
        sideNavClassList.add("side-nav-short");
        overlay.style.display = "none";
        for(i=0; i<sideListItems.length; i++){
            sideListItems[i].style.transitionDelay = "0s";
            sideListItems[i].style.opacity = 0;
            if(i<sideListItemsC.length){
                sideListItemsC[i].style.transitionDelay = "0s";
                sideListItemsC[i].style.opacity = 0;
            }
        }
        sideList.style.transform = "translateX(0px)";
        sideList.style.visibility = "hidden";
    }
}
function showSearchBar(){
    if (searchBar.style.width === '0px'){
        searchBar.value = "";
        searchBar.style.width = "150px";
    }
    else
    {
        searchBar.style.width = "0px";
    }
}
function expandSearchBar(){
    searchBarWidth = searchBar.offsetWidth;
    textWidth = searchBar.scrollWidth;
    if(textWidth > searchBarWidth){
        searchBarWidth = searchBarWidth + (textWidth-searchBarWidth);
        searchBar.style.width = searchBarWidth + "px";
    }
}
function unfocusSearchBar(){
    searchBar.style.borderColor = "#8b4513";
    textWidth = getTextWidth(searchBar.value, getComputedStyle(searchBar).font);
    console.log(textWidth);
    if (searchBarWidth > 154 && textWidth <= 154){
        searchBarWidth = 154;
        searchBar.style.width = searchBarWidth + "px";
    }
}
function getTextWidth(text, font){
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return Math.ceil(metrics.width);
}
function focusSearchBar(){
    searchBar.style.borderColor = "#462209";
}
function sideOpExpand(index){
    sideList.style.transform = "translateX(-200px)";
    var clickedBtn
    switch (index.target){
        case sideOpBtns[0]:
                clickedBtn = 0;
                sideListClothing.style.opacity = 1;
                sideListClothing.style.visibility = "visible";
                for(i=0; i<sideListItemsC.length; i++){
                    sideListItemsC[i].style.transitionDelay = ((i*0.05)+0.1)+"s";
                    sideListItemsC[i].style.opacity = 1;
                }
                break;
        case sideOpBtns[1]: clickedBtn = 1; console.log(clickedBtn); break;
        case sideOpBtns[2]: clickedBtn = 2; console.log(clickedBtn); break;
        case sideOpBtns[3]: clickedBtn = 3; console.log(clickedBtn); break;
        case sideOpBtns[4]: clickedBtn = 4; console.log(clickedBtn); break;
    }
}
function switchGender(index){
    var clickedBtn
    clickedBtn = index.target;
    if (clickedBtn.classList.item(1) == "greyed"){
        if(clickedBtn == genderOpBtns[0]){
            genderOpBtns[0].classList.remove("greyed");
            genderOpBtns[0].classList.add("blacked");
            genderOpBtns[1].classList.remove("blacked");
            genderOpBtns[1].classList.add("greyed");
            for(i=0; i<mainPageWomen.length; i++){
                mainPageWomen[i].style.transform = "translateX(0)"
            }
        }
        else{
            genderOpBtns[1].classList.remove("greyed");
            genderOpBtns[1].classList.add("blacked");
            genderOpBtns[0].classList.remove("blacked");
            genderOpBtns[0].classList.add("greyed");
            for(i=0; i<mainPageWomen.length; i++){
                mainPageWomen[i].style.transform = "translateX(-100%)"
            }
        }
    }
}

menuButton.addEventListener("click", expandMenu);
searchGlass.addEventListener("click", showSearchBar);
searchBar.addEventListener("input",expandSearchBar);
searchBar.addEventListener("blur",unfocusSearchBar);
overlay.addEventListener("click",expandMenu);
searchBar.addEventListener("focus",focusSearchBar);
for (i=0; i<sideOpBtns.length; i++){
    sideOpBtns[i].addEventListener("click",sideOpExpand);
    if (i<genderOpBtns.length){
        genderOpBtns[i].addEventListener("click",switchGender)
    }
}

const tween1 = KUTE.fromTo(
    '#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    {repeat: 999, duration: 3000, yoyo:true},
)
const tween2 = KUTE.fromTo(
    '#blob3',
    {path: '#blob3'},
    {path: '#blob4'},
    {repeat: 999, duration: 3000, yoyo:true},
)
tween1.start();
tween2.start();
//u were working on the side items and making the arrow not toggle the checkbox