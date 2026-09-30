const header = document.querySelector('.header')
const burger = document.querySelector('.burger')
const menuLinks = document.querySelectorAll('.header-menu-link')

if (burger && header) {
    burger.addEventListener('click', () => {
        header.classList.toggle('menu-open')
    })
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('menu-open')
    })
})


const modal = document.getElementById('product-modal')
const cards = document.querySelectorAll('.catalog-products-card')

if (modal && cards.length) {

    const mainImage = document.getElementById('modal-main-image')
    const bottomImage = document.getElementById('modal-bottom-image')

    const title = document.getElementById('modal-title')
    const price = document.getElementById('modal-price')
    const category = document.getElementById('modal-category')
    const description = document.getElementById('modal-description')

    const quantity = document.getElementById('modal-quantity')
    const minus = document.getElementById('modal-minus')
    const plus = document.getElementById('modal-plus')

    const favorite = document.querySelector('.modal-favorite')

    let currentQuantity = 1

    function openModal(card) {
        const data = card.dataset

        currentQuantity = 1
        quantity.textContent = currentQuantity

        title.textContent = data.title || ''
        price.textContent = data.price || ''
        category.textContent = data.category || 'ТОВАР'
        description.textContent = data.description || ''

        const main = data.modalMain || data.image || ''
        const bottom = data.modalBottom || main

        mainImage.src = main
        mainImage.alt = data.title || ''

        bottomImage.src = bottom
        bottomImage.alt = data.title || ''

        modal.classList.add('is-open')
        modal.setAttribute('aria-hidden', 'false')

        document.body.style.overflow = 'hidden'
    }


    function closeModal() {
        modal.classList.remove('is-open')
        modal.setAttribute('aria-hidden', 'true')

        document.body.style.overflow = ''
    }


    cards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card)
        })
    })


    modal.querySelectorAll('[data-modal-close]').forEach(button => {
        button.addEventListener('click', closeModal)
    })


    minus.addEventListener('click', () => {
        currentQuantity = Math.max(1, currentQuantity - 1)
        quantity.textContent = currentQuantity
    })


    plus.addEventListener('click', () => {
        currentQuantity += 1
        quantity.textContent = currentQuantity
    })


    modal.querySelectorAll('.modal-accordion').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('is-open')
        })
    })


    document.addEventListener('keydown', event => {
        if (
            event.key === 'Escape' &&
            modal.classList.contains('is-open')
        ) {
            closeModal()
        }
    })
}