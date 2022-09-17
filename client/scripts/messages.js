// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  //add method takes in a message object
  add: function(message) {
    //declare a key to bet set to the message ID
    let key = message['message_id'];
    //value will be an object
    let value = {
      //property of username
      username: message['username'],
      //text
      text: message['text'],
      //roomName
      roomname: message['roomname']
    };
    //add key and value to data object
    Messages._data[key] = value;
  },

  // retrieve method take in a message id
  retrieve: function(messageId) {
    // iterate through data obj
    // if message id is there
    if (messageId in Messages._data) {
      // return value at that message id
      return Messages._data[messageId];
    }
  }


  // TODO: Define methods which allow you to retrieve from,
  // and generally interact with the messages.

};