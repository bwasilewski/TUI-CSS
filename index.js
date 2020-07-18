const sass = require('node-sass')
const fs = require('fs')
const mkdirp = require('mkdirp')

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
		console.log(result)

		if (!fs.existsSync('./dist')) {
			fs.mkdirSync('./dist')
		}

		fs.writeFile(sassOptions.outFile, result.css, writeComplete)
	}
}

sass.render(sassOptions, renderComplete)

