const userName = 'Ben';

console.log(`Hello, ${userName}!`);

const button = document.querySelector('button');

if (button) {
button.addEventListener('click', () => {
  console.log(`Clicked!`);
});
}