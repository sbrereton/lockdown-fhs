$(document).ready(function() {
    $('#startLockdown').click(function() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to start the lockdown? This will interrupt any active sessions.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                startLockdown();
            }
        });
    });

    $('#endLockdown').click(function() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to end the lockdown?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                endLockdown();
            }
        });
    });

    function startLockdown() {

        $.ajax({
            url: apiBeginUrl + "?key=" + apiKey + "&type=" + lockdownKey,
            method: 'GET',
            success: function(response) {
                Swal.fire('A request to start the lockdown was initiated.', '', 'success');
            },
            error: function(jqXHR) {
                Swal.fire('There was an error when attempting to start the lockdown.', '', 'error');
            }
        });

    }

    function endLockdown() {

        $.ajax({
            url: apiCancelUrl + "?key=" + apiKey + "&type=" + lockdownKey,
            method: 'GET',
            success: function(response) {
                Swal.fire('A request to cancel the lockdown was initiated.', '', 'success');
            },
            error: function(jqXHR) {
                Swal.fire('There was an error when attempting to cancel the lockdown.', '', 'error');
            }
        });
    }
});