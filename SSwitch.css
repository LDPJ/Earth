class Switch {
    constructor() {
        this.switch = $('.c-switch')
        this.buttons = this.switch.querySelectorAll('button')
        this.highlight = this.switch.querySelector('.c-switch__highlight')
        this.activeBtn = this.switch.querySelector('button.is-active')

        if (!this.activeBtn) {
            this.activeBtn = this.buttons[0]
            this.activeBtn.classList.add('is-active')
        }

        this._highlight()
        this._addEvents()
    }

    _highlight() {
        const w = this.activeBtn.offsetWidth
        const x = this.activeBtn.offsetLeft

        this.highlight.style.width = `${ w }px`
        this.highlight.style.transform = `translateX(${ x }px)`
    }

    _addEvents() {
        this.buttons.on('click', e => {
            this.activeBtn.classList.remove('is-active')
            this.activeBtn = e.target
            this.activeBtn.classList.add('is-active')

            this._highlight()
        })
    }
}

new Switch()
