const devConfig = {
  devConfig: true,
  port: process.env.port || 6001,
  dbURI: 'mongodb://127.0.0.1/krishak'
}

const prodConfig = {
  prodConfig: false,
  port: process.env.port || 6001,
  dbURI: 'https://anotherURI'
}

let config = {}

if(devConfig.devConfig){
  config = {...prodConfig, ...devConfig}
}else{
  config = {...devConfig, ...prodConfig}
}

// set seedDatabase true of false
config.seedDatabase = false



module.exports = config   