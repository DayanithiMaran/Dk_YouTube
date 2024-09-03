const dropdowns = document.querySelectorAll('.DropDown');

dropdowns.forEach(DropDown => {
    const select = DropDown.querySelector('.select');
    const arrow = DropDown.querySelector('.arrow');
    const selected = DropDown.querySelector('.selected');
    const dropdown_menu = DropDown.querySelector('.DropMenu');
    const options= DropDown.querySelector('.DropMenu li');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        arrow.classList.toggle('arrow-rotate');
        dropdown_menu.classList.toggle('DropMenu-Open');
    });

    options.forEach( option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            arrow.classList.remove('arrow-rotate');
            dropdown_menu.classList.remove('DropMenu-Open');
            options.forEach(option => {
                option.classList.remove('active');
            });
                option.classList.add('active');
        });
    });
});