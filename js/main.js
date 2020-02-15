const selector = element => document.querySelector(element);

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
   
})
