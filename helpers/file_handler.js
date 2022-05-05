const fs = require('fs')
const FILE_PATH = './data/logins.txt';

module.exports = {
    getContentFromFile(path) {
        try {
            return fs.readFileSync(path, 'utf8');
        } catch (err) {
            console.error(err);
        }
    },

    getArrayOfObjects(string) {
        let rowsArray = string.split(/\r\n/);
        let arrayOfObjects = [];
        for (const row of rowsArray) {
            arrayOfObjects.push({
                email: row.split(/\s/)[0], password: row.split(/\s/)[1]
            });
        }
        return arrayOfObjects;
    },

    getData() {
        let string = this.getContentFromFile(FILE_PATH);
        return this.getArrayOfObjects(string);
    }
}
