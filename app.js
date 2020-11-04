const myButton = document.querySelectorAll('button');
const selectBody = document.querySelector('body.transition');
const errorPage = document.querySelector('div.error-page');
const back = document.querySelector('.back');
const txtError = document.querySelector('.txt-error');

myButton.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.value){
            case 'first':
                selectBody.classList.toggle('rotate');
                break;
            case 'second':
                errorPage.classList.add('error');
                back.removeAttribute('hidden');
                txtError.removeAttribute('hidden');
                break;


        }
    });
});

back.addEventListener('click', () => {
    errorPage.classList.remove('error');
    errorPage.setAttribute('hidden', '');
    txtError.setAttribute('hidden', '');
});