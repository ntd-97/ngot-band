const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
const btnBuyTickets = document.querySelectorAll('.js-buy-ticket');

// show modal when click buy ticket button
for (const btnBuyTicket of btnBuyTickets) {
    btnBuyTicket.addEventListener('click', () => {
        modal.classList.add('open');
    })
}

//close modal when click close icon
modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
});

//close modal when click outside modal container
modal.addEventListener('click', () => {
    modal.classList.remove('open');
});

//prevent bubble event 
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});


// Mobile menu button
const menuBtn = document.querySelector('#menu-btn');
const menuBtnIcon = menuBtn.children[0];
const header = document.querySelector('#header');
const headerHeight = header.clientHeight;

menuBtn.addEventListener('click', () => {
    if (headerHeight === header.clientHeight) {
        header.style.height = "auto";
        menuBtnIcon.classList.remove('fa-bars');
        menuBtnIcon.classList.add('fa-xmark');
    } else {
        header.style.height = null;
        menuBtnIcon.classList.add('fa-bars');
        menuBtnIcon.classList.remove('fa-xmark');
    }
})

// sub nav
const navItems = document.querySelectorAll('#nav>li a');
for (let navItem of navItems) {
    navItem.addEventListener('click', function(event) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    });
}