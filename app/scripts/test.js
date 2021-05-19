function replaceAll(string, strOld, strNew) {
  if (strOld != strNew) {
    while (string.indexOf(strOld) > -1) {
      string = string.replace(strOld, strNew)
    }
  }
  return string
}

function firstCharToUppercase(str) {
  return str.replace(/\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
}

var newNum = 0
var array1 = ['Abby', 'Aftertime', 'Algor', 'Alisio']
var array2 = ['Antithesis', 'Backdrop', 'Bridgewater', 'Brookside']
var array3 = ['Brume', 'Cadet', 'Capital', 'Carob']
var array4 = ['Cold_Snap', 'Droid', 'Ebb', 'Teal_Orange']
var array5 = ['Eminence', 'Flaxen', 'Forsythia', 'Griffin']
var array6 = ['Hailstone', 'Harvest', 'Hickory', 'Hunter']
var array7 = ['Iguana', 'Kelly', 'Lambent', 'Meridies']
var array8 = ['Morrow', 'Mulberry', 'Nepeta', 'Nuclear']
var array9 = ['Nugget', 'Outback', 'Perseverance', 'Prussian']
var array10 = ['Regiment', 'Russet', 'Salamander', 'Sangria']
var array11 = ['Sentinel', 'Sherbert', 'Sorrel', 'Sterling']
var array12 = ['Summit', 'Terra', 'Tourmaline', 'Uniform']
var array13 = ['Unspoken', 'Woodland']

setPreviewsSiteFromArrow(1)

function setPreviewsSiteFromArrow(num) {
  newNum += num

  if (newNum < 1) {
    newNum = 13
  } else if (newNum > 13) {
    newNum = 1
  }

  var array

  switch (newNum) {
    case 1:
      array = array1
      break
    case 2:
      array = array2
      break
    case 3:
      array = array3
      break
    case 4:
      array = array4
      break
    case 5:
      array = array5
      break
    case 6:
      array = array6
      break
    case 7:
      array = array7
      break
    case 8:
      array = array8
      break
    case 9:
      array = array9
      break
    case 10:
      array = array10
      break
    case 11:
      array = array11
      break
    case 12:
      array = array12
      break
    case 13:
      array = array13
      break

    default:
  }

  for (i = 0; i < 4; i++) {
    var title = document.getElementById('prTitle' + (i + 1))
    var img1 = document.getElementById('prImg' + (i + 1) + '1')
    var img2 = document.getElementById('prImg' + (i + 1) + '2')

    if (newNum == 13) {
      if (i <= 1) {
        title.innerHTML = firstCharToUppercase(replaceAll(array[i], '_', ' '))
        img1.src =
          'https://s3.motionvfx.com/mvfxpublic/products/templates/1311/media/' +
          array[i] +
          '_before.jpg'
        img2.src =
          'https://s3.motionvfx.com/mvfxpublic/products/templates/1311/media/' +
          array[i] +
          '_after.jpg'
      } else {
        title.style.display = 'none'
        img1.style.display = 'none'
        img2.style.display = 'none'
      }
    } else {
      title.style.display = 'block'
      img1.style.display = 'block'
      img2.style.display = 'block'

      title.innerHTML = firstCharToUppercase(replaceAll(array[i], '_', ' '))
      img1.src =
        'https://s3.motionvfx.com/mvfxpublic/products/templates/1311/media/' +
        array[i] +
        '_before.jpg'
      img2.src =
        'https://s3.motionvfx.com/mvfxpublic/products/templates/1311/media/' +
        array[i] +
        '_after.jpg'
    }
  }

  // document.getElementById("prevSiteInfo1").innerHTML = "Page " + newNum + "/8";
  document.getElementById('prevSiteInfo2').innerHTML = 'Page ' + newNum + '/13'
}

function hoverOnPrContainer(num, opacity) {
  var elementId = document.getElementById('handleImg' + num)
  elementId.style.opacity = opacity
}
