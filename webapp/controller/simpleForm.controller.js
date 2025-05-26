sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.fioriexercise1.controller.simpleForm", {
        onInit() {
        },

        //Clear all fields when button is pressed
        onClearClick() {
            var oInput = this.getView().byId("zfld_name");
            oInput.setValue("");

            var oInput = this.getView().byId("zfld_street");
            oInput.setValue("");

            var oInput = this.getView().byId("zfld_stnum");
            oInput.setValue("");

            var oInput = this.getView().byId("zfld_zipcode");
            oInput.setValue("");

            var oInput = this.getView().byId("zfld_city");
            oInput.setValue("");

            var oInput = this.getView().byId("sel_country");
            oInput.setValue("");
        }
    });
});