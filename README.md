# rpi-rfid-sensor
A nodejs project to get an RFID to work with a Raspberry PI

## Setting up the hardware parts
You'll need:

* A Raspberry PI, I'm using v3 (with OS installed, plus git, daemontools, and node)

## Setting up the software parts
1. Do everything as *root* (I know, I know)
2. Open `/etc/rc.local` and add `svscan /service &` before `exit 0`
3. Make a folder `/service`
4. `cd` into `/service` and clone the repo, this'll create a folder within called `rpi-rfid-sensor`
5. `cd` into the repo folder, run `chmod +x run`
6. Copy `config.json.sample` to `config.json` and fill it out*
7. Reboot the PI!

*If you're using Gmail you'll need to enable your account to be logged in via less secure apps, see: http://stackoverflow.com/a/40308643/398939
