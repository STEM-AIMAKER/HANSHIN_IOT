// % weight=10 color=#6495ED icon="\uf136"
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

    
    //% blockId=setWifiInfo block="Connect to WIFI, |SSID=%name Password=%password"
    export function setWifiInfo(name: string, password: string): void {
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
