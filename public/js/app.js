(function() {
  //initialize variables
    var startButton = $('#start');
    var seconds = $('#seconds');
  //main functionality
    startButton.on('click', countdown);

  //function definitions
    function countdown(){
      var secondsText = seconds.text();
      var secondTextAsNumber = parseInt(secondsText);
      // console.log(typeof secondsText);
      // console.log(typeof secondTextAsNumber)
      if(secondTextAsNumber ===  0) {
        seconds.text("59");
        //then change secondsText to 59
      } else {
      var decreasedSecondsAsNumberByOne = secondTextAsNumber - 1;
      var padSecondsTextAsNumber = pad(decreasedSecondsAsNumberByOne);
      seconds.text(padSecondsTextAsNumber); //this writes inside of the html
    }
      // var secondsValue = parseInt(seconds.text());
      // seconds.text(pad(secondsValue - 1));
    }
    function pad(num){
      if(num < 10){
        //spit out the number with a leading zero
        return "0" + num;
      } else {
        //spit out the original number
        return num;
      }
    }
}());
