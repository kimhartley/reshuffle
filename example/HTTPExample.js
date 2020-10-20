const { HttpConnector, Reshuffle } = require('reshuffle')

const app = new Reshuffle()

const connector = new HttpConnector(app)

connector.on({ method: 'GET', path: '/test'}, (event, app) => {
    event.res.end('Yo Earth!')
})

app.start()