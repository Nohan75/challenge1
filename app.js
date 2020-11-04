const myButton = document.querySelectorAll('button');
const selectBody = document.querySelector('body.transition');
const errorPage = document.querySelector('div.error-page');
const back = document.querySelector('.back');

myButton.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.value){
            case 'first':
                selectBody.classList.toggle('rotate');
                break;
            case 'second':
                errorPage.classList.add('error');
                errorPage.removeAttribute('hidden');
                break;
            case 'third':
                console.log('Bouton 3');
                break;
        }
    });
});

back.addEventListener('click', () => {
    errorPage.classList.remove('error');
    errorPage.setAttribute('hidden', '');
});