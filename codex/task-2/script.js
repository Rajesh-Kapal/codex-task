      function generatePassword() {
        const length = document.getElementById("lengthSlider").value;
        const includeLowercase = document.getElementById("lowercase").checked;
        const includeUppercase = document.getElementById("uppercase").checked;
        const includeNumbers = document.getElementById("numbers").checked;
        const includeSpecial = document.getElementById("special").checked;

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        let character = "";

        if (includeLowercase) character += lowercaseChars;
        if (includeUppercase) character += uppercaseChars;
        if (includeNumbers) character += numberChars;
        if (includeSpecial) character += specialChars;

        if (character === "") {
          document.getElementById("passwordOutput").textContent =
            "Please select at least one character type";
          return;
        }

        let password = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * character.length);
         password += character[randomIndex];
        }

      document.getElementById("passwordOutput").textContent = password;


      }
