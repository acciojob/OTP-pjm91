//your JS code here. If required.
document.querySelectorAll('.code').forEach((input, index, inputs) => {
  input.addEventListener('input', function() {
    // Focus the next input field when a value is entered
    if (this.value) {
      const nextInput = inputs[index + 1];
      if (nextInput) nextInput.focus();
    }
  });

  input.addEventListener('keydown', function(e) {
    // If backspace is pressed, focus the previous input field
    if (e.key === 'Backspace' && !this.value) {
      const prevInput = inputs[index - 1];
      if (prevInput) prevInput.focus();
    }
  });
});
