/**
 * Created by gerry on 10/7/2025.
 */

({
	startRefresherHelper: function (component, helper) {
		let refreshRate = component.get("v.refreshRate") * 1000;
		let intervalId = window.setInterval(
			$A.getCallback(function () {
				helper.refreshNavigationItem(component);
			}),
			refreshRate
		);
		component.set("v.refreshIntervalId", intervalId);
		component.set("v.refreshRunning", true);
	},

	stopRefresherHelper: function (component, helper) {
		window.clearInterval(component.get("v.refreshIntervalId"));
		component.set("v.refreshRunning", false);
	},

	refreshNavigationItem : function(component, helper) {
		let navigationItemAPI = component.find("navigationItemAPI");
		navigationItemAPI.refreshNavigationItem().then(function(response) {
			console.log('The list view successfully refreshed: ' + response);
		})
		.catch(function(error) {
			console.error('The refresh failed to execute due to the following error: ' + error);
		});
	}
});