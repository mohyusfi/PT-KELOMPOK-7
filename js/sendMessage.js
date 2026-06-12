document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contactus-form')
  const phoneNumber = '6285215245574'

  if (!contactForm) {
    return
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = contactForm.elements.name.value.trim()
    const category = contactForm.elements.category.value
    const message = contactForm.elements.message.value.trim()

    const whatsappMessage = `Halo Admin, saya ingin konsultasi produk.
Nama    : ${name}
Kategor : ${category}
Pesan   : ${message}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, '_blank')
  })
})
