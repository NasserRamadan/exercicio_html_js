document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cut-note').addEventListener('submit', function (e) {
        e.preventDefault(); 


        const cutNote = parseFloat(document.getElementById('num1').value);
        const userNote = parseFloat(document.getElementById('num2').value);


        const difference = userNote - cutNote;

        const errorMessage = document.querySelector('.error-message');
        const successMessage = document.querySelector('.success-message');

        if (difference >= 0) {
            errorMessage.style.display = 'none';
            successMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        }
    });
});
