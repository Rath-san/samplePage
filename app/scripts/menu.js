var menuArrowState = 0;
var smallWidth = 992;

function isSmall() {
  var windowWidth = window.innerWidth;
  return (windowWidth < smallWidth ? 1 : 0);
}

function checkWidthForMenu() {
  var menu = document.getElementsByClassName("submenu-plugins-left");

  var small = isSmall();

  for (var i = 0; i < menu.length; i++) {
    var menuInside = menu[i];

    if (small == 1) {
      menuInside.classList.add("menu-row-top");
      setTimeout(function() {
        menuInside.classList.add("transition");
      }, 100);

      var menuAHref = menuInside.getElementsByTagName("a");

      for (var j = 0; j < menuAHref.length; j++) {
        menuAHref[j].classList.add("menu-row");
      }

      var menuImg = menuInside.getElementsByTagName("img");

      for (var j = 0; j < menuImg.length; j++) {
        menuImg[j].classList.add("menu-row");
      }
    } else {
      menuInside.style.removeProperty("border");
      menuInside.style.removeProperty("height");
      menuInside.style.removeProperty("margin-left");

      menuInside.classList.remove("transition");
      menuInside.classList.remove("menu-row-top");

      var menuAHref = menuInside.getElementsByTagName("a");

      for (var j = 0; j < menuAHref.length; j++) {
        menuAHref[j].classList.remove("menu-row");
      }

      var menuImg = menuInside.getElementsByTagName("img");

      for (var j = 0; j < menuImg.length; j++) {
        menuImg[j].classList.remove("menu-row");
      }
    }
  }

  var arrow = document.getElementsByClassName("submenu-plugins-left-arrow");

  for (var i = 0; i < arrow.length; i++) {
    var arrowInside = arrow[i];

    arrowInside.style.opacity = (small == 1 ? "1" : "0");

    if (small == 0) {
      var arrowImg = arrowInside.getElementsByTagName("img");

      for (var j = 0; j < arrowImg.length; j++) {
        menuArrowState = 0;
        arrowImg[j].style.transform = "rotate(0)";
      }
    }
  }
}

function clickOnMenuArrow() {
  if(!isSmall()) {
    return;
  }

  menuArrowState = (menuArrowState == 0 ? 1 : 0);

  var arrow = document.getElementsByClassName("submenu-plugins-left-arrow");
  var marginLeft = "0";

  for (var i = 0; i < arrow.length; i++) {
    var arrowInside = arrow[i];
    marginLeft = arrowInside.offsetLeft;

    var arrowImg = arrowInside.getElementsByTagName("img");

    for (var j = 0; j < arrowImg.length; j++) {
      arrowImg[j].style.transform = (menuArrowState == 1 ? "rotate(180deg)" : "rotate(0)");
    }
  }

  var menu = document.getElementsByClassName("submenu-plugins-left");

  for (var i = 0; i < menu.length; i++) {
    var menuInside = menu[i];

    var border = "0px solid rgba(255,255,255,0.2)";
    var height = "0";

    if (menuArrowState) {
      border = "1px solid rgba(255,255,255,0.2)";
      height = "132px";
      menuInside.style.marginLeft = marginLeft + "px";
    }

    if (menuArrowState) {
      menuInside.style.border = border;
    } else {
      setTimeout(function() {
        menuInside.style.border = border;
      }, 300);
    }

    menuInside.style.height = height;
  }
}

function clickOnMenuItem(item, scroll = 1) {
  var small = isSmall();

  //menu close
  if (small == 1) {
    clickOnMenuArrow();
  }

  if (scroll == 1) {
    scrollToAnchor(item);
  } else {
    window.location = item;
  }
}

function checkButtons() {
  var screenTop = document.documentElement.scrollTop;
  //safari fix
  if (screenTop == 0) {
    screenTop = document.body.scrollTop;
  }

    var footerCheck = document.getElementsByClassName("footer");

	if(footerCheck.length>0) {
		var footer = $(".footer");
		var screenBottom = screenTop + footer.height();
	  var boxTop = footer.offset().top;
	  var boxHeight = footer.height();

	  var percent = Math.round((screenBottom - boxTop) / boxHeight * 100);

	  var opacity = 1;
	  if (percent > 84) {
	    opacity = 0;
	  }

	  var menu = document.getElementsByClassName("submenu-plugins-right");
	  menu[0].style.opacity = opacity;
	}
}

$(document).ready(function() {
  checkWidthForMenu();
  checkButtons();

  $(document).scroll(function() {
    checkButtons();
  });

  document.getElementsByTagName("BODY")[0].onresize = function() {
    checkWidthForMenu();
  };
});
