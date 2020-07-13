function validate() {
    var isSubmited = false;
    // var form = document.forms[0];
    // new
    var newForm = document.querySelectorAll('form');
    for(i=0; i<newForm.length; i++){
        newForm[i].addEventListener('submit', validateForm);
    }

    // form.addEventListener('submit', validateForm);
    function validateForm (event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var form = event.currentTarget,
            name = form.querySelector('.name'),
            phone = form.querySelector('.phone'),
            valid = true,
            errros = {
                phoneError: 'Invalid phone',
                nameError: 'Invalid name'
            };

        if(typeof String.prototype.trim !== 'function') {
            String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, '');
            }
        }

        // Телефон
        if (phone && phone.value.trim().length < 6) {
            alert(errros.phoneError);
            event.stopImmediatePropagation();
            valid = false;
            return false;
        }

        if (name && name.value.trim().length < 4) {
            alert(errros.nameError);
            event.stopImmediatePropagation();
            valid = false
            return false;
        }

        if(valid && !isSubmited){
            // form.submit();
            // isSubmited = true;
            // return false;
        }

    }
}