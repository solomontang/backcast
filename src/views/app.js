var AppView = Backbone.View.extend({

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView().render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.models[0],
      collection: this.videos}).render();

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')
  
});
