/**
 * Created by gerry on 10/7/2025.
 */

({
	doInit: function (component, event, helper) {
		helper.startRefresherHelper(component, helper);
	},

	startRefresher: function (component, event, helper) {
		helper.startRefresherHelper(component, helper);
	},

	stopRefresher: function (component, event, helper) {
		helper.stopRefresherHelper(component, helper);
	},

	setRefreshRate: function(component, event, helper) {
		helper.stopRefresherHelper(component, helper);
		helper.startRefresherHelper(component, helper);
	}
});