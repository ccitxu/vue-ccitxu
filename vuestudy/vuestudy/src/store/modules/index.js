const files = require.context('.',false,/\.js$/)
const modules = {};
console.log(files.keys());
files.keys().forEach(key => {
    if (key === './index.js') return
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
  })
  console.log(modules)
  export default modules
