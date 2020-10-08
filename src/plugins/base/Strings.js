/**
 * @param {Translation} translation
 */
export default function (translation) {
    translation.addStrings('en', {
        'menu.title_apps': 'Apps',
        'modal.button_close': 'Cancel',
        'modal.button_submit': 'Submit',
        'button.save.title': 'Save',
        'app.settings.title': 'Settings',
        'app.settings.mqtt.title': 'MQTT Broker',
        'app.settings.mqtt.host_label': 'Host',
        'app.settings.mqtt.user_label': 'Username',
        'app.settings.mqtt.pass_label': 'Password',
        'app_select.value.default.name': 'Select'
    });
    translation.addStrings('de', {
        'menu.title_apps': 'Anwendungen',
        'modal.button_close': 'Abbrechen',
        'modal.button_submit': 'Absenden',
        'button.save.title': 'Speichern',
        'app.settings.title': 'Einstellungen',
        'app.settings.mqtt.title': 'MQTT Server',
        'app.settings.mqtt.host_label': 'Adresse',
        'app.settings.mqtt.user_label': 'Nutzername',
        'app.settings.mqtt.pass_label': 'Passwort',
        'app_select.value.default.name': 'Wählen'
    });
}
