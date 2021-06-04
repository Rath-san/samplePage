export const OSs = {
  Windows: 'Win',
  MacOS: 'Mac',
  UNIX: 'X11',
  Linux: 'Linux',
}

// if (navigator.appVersion.indexOf('Win') != -1) OSName = 'Windows'
// if (navigator.appVersion.indexOf('Mac') != -1) OSName = 'MacOS'
// if (navigator.appVersion.indexOf('X11') != -1) OSName = 'UNIX'
// if (navigator.appVersion.indexOf('Linux') != -1) OSName = 'Linux'

export const detectOs = () => {
  let OSName = 'Unknown OS'

  Object.keys(OSs).forEach(OSsKey => {
    if (navigator.appVersion.indexOf(OSs[OSsKey]) != -1) OSName = OSsKey
  })

  // Display the OS name
  return OSName
}
