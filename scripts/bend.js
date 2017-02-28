const fs = require('fs')

const directory = process.argv[2]
const line = `import Playground from './${directory}'`

function bend(filename) {
  const contents = fs.readFileSync(filename, { encoding: 'utf-8' })
  const newContents = contents.replace(/import Playground(.)+/g, line)
  fs.writeFileSync(filename, newContents)
}

bend('index.android.js')
bend('index.ios.js')
