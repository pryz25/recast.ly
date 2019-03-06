var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {'part': 'snippet',
      'fields': 'items',
      'key': options.key,
      'maxResults': options.max,
      'order': 'relevance',
      'q': options.query,
      'videoEmbeddable': true,
      'type': 'video'
    },
    success: (result) => callback(result.items)
  });
};

/* 
Get videos from youtube api
but we're not passing the test
HYPOTHESIS: it's taking too long to get our results back
JORDAN SAYS: are you sure you're getting data back at all
- We're def sending a GET request
- We're not sure if it's successful
>>> we want to confirm if we're successful in getting a response from the server
- console log doesn't return anything (we use it for its side effects)
- ajax success prop is supposed to point to a function
IDEA: capture the callback in a variable, so we can look at it, see what it's returning

*/

export default searchYouTube;