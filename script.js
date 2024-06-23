const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

function generatePassword() {
  let charSet = lowercaseChars;
  let password = '';
  const passwordLength = 12; // Default password length
  if (document.getElementById('uppercase').checked) {
    charSet += uppercaseChars;
  }
  if (document.getElementById('numbers').checked) {
    charSet += numberChars;
  }
  if (document.getElementById('symbols').checked) {
    charSet += symbolChars;
  }
  for (let i = 0; i < passwordLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    navigator.clipboard.writeText(password)
      .then(() => {
        alert('Password copied to clipboard');
      })
      .catch((error) => {
        console.error('Failed to copy password:', error);
        alert('Failed to copy password. Please try again.');
      });
  }
  
function generatepassword() {
  const passwordField = document.getElementById('password');
  passwordField.value = generatePassword();
}

document.getElementById('generate').addEventListener('click', generatepassword);

document.getElementById('Reset').addEventListener('click', function() {
  document.getElementById('uppercase').checked = false;
  document.getElementById('numbers').checked = false;
  document.getElementById('symbols').checked = false;
});
