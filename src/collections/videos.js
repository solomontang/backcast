var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(query) {
    console.log(this, 'old videos');
    console.log(this.models[0].set);
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        maxResults: 5,
        key: YOUTUBE_API_KEY,
        q: query,
        part: 'snippet',
        videoEmbeddable: true,
        type: 'video'
      },
      dataType: 'json',
      success: function (data) {
        var whatever = new Videos(data.items);
        console.log(whatever, 'new videos', whatever.models);
        console.log(data);
        //update collections object to be equal to the
      }
    });
  
  
  }
  
});
// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''}); 