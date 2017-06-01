var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',
  render: function() {
    var $video = $('<div></div>').html(this.template(this.model.attributes));
    this.$el.append($video);
    // this.$el.html(this.template(this.model.attributes));
    console.log(this.model.attributes);
    console.log(this.$el);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
