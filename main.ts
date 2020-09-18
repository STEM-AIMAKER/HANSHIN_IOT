//% weight=10 color=#1E90FF icon="\uf136"
namespace HANSHIN_IOT {
    let buffer = ""

    //% blockId=initSerial block="Init serial port to |TX = %Tx RX=%RX"
    //% Tx.fieldEditor="gridpicker" Tx.fieldOptions.columns=4
    //% Rx.fieldEditor="gridpicker" Rx.fieldOptions.columns=4
    export function initSerial(Tx: SerialPin, Rx: SerialPin): void {
        serial.redirect(Tx, Rx, 9600)
        buffer = serial.readString()
        basic.pause(100)
        serial.writeString("AT")
        basic.pause(100)
    }
    
    
    //% blockId=connectIOTServer block="Connect to IOT Server, |ip=%ip"
    export function connectIOTServer(ip: string): void {
        let connectCmd = "AT+CIPSTART=\"TCP\",\"" + ip +"\",5566"
        serial.writeString(connectCmd)
        basic.pause(200)
        serial.writeString("AT+CIPMODE=1")
        basic.pause(200)
        serial.writeString("AT+CIPSEND")
    }  
    
    //% blockId=turnOnIO block="Turn on io, |io Index=%ioIndex"
    export function turnOnIO(ioIndex: string): void {
        let ioCmd = "io,1," + ioIndex
        serial.writeString(ioCmd)
    }
    
    //% blockId=turnOffIO block="Turn off io, |io Index=%ioIndex"
    export function turnOffIO(ioIndex: string): void {
        let ioCmd = "io,0," + ioIndex
        serial.writeString(ioCmd)
    }
    
    //% blockId=setWifiInfo block="Connect to WIFI, |SSID=%name Password=%password"
    export function setWifiInfo(name: string, password: string): void {
        serial.writeString("AT+CWMODE=3")
        basic.pause(200)        
        let cmd = "AT+CWJAP=\"" + name + "\",\"" + password + "\""
        serial.writeString(cmd)
        buffer = serial.readString()
        basic.pause(10000)
    }

    //% blockId=TriggerEvent block="Trigger event, |key=%key event=%event"
    export function triggerEvent(key: string, event: string): void {
        let cmd2 = "https://maker.ifttt.com/trigger/" + event + "/with/key/" + key
        serial.writeString(cmd2)
        buffer = serial.readString()
        basic.pause(6000)
    }

}
