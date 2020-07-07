import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários')

    response.json([
        'Jimi Hendrix',
        'Jimmy Page',
        'Eric Clapton',
        'Eddie Van Halen'
    ])
})

app.listen(3333);