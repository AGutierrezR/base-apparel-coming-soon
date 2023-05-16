import './styles.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
  Alpine.data('form', () => ({
    email: {
      value: '',
      valid: true,
      message: '',
    },

    validateForm() {
      const email = this.email.value.trim()

      console.log({ value: email, obj: this.email })

      if (email === '') {
        this.setErrorFor(this.email, 'Email cannot be empty')
        return
      }

      this.removeErrorFor(this.email)

      this.validate(this.email, 'Email')
    },

    setErrorFor(field, message) {
      field.valid = false
      field.message = message
    },

    removeErrorFor(field) {
      field.valid = true
      field.message = ''
    },

    validate(field, label) {
      console.log('a ver')
      if (!/.+\@.+\..+/.test(field.value) && label === 'Email') {
        field.valid = false
        field.message = 'Please provide a valid email'
      } else {
        field.valid = true
        field.message = ''
      }
    },
  }))
})

Alpine.start()
