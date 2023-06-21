function startTimer() {
    var hoursInput = parseInt(prompt("Enter the number of hours:"));
    var minutesInput = parseInt(prompt("Enter the number of minutes:"));
    var secondsInput = parseInt(prompt("Enter the number of seconds:"));
  
    var countdown = setInterval(function() {
      if (hoursInput === 0 && minutesInput === 0 && secondsInput === 0) {
        clearInterval(countdown);
        alert("Countdown finished!");
      } else {
        if (secondsInput === 0) {
          if (minutesInput === 0) {
            if (hoursInput > 0) {
              hoursInput--;
              minutesInput = 59;
              secondsInput = 59;
            }
          } else {
            minutesInput--;
            secondsInput = 59;
          }
        } else {
          secondsInput--;
        }
  
        var hours = hoursInput < 10 ? "0" + hoursInput : hoursInput;
        var minutes = minutesInput < 10 ? "0" + minutesInput : minutesInput;
        var seconds = secondsInput < 10 ? "0" + secondsInput : secondsInput;
  
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
      }
    }, 1000);
  }
  