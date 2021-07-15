export default function initPrevs () {
  let spinnerTimeoutId // Loader timeout id of the currently hovered video. Stored for cancellation purposes.

  // Video hover event listener.
  $('body').on('mouseover', '.product-prev-cell', (e) => {
    let $previewWrapper = $(e.currentTarget)

    // Ensure that there in no other video already playing in the container.
    if ($previewWrapper.find('video').length === 0) {
      spawnVideo($previewWrapper)
    }
  })

  // Video mouse leave event listener.
  $('body').on('mouseleave', '.product-prev-cell', (e) => {
    let $previewWrapper = $(e.currentTarget)

    // Remove loader or interrupt showing one if not yet showed.
    clearTimeout(spinnerTimeoutId)
    $previewWrapper.find('.loading-spinner').removeClass('show')

    // Remove the video.
    $previewWrapper.find('.video-wrapper').remove()
  })

  /**
   * Creates video tag and starts the autoplay.
   * @param {Object} $previewWrapper - Wrapper element over the whole product preview.
   */
  function spawnVideo ($previewWrapper) {
    let mp4Url = $previewWrapper.data('mp4-src')

    // Add the video tag with source url.
    $previewWrapper.append(
      `<div class="video-wrapper"><video autoplay playsinline loop muted src="${mp4Url}" width="400" height="225"></video></div>`
    )

    // Wait at least 1 second before showing video loader.
    spinnerTimeoutId = setTimeout(() => {
      $previewWrapper.find('.loading-spinner').addClass('show')
    }, 1000)

    let $videoEl = $($previewWrapper.find('video')) // Get just added video element.

    $videoEl.on('canplay', () => {
      // $videoEl.addClass('d-flex'); // Video elements are in place, display it in the UI.

      // Start the playback.
      $videoEl[0].play().catch((e) => {
        // If playback was blocked by the browser (ex. safari blocks autoplay on videos with sound by defualt), mute the video and try again.
        if (e.name === 'NotAllowedError') {
          $videoEl.prop('muted', true) // Mute the video.
          $videoEl[0].play()
        } else {
          return e
        }
      })

      // Remove loader or interrupt showing one if not yet showed.
      clearTimeout(spinnerTimeoutId)
      $previewWrapper.find('.loading-spinner').removeClass('show')
    })
  }

  Array.from(document.querySelectorAll('.btn-collapse')).forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true'
      btn.setAttribute('aria-expanded', !expanded)
      $(btn.dataset.target).collapse('toggle')
    })
  })
}
