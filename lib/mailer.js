import { createTransport } from 'nodemailer'

import file from 'file'
import moment from 'moment'
import path from 'path'
import store from './store'

const config = require(path.resolve(__dirname, '../config.json'))
const client = createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: config.gmail,
    pass: config.password
  }
})
const opts = ({ code }) => ({
  from: config.gmail,
  to: config.to.join(', '),
  subject: `Scanned RFID card ${code}`,
  text: '👍 ' + moment().format('MMMM Do YYYY, h:mm:ss a')
})

const PREPARE_TIMEOUT = 2000
let prepareTimeout

const prepare = () => {
  clearTimeout(prepareTimeout)

  prepareTimeout = setTimeout(send, PREPARE_TIMEOUT)
}

const send = () => {
  const state = store.getState()
  const message = opts(state)

  console.log('Mailing:', message)

  client.sendMail(message, (error, data) => console.log(error, data))
}

store.subscribe(prepare)
