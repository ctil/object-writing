angular.module('SettingsService', []).service("settings", function($http) {
    // TODO: is this service needed to store data?
    this.timerMinutes = 10;
    this.word = undefined;
});
