// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username">${username}</div>
        <div class="text">${text}</div>
        <div class="lobby">${roomname}</div>
      </div>
    `)

};
/*

render: function(obj) {
  return $(`<div>${obj.username}</div>`)
}

render: function(username) {
    return $(`
      <div class="chat">
        <div class="username">${username}</div>
        <div></div>
      </div>
    `);
  }

*/