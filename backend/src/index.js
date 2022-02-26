require('dotenv').config()

const app = require('./app')
require('./database')

//Server execution:
async function main() {
    await app.listen(app.get('port'))
    console.log('El servidor se esta ejecutando en el puerto: ', app.get('port'));
}

main();