# New Home MQTT

// TODO: Rewrite with es modules (probably without Vue then)

A New Home UI for MQTT

The UI is made to house apps which are communicating with a MQTT broker.
It is built with a MQTT interface for subscribing and publishing topics to the broker via an app.

Instances of apps can be added through MQTT-Clients which are sending a `DEVICE_NAME/application` topic
which contains the name of the app, that this device controls (e.g. mqtt_neopixel). The `DEVICE_NAME` part 
of the topic will be used as the name for the app and the content is used as the Vue (global) component which
will be shown in the frontend. Note, that it is highly recomennded to have the application topic marked as retain
else the app will only appear in the interface, once the device is started and after reloading the frontend
it will be gone until you restart the device. 
The app has to be registered to vue as a global component, this can be done in the plugin file. 

## The Backend/Server application

[The backend can be found here](https://github.com/YannikSc/new-home-mqtt-server)

## Writing a Plugin

### Apps

// TODO: Create content

### Translations

// TODO: Create content

---

# New Home

"New Home" is a project which is meant for automating your home with buttons sensors and more. It's a jung
project, but I'm trying my best to get it reasonably working.

