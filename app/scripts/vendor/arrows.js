var currentClick = false;
var currentNum = 1;
var className = "image-slider";
var globalCount = -1;
var mainInterval;

function changeBGImage(num, stopInterval = false) {
  if (currentClick) {
    return;
  }

	currentClick = true;

	var mainClass = document.getElementsByClassName(className);
	mainClass = mainClass[0];

	if (!mainClass) {
		currentClick = false;
		return;
	}

	var count = 0;
	currentNum = 1;

	for (var i = 1; i <= 100; i++) {
		var element = mainClass.querySelector('[id=img' + i + ']');

		if (element) {
			var opacity = element.style.opacity;

			if (opacity == 1) {
				currentNum = i;
			}

			count++;
		} else {
			break;
		}
	}

	//add num
	currentNum = num;

	//z-index change
	for (var i = 1; i <= 100; i++) {
		var element = mainClass.querySelector('[id=img' + i + ']');

		if (element) {
			element.style.zIndex = (i == currentNum ? "1" : "0");
		} else {
			break;
		}
	}


	//show current element
	for (var i = 1; i <= 100; i++) {
		var element = mainClass.querySelector('[id=img' + i + ']');
		var arrow = mainClass.querySelector('[id=arrow' + i + ']');

		if (element) {
			if (i == currentNum) {
				element.style.opacity = "1";
			}
		} else {
			break;
		}
	}

	var currentThumb = currentNum;

	//modify current thumbnail
	for (var i = 1; i <= 100; i++) {
		var iThumb = i;

		var elementThumb = mainClass.querySelector('[id=thumb' + iThumb + ']');

		if (elementThumb) {
			if (iThumb == currentThumb) {
				if(elementThumb) {
					elementThumb.classList.add("activeBorder");
				}
			}
			else {
				if(elementThumb) {
					elementThumb.classList.remove("activeBorder");
				}
			}
		} else {
			break;
		}
	}

	//hide rest after animation ends

	if (stopInterval) {
		//interval reset
		clearInterval(mainInterval);
	}

	setTimeout(function() {
		for (var i = 1; i <= 100; i++) {
			var element = mainClass.querySelector('[id=img' + i + ']');
			var arrow = mainClass.querySelector('[id=arrow' + i + ']');

			if (element) {
				if (i != currentNum) {
					element.style.opacity = "0";
				}
        else {
          element.style.opacity = "1";
        }
			} else {
				break;
			}
		}

		currentClick = false;

	}, 300);
}

function getCount() {
	if(globalCount>0) {
		return globalCount;
	}

	var count = 0;

	var mainClass = document.getElementsByClassName(className);
	mainClass = mainClass[0];

	if (!mainClass) {
		return 0;
	}


	for (var i = 1; i <= 100; i++) {
		var element = mainClass.querySelector('[id=img' + i + ']');

		if (element) {
			count++;
		} else {
			break;
		}
	}

	globalCount = count;

	return count;
}

function startInterval() {
	mainInterval = setInterval(
		function() {
			currentNum += 1;

			if (currentNum < 1) {
				currentNum = getCount();
			}
			if (currentNum > getCount()) {
				currentNum = 1;
			}

			changeBGImage(currentNum);
		},
	3000);
}

function changeBGImageArrow(sign) {
  currentNum += sign;

  if (currentNum < 1) {
    currentNum = getCount();
  }
  if (currentNum > getCount()) {
    currentNum = 1;
  }

  changeBGImage(currentNum, true);
}

$(document).ready(function() {
	startInterval();
	changeBGImage(1);
});
