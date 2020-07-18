const sass = require('node-sass')
const fs = require('fs')

const sassOptions = {
  file: './src/TUI.scss',
  outFile: './dist/TUI.css'
}

const writeComplete = (err) => {
  if (err) console.error(err)
  else console.log('Success!')
}

const renderComplete = (err, result) => {
  if (err) console.error(err)
	else {
		if (!fs.existsSync('./dist')) {
			fs.mkdirSync('./dist')
		}

		fs.writeFile(sassOptions.outFile, result.css, writeComplete)
	}
}

fs.watch('./src/', (eventType, filename) => {
	if ( filename ) {
		console.log('Event: ', eventType)
		console.log('File: ', filename)
		sass.render(sassOptions, renderComplete)
	}
})

