  // Nav
  var nav = new Vue({
    el: '#nav',
    data: {
      open: false,
      showMenu: false,
      scrolled: false,
      items: [
        { message: 'Page 1', url:'/', },
        { message: 'Page 2', url:'/page-2.html', },
        { message: 'Page 3', url:'/page-3.html',  },
        { message: 'Page 4', url:'/page-4.html',  }
      ]
    },
    methods: {
        toggle() {
          this.open = !this.open
        },
        handleScroll () {
          this.scrolled = window.scrollY > 0
        }
        },
        created () {
          window.addEventListener('scroll', this.handleScroll)
        },
        destroyed () {
          window.removeEventListener('scroll')
        }
    })