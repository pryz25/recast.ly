import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    type: 'GET',
    data: {'part': 'id,snippet',
      'key': options.key,
      'maxResults': options.max,

    },
    success: callback
    
  });
};

export default searchYouTube;
