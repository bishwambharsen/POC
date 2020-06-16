({
    validateStudentForm: function(cmp) {
        var validStudent = true;
        
        // Show error messages if required fields are blank
        var allValid = cmp.find('studentField').reduce(function (validFields, 
                                                                       inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validFields && inputCmp.get('v.validity').valid;
        }, true);
        
        return allValid;
    }
})