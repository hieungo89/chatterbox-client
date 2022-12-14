// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to send message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({ // takes in an object
      url: Parse.server, // the parse API or other website to which we want to send a request
      type: 'GET', // HTTP verb telling server what action to take
      data: { order: '-createdAt' }, // data sent to the server, which specifies extra options for how the "get" should happen
      contentType: 'application/json', // MIME-type format of the content you are providing to the server
      // dataType: 'application/json', // format of the content you expect from the server
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
