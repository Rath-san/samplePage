export const OSs = {
  Windows: 'win',
  MacOS: 'mac',
  // UNIX: 'x11',
  Linux: 'linux'
}

const searchForEntry = (os, input) => RegExp(`${os}`, 'i').test(input)

export const detectOs = () => {
  let OSName = 'Unknown OS'

  Object.keys(OSs).forEach(OSsKey => {
    if (searchForEntry(OSs[OSsKey], navigator.appVersion)) OSName = OSs[OSsKey]
  })

  // Display the OS name
  return OSName
}
