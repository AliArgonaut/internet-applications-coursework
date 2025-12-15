
    const form = document.getElementById('styleForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent page reload

      const bgColor = document.getElementById('bgColor').value;
      const fontType = document.getElementById('fontType').value;

      // Apply styles to the body
      document.body.style.backgroundColor = bgColor;
      document.body.style.fontFamily = fontType;
    });
