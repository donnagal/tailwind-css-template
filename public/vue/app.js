
  //Google doc post

  var sheetUrl = 'https://spreadsheets.google.com/feeds/list/1bHhmIdcg7oTCC7ehYo3f7nK6bfPgqLIvcPo-Zx6Sxfs/1/public/values?alt=json'

  var blog = new Vue({
    el: '#blog',
    
    data: {
      entries: null,
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
  

