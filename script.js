document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('input[type="text"]');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const message = input.value;
            alert('You entered: ' + message);
        }
    });
});
