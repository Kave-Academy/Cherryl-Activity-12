function run() {
    let today = new Date();
    let hrs = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();
    let period = 'AM';

    //The condition to set the hrs to 12
    if(hrs === 0){
        hrs = 12;
    }else if(hrs >= 12){
        hrs -=12;
        period = 'PM';
    }

    // call the checkTime function to add zero once number is less than 10
    mins = checkTime(mins);
    secs = checkTime(secs);
    hrs = checkTime(hrs);
    // display the final output on the DOM
    document.getElementById('output').innerHTML =  hrs + ":" + mins + ":" + secs + ":" + period;
    setInterval(run, 1000);
  }
  
  // add zero in front of numbers < 10
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }