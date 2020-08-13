function hello(name) {
  let message = 'World';
  if(name) {
    message = name[0].toUpperCase() + name.slice(1,).toLowerCase();
  }
  return `Hello, ${message}!`;
}