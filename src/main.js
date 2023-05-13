import './styles.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('flyout', () => ({
  open: false,

  toggle() {
    this.open = !this.open
  },
}))

Alpine.start()
