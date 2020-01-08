# hanshin_iot ![Build status badge](https://github.com/stem-hanshin/hanshin_iot/workflows/MakeCode/badge.svg)

## Usage


### Initialize serial
You can use the function ``initSerial()`` to initialize send and receive serial ports with arguments ``TX`` and ``Rx``.

```block
HANSHIN_IOT.initSerial(TX,RX)
```

### Connect to WIFI
You can use the function ``setWifiInfo()`` to connect to WIFI with arguments WIFI ``name`` and ``password`` of type string.

```block
HANSHIN_IOT.setWifiInfo(name,password)
```

### Triggle event
You can use the function ``triggerEvent()`` to triggle the specific event with arguments ``key`` and ``event``.

```block
HANSHIN_IOT.triggerEvent(key,event)
```

## Link
If some errors occurred, you will need to search for it using the full Github repo URL. eg: https://github.com/stem-hanshin/HANSHIN_IOT
## License
MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)
