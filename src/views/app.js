var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    
  },


  render: function() {
    this.$el.html(this.template());
    new SearchView().render();
    new VideoPlayerView().render();
    new VideoListView().render();
    return this;
  },

  template: templateURL('src/templates/app.html')
  
});
