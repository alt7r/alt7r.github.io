const cards = document.querySelectorAll('.card')
const scroll_con = document.getElementsByClassName('vertical-scroll-container')[0]
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
}, {
    root: scroll_con,
    rootMargin: '0px',
    threshold: 1,
})

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0]
    if (!lastCard.isIntersecting) return
    loadNewCards()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector('.card:last-child'))
}, {})

lastCardObserver.observe(document.querySelector('.card:last-child'))

cards.forEach(card => {
    observer.observe(card)
})

function loadNewCards(){
    for (let i = 0; i < 10; i++){
        const card = document.createElement('div')
        const link = document.createElement('a')
        link.textContent = 'New Project'
        link.href = '#'
        card.append(link)
        card.classList.add('card')
        observer.observe(card)
        scroll_con.append(card)
    }
}

$("#scroll").ready(
function pageScroll() {
    scroll_con.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,100);
})