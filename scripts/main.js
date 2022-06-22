const myHeading = document.querySelector('h1');
myHeading.textContent = 'Łukasz Malinowski';


if (document.querySelector('.alert')) {
    setTimeout(() => {
        document.querySelector('.alert').setAttribute('style', 'display: none');
    },  8000);
} else {
    console.log('brak alertu');
}