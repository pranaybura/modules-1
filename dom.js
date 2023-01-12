import users from './users.js';
// console.log(users);

function addUserToDom(name) {
  const node = document.createElement('li');
  const text = document.createTextNode(name);
  node.appendChild(text)

  document.getElementById('users').appendChild(node);
}

document.getElementById('submit').addEventListener('click', function() {
  const input = document.getElementById('input');
  addUserToDom(input.value);

  input.value = '';
});

for (var i = 0; i < users.length; i++) {
  addUserToDom(users[i]);
}

export default { addUserToDom };