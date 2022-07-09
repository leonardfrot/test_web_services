const { createLogger, transports, transport } = require('winston')

const logger = createLogger({
    level: 'info', 
    transports: [
        new transports.Console(),
        new transports.File({filename: './app.log'})
    ]
})

module.exports = logger