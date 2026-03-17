function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu')
    menu.classList.toggle('hidden')
}

function smoothScrollTo(section) {
    const el = document.getElementById(section)
    if (el) {
        const navHeight = 80
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - navHeight

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.getElementById('mobileMenu').classList.add('hidden')
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const menu = document.getElementById('mobileMenu')
        if (!menu.classList.contains('hidden')) menu.classList.add('hidden')
    }
})

console.log('%c✅ Prateek Dutta Profile Page loaded successfully!', 'color:#facc15; font-family:monospace')
