const fs = require('fs');
const FILE_PATH = './data/logins.txt';

module.exports = {
    getContentFromFile(path) {
        try {
            return fs.readFileSync(path, 'utf8');
        } catch (err) {
            console.error(err);
        }
    },

    convertStringToArray(string) {
        let array = string.split(/\r\n/);
        let objectsArray = [];
        for (const row of array) {
            objectsArray.push({ email: row.split(/\s/)[0], password: row.split(/\s/)[1] });
        }
        return objectsArray;
    },

    getData() {
        return this.convertStringToArray(this.getContentFromFile(FILE_PATH));
    }

    /*[{
        email: 'test@test.com',
        password: 'pass'
    },

    {
        email: 'test@test.com',
        password: 'pass'
    }]*/

}