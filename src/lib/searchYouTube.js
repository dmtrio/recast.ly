var searchYouTube = (options, callback) => {
  /*
Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
Accept an options object with the following properties:
query - the string to search for
max - the maximum number of videos to get, which should default to 5
key - an authorized YouTube Browser API key
Only GET embeddable videos
Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
  */

  //options will be an object with properties
    //query
    //max
    //key

  $.ajax({
    cache: false,
    data: {
      key: options.key || window.YOUTUBE_API_KEY,
      q: options.query,
      maxResults: options.max || 5,
      part: 'snippet',
      type: 'video',
      videoEmeddable: 'true',
    },
    dataType: 'json',
    type: 'GET',
    timeout: 5000,
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(response) {
      callback(response.items);
    },
    error: function(data) {
      console.log('error: ' + data.responseText);
    }
  });
};

window.searchYouTube = searchYouTube;
