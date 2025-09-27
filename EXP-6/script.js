// script.js — external JavaScript file
console.log('External script loaded (script.js)');

// Example function declared in external file (callable from HTML or other scripts)
function greet(name) {
  const p = document.getElementById('status');
  const message = name
    ? `Hello, ${name}! (from external script)`
    : 'Hello! (from external script)';
  if (p) p.textContent = `Status: ${message}`;
  console.log(message);
}

// Call greet after a short delay so you can see earlier messages in console
setTimeout(() => greet('Visitor'), 500);
