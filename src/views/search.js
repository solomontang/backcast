var SearchView = Backbone.View.extend({
  
  // initialize: function() {
    
  // }
  events: {
    'click .btn': 'handleClick'
  },

  handleClick: function() {
    var input = $('.form-control').val();
    this.collection.search(input);
    console.log('see if it works ', input);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
