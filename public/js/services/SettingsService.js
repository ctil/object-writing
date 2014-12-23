angular.module('SettingsService', []).service("settings", function($http) {
    this.timerMinutes = 10;
    this.word = 'undefined';

    this.incrementMinutes = function() {
	this.timerMinutes += 1;
    };
    this.decrementMinutes = function() {
	this.timerMinutes -= 1;
    };
});
