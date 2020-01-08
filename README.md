# hanshin_iot ![Build status badge](https://github.com/stem-hanshin/hanshin_iot/workflows/MakeCode/badge.svg)

## Usage


### Initializing serial
You can use the function ``initSerial()`` to initialize send and receive serial ports with arguments ``TX`` and ``Rx``.

```block
HANSHIN_IOT .initSerial(TX,RX)
```

### Connecting to WIFI
You can use the function ``setWifiInfo()`` to connect to WIFI with arguments WIFI ``name`` and ``password`` of type string.

```block
HANSHIN_IOT .setWifiInfo(name,password)
```

### Connecting to WIFI
You can use the function ``triggerEvent()`` to triggle the specific event with arguments ``key`` and ``event``.

```block
HANSHIN_IOT .triggerEvent(key,event)
```

### License
MIT


## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

