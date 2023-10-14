/**
*	@NApiVersion 2.1
*	@NScriptType UserEventScript
*   Script Scope: Validate UPC field on inventory items. If field is not exactly 12 digits long or blank, prevent saving.
*/

//This section calls the N/ui/message, N/log, and N/error modules and sets the context to record CREATE and EDIT.
define(['N/ui/message', 'N/log', 'N/error'], function (message, log, error) {
	function beforeSubmit(context) {
		if (context.type !== context.UserEventType.CREATE && context.type !== context.UserEventType.EDIT) {
			return;
		}

		var currentRecord = context.newRecord;
		var upcField = currentRecord.getValue({ fieldId: 'upccode' });

		// Debugging: Log the value of the UPC field
		//log.debug('UPC Validation', 'UPC Field Value: ' + upcField);

		//If UPC is not exactly 12 digits long or blank, prevent saving.
		if (upcField !== '' && !/^\d{12}$/.test(upcField)) {
			var errorMessage = ' Please correctly format the UPC field to 12 digits or leave it blank.';
			//prevent record from saving.
			error.create({ name: 'UPC error message', message: 'UPC error message' }); //name and message are required so they are just placeholder values.
			throw errorMessage;
		}
	}

	return {
		beforeSubmit: beforeSubmit,
	};
});
