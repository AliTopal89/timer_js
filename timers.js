// var userInput = document.getElementById("newEntry")
// var total = document.getElementById("total")
// var entries = document.getElementById("entries")
// var form = document.querySelector("form")
// start timer - this event is going to start the time
// pause timer - this event is going to pause the timer that I started/restarted with
// reset timer - this event is going to clear the timer

var start = document.getElementById("start")
var pause = document.getElementById("pause")
var reset = document.getElementById("reset")

miliseconds = 0
seconds = 0 
// minutes = 0 
// hour = 0
function miliTimer(){
	miliseconds = 0
	seconds = 0 
if (miliseconds === 100) { 
	miliseconds = 0; seconds = seconds + 1; 
} 
}

start.addEventListener("click", startTime)
pause.addEventListener("click", pauseTime)
reset.addEventListener("click", resetTime)
// //increment time 

function startTime () {

		startTimer = setInterval(function miliTimer(){
			document.getElementById("timer").innerHTML = "StopWatch:" + seconds + ":" + miliseconds; miliseconds++;
		}, 100);

}

// // pause time 
function pauseTime() {
	clearInterval(startTimer)
}

// // reset 

function resetTime() {
	miliseconds = 0
}


	
// 	// console.log()
// 	// 	// get the userInput
// 	// var startTimer = setInterval(function(){myTimer()}, 1000);
// 	// function myTimer() {
// 	// 	var m=d.getMinutes();
//  //    	var s=d.getSeconds();
//  //    	var n = d.getMilliseconds();
//  //    	document.getElementById('start').innerHTML = m+":"+s+":"+n;

// 		// start.innerHTML = new Timer().toTimeString();
// // 	}

// // })
// //setInterval() - executes a function, over and over again, at specified time intervals
// // setInterval(function() {
// //       var message = document.getElementById('callback-message');
// //       message.innerHTML = '<b>Callback at:</b> ' + new Date().toTimeString();
// //     }, 1000);
// //     // Event:
// //     // --------------------------
// //     // Bind an event handler onto a DOM element,
// //     // it will be invoked each time the named event occurs.
// //     var eventButton = document.getElementById('event-bttn');
// //     eventButton.addEventListener('click', function(evt) {
// //       var date = new Date(evt.timeStamp);
// //       var message = document.getElementById('event-message'); 
// //       message.innerHTML = '<b>Event "'+ evt.type +'"occured at:</b> ' + date.toTimeString();
// //     });