const boxStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  width: '300px',
  zIndex: 100,
  background: '#fff',
}

function joinStyles(styleObject) {
  return Object.entries(styleObject).map(([key, value]) => `${key}: ${value}`).join(';')
}

function lafyun () {
  const body = document.querySelector('body')
  if (!body) return
  const box = document.createElement('div')
  box.className = 'box show'
  body.appendChild(box)
}

lafyun()
