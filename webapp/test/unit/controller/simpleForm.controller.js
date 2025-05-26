/*global QUnit*/

sap.ui.define([
	"com/acn/training/fioriexercise1/controller/simpleForm.controller"
], function (Controller) {
	"use strict";

	QUnit.module("simpleForm Controller");

	QUnit.test("I should test the simpleForm controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
