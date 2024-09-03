document.addEventListener('DOMContentLoaded', function() {
    const more_toggle = document.querySelector(".more-toggle");
    const views = document.querySelector(".views");
    more_toggle.addEventListener('click', () => {
        const viewport = views.classList.toggle("more-open");
        if(viewport){
            more_toggle.innerHTML = "Show less"
        }
        else{
            more_toggle.innerHTML = " More"
        }
    });
    });
var searchbar = document.getElementById("search");
var cover = document.getElementById("cover");
var show = document.getElementById("show");

searchbar.onclick = function(){
 cover.classList.toggle("incover")
};

const Remove_ad = document.querySelector(".Remove-Ad");
Remove_ad.addEventListener('click',() => {
    const ad = document.querySelector(".ad");
    ad.style.display = "none";
});


// 
const Dot = document.querySelectorAll('.dot');
Dot.forEach( dotcontent => {
    const button = dotcontent.querySelector('.dot-toggle');
    button.addEventListener('click', () => {
        const Dot_menus = dotcontent.querySelector('.dot-menus');
        Dot_menus.classList.toggle('dot-open');

        Dot.forEach(Hidedot => {
            if(Hidedot !== dotcontent){
                const Dropcon = Hidedot.querySelector('.dot-menus');
                Dropcon.classList.remove('dot-open');
            };
        });
    });
    window.addEventListener('click', function(event){
        if(!event.target.matches('.dot-toggle')){
            Dot.forEach( dotcontent => {
                const Dropcontent = dotcontent.querySelector('.dot-menus');
                Dropcontent.classList.remove('dot-open');
            });
        };
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const dropdowns = document.querySelectorAll('.dot');
//     dropdowns.forEach(dk => {
//         const button = dk.querySelector('.dot-toggle');
//         button.addEventListener('click', function() {
//             const dropdownContent = dk.querySelector('.dot-menus');
//             dropdownContent.classList.toggle('dot-open');

//             // Close other dropdowns if one is opened
//             dropdowns.forEach(otherDropdown => {
//                 if (otherDropdown !== dk) {
//                     const otherContent = otherDropdown.querySelector('.dot-menus');
//                     otherContent.classList.remove('dot-open');
//                 }
//             });
//         });
//     });

//     // Close the dropdown menu if the user clicks outside of it
//     window.addEventListener('click', function(event) {
//         if (!event.target.matches('.dot-toggle')) {
//             dropdowns.forEach(dk => {
//                 const dropdownContent = dk.querySelector('.dot-menus');
//                 dropdownContent.classList.remove('dot-open');
//             });
//         }
//     });
// });


  const skell_logo =    document.querySelectorAll('.skeleton-logo');
  const skell_p =       document.querySelectorAll('.skeleton-p');
  const skell_img =     document.querySelectorAll('.skeleton-img');
  const skell_channel = document.querySelectorAll('.skeleton-channel');
  const skell_none =    document.querySelectorAll('.skell-none');
  const skell_visible = document.querySelectorAll('.skell-visibility');
  const skell_nav =     document.querySelectorAll('.skell-nav');
  const skeleton =      document.querySelectorAll('.skeleton');
  const skell_dk =      document.querySelectorAll('.skell-dk');

window.addEventListener('load', function(){
    skell_logo.forEach(item => {
        item.classList.remove('skeleton-logo')
    })
    skell_img.forEach(item => {
        item.classList.remove('skeleton-img')
    })
    skell_p.forEach(item => {
        item.classList.remove('skeleton-p')
    })
    skell_channel.forEach(item => {
        item.classList.remove('skeleton-channel')
    })
    skell_none.forEach(item => {
        item.classList.remove('skell-none')
    })
    skell_visible.forEach(item => {
        item.classList.remove('skell-visibility')
    })
    skell_nav.forEach(item => {
        item.classList.remove('skell-nav')
    })
    skeleton.forEach(item => {
        item.classList.remove('skeleton')
    })
    skell_dk.forEach(item => {
        item.classList.remove('skell-dk')
    })
});

var menuicon = document.getElementById("menu");
var left_sidebar = document.getElementById("left-sidebar");

menuicon.onclick = function(){
 const store = left_sidebar.classList.toggle("left_sidebar");
 if(store){
     document.getElementById("row").className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 m-1";
     document.getElementById("row_two").className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 m-1";
     document.getElementById("hide").style.display ="none";
     document.getElementById("hide_two").style.display ="none";
     document.getElementById("row-shorts").className = "row short-videos row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-2 g-md-3 px-3 px-sm-0 ";
     document.getElementById("bringit").className = "row short-videos row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-2 g-md-3 px-3 px-sm-0 ";
     document.getElementById("bring-shorts").style.display ="block ";
     document.getElementById("bring-two").style.display ="block";
}
 else{
     document.getElementById("row").className = "row row-cols-1 row-cols-md-2 row-cols-lg-3  m-1";
     document.getElementById("row_two").className = "row row-cols-1 row-cols-md-2 row-cols-lg-3  m-1";
     document.getElementById("hide").style.display ="block";
     document.getElementById("hide_two").style.display ="block";
     document.getElementById("bring-shorts").style.display ="none";
     document.getElementById("bring-two").style.display ="none";
     document.getElementById("row-shorts").className = "row short-videos row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-2 g-md-3 px-3 px-sm-0 ";
     document.getElementById("bringit").className = "row short-videos row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-2 g-md-3 px-3 px-sm-0 ";

 }
};

// FOR SETTING TOGGLE;
const settings = document.querySelectorAll('.DKlogo');
settings.forEach( settingcon => {
    const setting_btn = settingcon.querySelector('.dropbtn');
    setting_btn.addEventListener('click',() => {
        const setting_menu = settingcon.querySelector('.settings');
        setting_menu.classList.toggle('set-display');
    });
    window.addEventListener('click',function(event){
        if(!event.target.matches('.dropbtn')){
            settings.forEach(settingcon => {
                const settcon = settingcon.querySelector('.settings');
                settcon.classList.remove('set-display'); 
            });
            
        };
    });
});

// const settings_toggle = document.querySelector('.dropbtn');

// settings_toggle.addEventListener ('click', () => {
//     const settings = document.querySelector('.settings');
//     settings.classList.toggle("set-display");
//     window.addEventListener('click',function(set){
//         if(!set.target.matches('.dropbtn')){
//             settings.classList.remove("set-display");
       
//         };
//     });
// }) ;








//  FOR FUNCTIONS USING EVENT LISTNER
 document.addEventListener("DOMContentLoaded", function() {
 const openBtn = document.getElementById('menu2');
 const closeBtn = document.getElementById('menuthree');
 const sidebar = document.getElementById('sm-mainbar');
 const display = document.getElementById('display');
 var main_navbar = document.getElementById('main-navbar');
 
 openBtn.addEventListener('click', function() {
     sidebar.style.left = '0';
     display.classList.toggle("opacity");
     main_navbar.classList.toggle("opacity");
     
    
 });

 closeBtn.addEventListener('click', function() {
     sidebar.style.left = '-250px';
     display.classList.remove("opacity");
     main_navbar.classList.remove("opacity");

 });

 window.addEventListener('click',function(event){
    if(!event.target.matches('.left-side-bar-toggle')){
        sidebar.style.left = '-250px';
        display.classList.remove("opacity");
        main_navbar.classList.remove("opacity");
    };
 });
 

 const shorts = document.getElementById('shorts');
 const short_cancel = document.getElementById('short-cancel');
 const short_open = document.getElementById('short-open');
 const undo_btn = document.getElementById('undo-btn');
 const show_more = document.getElementById('show-more');

 short_open.addEventListener('click', function() {
     shorts.style.display = 'block';
     undo_btn.style.display = 'none';
     show_more.style.display = 'flex';
 });
 short_cancel.addEventListener('click', function() {
     shorts.style.display = 'none ';
     undo_btn.style.display = 'block';
     show_more.style.display = 'none';

 });
 const bringit = document.getElementById('bringit');
 const show_shorts = document.getElementById('show');
 const close_shorts = document.getElementById('close_shorts');
 show_shorts.addEventListener('click', function() {
     bringit.style.display = 'flex ';
     show_shorts.style.display = 'none ';
     close_shorts.style.display = 'flex ';
 });
 close_shorts.addEventListener('click', function() {
     bringit.style.display = 'none ';
     show_shorts.style.display = 'flex  ';
     close_shorts.style.display = 'none ';

 });


 const search_toggle_open = document.getElementById('Search-Icon-Open');
 const search_toggle_close = document.getElementById('search-toggle-close');
 const searchbar_ON = document.getElementById('searchbar-ON');
 const header = document.getElementById('header');
search_toggle_open.addEventListener('click', function() {
     header.style.display = 'none';
     searchbar_ON.style.display = 'flex';
    
 });

search_toggle_close.addEventListener('click', function() {
     header.style.display = 'block';
     searchbar_ON.style.display = 'none';
    
 });



});



// FOR VIDEO_NAV BAR SCROLL
const tabsbox = document.querySelector(".tabs-box"),
alltabs = document.querySelectorAll(" .tab"),
Arrows = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = () => {
    let scrollval = Math.ceil(tabsbox.scrollLeft);
    let maxScrollableWidth = tabsbox.scrollWidth - tabsbox.clientWidth;
    console.log(maxScrollableWidth,scrollval)
    Arrows[0].parentElement.style.display = scrollval > 0 ? "flex" : "none";
    Arrows[1].parentElement.style.display = maxScrollableWidth > scrollval ? "flex" : "none";
}

Arrows.forEach(icon => {
    icon.addEventListener("click", () => {
       tabsbox.scrollLeft += icon.id === "left" ? -350 : 350;
       setTimeout(() =>  handleIcons(), 50);
    });
});
alltabs.forEach(tab => {
    tab.addEventListener("click", () => {
       tabsbox.querySelector(".active").classList.remove("active");
       tab.classList.add("active");
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsbox.classList.add("dragging")
    tabsbox.scrollLeft -= e.movementX;
    handleIcons()
}

const dragStop = () => {
    isDragging = false;
    tabsbox.classList.remove("dragging")

}
tabsbox.addEventListener("mousedown",() => isDragging = true);
tabsbox.addEventListener("mousemove",dragging);
tabsbox.addEventListener("mouseup",dragStop);

// FOR DROPDOWN

// login

function validate(){
    var user = document.dkform.username.value;
    var pass = document.dkform.password.value;

    if(user ==null || user == " "){
        alert("plz enter");
        return false;

    }
   
};



const SignOut = document.querySelector('.Sign-Out');
SignOut.addEventListener('click', function() {
    const Navbar = document.querySelector('.right-navbar');
    const LeftSideBar = document.querySelector('.Subscriptions');
    const YTvideos = document.querySelector('.set-h');
    const AD = document.querySelector('.ad');

    Navbar.classList.toggle('SignOut-Nav');
    LeftSideBar.classList.toggle('SignOut-Left');
    YTvideos.classList.toggle('SignOut-Video');
    AD.classList.toggle('SignOut-ad');
});










//  VIDEO PLAYER PAGE JAVA SCRIPT CODES ///////////////

