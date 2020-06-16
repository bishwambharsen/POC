({
    enableClickToDial: function (cmp, event, helper) {
        helper.clickToDialService.enable();
    },

    disableClickToDial: function (cmp, event, helper) {
        helper.clickToDialService.disable();
    },

    onClickToDial: function (cmp, event, helper) {
        helper.clickToDialService.addDialListener(function(payload){
        	alert("This alert simulates the onClickToDial method for Open CTI in Lightning Experience. The phone number is dialed sending the following payload: " + JSON.stringify(payload));
        })
    },

})