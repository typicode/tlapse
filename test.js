// quick test
const tlapse = require('./index')

const withoutOptions = tlapse('https://github.com')
setTimeout(() => clearInterval(withoutOptions), 2000)

// const withOptions = tlapse('https://github.com', { directory: 'tlapse2', every: '5m' })
// setTimeout(() => clearInterval(withOptions), 2000)
