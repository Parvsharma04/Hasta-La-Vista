const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const path = './data.json'

const date = moment().format()

const data = {
    DATE: date
}

jsonfile.writeFile(path, data)

simpleGit().add([path]).commit(date, {'--date': date}).push()