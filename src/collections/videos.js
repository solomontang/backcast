var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(query) {
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
        console.log(data);
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