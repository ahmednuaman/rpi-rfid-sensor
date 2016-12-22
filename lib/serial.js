import SerialPort from 'serialport'

const handleError = (error) => console.log('Error', error)
const port = new SerialPort('/dev/serial0', handleError)

port.on('open', () => console.log('Port opened'))
port.on('error', handleError)

port.on('data', (data) => console.log(data))
