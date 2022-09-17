// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // call render here?
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // loop through data object from messages.js
    for (let msg in Messages._data) {
      MessagesView.renderMessage(Messages._data[msg]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //prepend message to the dom
    $('#chats').prepend(MessagesView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};