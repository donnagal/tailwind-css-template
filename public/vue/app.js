// Nav
var app = new Vue({
  el: '#app',
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


  //Google doc post

  var sheetUrl = 'https://spreadsheets.google.com/feeds/list/1bHhmIdcg7oTCC7ehYo3f7nK6bfPgqLIvcPo-Zx6Sxfs/1/public/values?alt=json'

  var blog = new Vue({
    el: '#blog',
    
    data: {
      entries: null
    },
    
    watch: {
      currentPage: 'fetchData'
    },
  
    created: function () {
      this.fetchData()
    },
    
    methods: {
      fetchData: function () {
        var xhr = new XMLHttpRequest()
        var self = this
        xhr.open('GET', sheetUrl )
        xhr.onload = function () {        
          self.entries = JSON.parse(xhr.responseText)
          self.entries = self.entries.feed.entry        
          console.log(self.entry)
        }
        xhr.send()
      },
  //functions
  
    },  
    
  })
  
  
