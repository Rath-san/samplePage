window.scrollToAnchor = (aid) => {
  var aTag = $("a[name='" + aid + "']")
  $('html,body').animate(
    { scrollTop: $(aTag).offset().top + $(aTag).height() },
    'slow'
  )
  return false
}
