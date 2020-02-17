const selector = element => document.querySelector(element);
/** Modal **/
window.addEventListener('DOMContentLoaded', () => {
    // prevent default behaviour of link
    Array.from(document.querySelectorAll('a'))
    .forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
    }))

    
    document.querySelector('.modal').classList.add('pop');
});

selector('.modal__button').addEventListener('click', () =>{
    selector('.modal').classList.remove('pop');
})
/** End of Modal **/

selector(".hamburger").addEventListener("click", () => {
	document.body.classList.toggle("open");
});

selector(".tab-list").addEventListener("click", e => {
    e.preventDefault();
    var tab = e.target.id;
    // remove all tab-content from screen
    Array.from(document.querySelectorAll('.tab__content')).forEach(content => {
        content.classList.remove('view');
    });


    // display target tab-content
    document.querySelector(`.${tab}-tab-content`).classList.add('view');

	Array.from(document.querySelectorAll('.tab-list__link')).forEach(tabLink => {
        tabLink.classList.remove('active');
        
	});
	e.target.classList.add("active");
});

// Faq accordion section
selector('.accordion').addEventListener('click', (e) => {
    if(e.target.classList == 'accordion-item__header' || e.target.closest('.accordion-item__header')){
        const accordionItemClass = e.target.closest('.accordion-item').classList;

        if(!accordionItemClass.contains('open-tray')){
            Array.from(document.querySelectorAll('.accordion-item')).forEach(item => item.classList.remove('open-tray'));
            accordionItemClass.add('open-tray');
        }
        else{
            accordionItemClass.remove('open-tray');
        }
    }
});

// validate form
var form = selector('.form');

form.setAttribute('novalidate', 'true');

const getError = validity => {
    if(validity.valid) return;

    if(validity.valueMissing) return 'Please fill in your email';

    if(validity.patternMismatch) return "Whoops make sure it's an email";
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = selector('.form__field');
    let inputValidity = input.validity;
    var errorText = getError(inputValidity);
    console.log(errorText);
    if(errorText){
        input.classList.add('error');
        input.parentElement.setAttribute('data-content', errorText);
        input.parentElement.classList.add('error-holder')
        return;
    }
    input.classList.remove('error');
    input.parentElement.setAttribute('data-content', '');
    input.parentElement.classList.remove('error-holder')
})

