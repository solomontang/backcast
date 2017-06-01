var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
