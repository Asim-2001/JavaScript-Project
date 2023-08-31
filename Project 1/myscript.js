
function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var session = document.getElementById('sessions');
    var message = document.getElementById('message');


    

    
    
    //  Display message according to time
    var messageElement = document.getElementById('breakfast-message');
    
    // If it's between 6am and 12pm, display "GOOD MORNING WAKE UP!!"
    if (hrs >= 6 && hrs < 12) {
        message.innerHTML = 'GOOD MORNING WAKE UP!!';
    }    

    // If it's between 12pm and 4pm, display "GOOD AFTERNOON!!"
    else if (hrs >= 12 && hrs < 16) {
        message.innerHTML = 'GOOD AFTERNOON !! TAKE SOME SLEEP';
    }    

    // If it's between 4pm and 8pm, display "GOOD EVENING!!"
    else if (hrs >= 16 && hrs < 20) {
        message.innerHTML = 'GOOD EVENING !!';
    }    

    // If it's after 8pm or before 6am, display "GOOD NIGHT!!"
    else {
        message.innerHTML = 'GOOD NIGHT !!';
    }    
    // options
    // for alarm1 (set wake up time)
    document.getElementById("setAlarmBtn").addEventListener("click", function () {
        var optionList = document.getElementById("optionList1");
        var selectedOption = optionList.options[optionList.selectedIndex].text;

        document.getElementById("alarm1").innerHTML = "Set wake up time: " + selectedOption;
    });    

    // for alarm2 (set lunch time)
    document.getElementById("setAlarmBtn").addEventListener("click", function () {
        var optionList = document.getElementById("optionList2");
        var selectedOption = optionList.options[optionList.selectedIndex].text;

        document.getElementById("alarm2").innerHTML = "Set lunch time: " + selectedOption;
    });    


    // for alarm3 (set nap time)
    document.getElementById("setAlarmBtn").addEventListener("click", function () {
        var optionList = document.getElementById("optionList3");
        var selectedOption = optionList.options[optionList.selectedIndex].text;

        document.getElementById("alarm3").innerHTML = "Set nap time: " + selectedOption;

    });    
    
    // for alarm4 (set night time)
    document.getElementById("setAlarmBtn").addEventListener("click", function () {
        var optionList = document.getElementById("optionList4");
        var selectedOption = optionList.options[optionList.selectedIndex].text;

        document.getElementById("alarm4").innerHTML = "Set night time: " + selectedOption;
        
    });    


    // Changing text according to the clock // right container
    if (hrs >= 6 && hrs < 12) {
        // If it's between 6am and 12pm, display "GOOD MORNING WAKE UP!!"
        messageElement.innerHTML = 'GOOD MORNING WAKE UP!!';
    } else if (hrs >= 12 && hrs < 16) {
        // If it's between 12pm and 4pm, display "GOOD AFTERNOON!!"
        messageElement.innerHTML = 'LET\'S HAVE SOME LUNCH !!';
    } else if (hrs >= 16 && hrs < 20) {
        // If it's between 4pm and 8pm, display "GOOD EVENING!!"
        messageElement.innerHTML = 'STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!';
    } else {
        // If it's after 8pm or before 6am, display "GOOD NIGHT!!"
        messageElement.innerHTML = 'CLOSE YOUR EYES AND GO TO SLEEP!';
    }    

    // Changing image according to the clock timing // below thw clock


        // Check if the current time is between 6am and 12pm
        if (hrs >= 6 && hrs < 12) {
            // Change image to Good-morning
            document.querySelector('.goodmornigimg').src ='./wake.png';
        }
    
        // Check if the current time is between 12pm and 4(16)pm
        else if (hrs >= 12 && hrs < 16) {
            // Change image to Good-afternoon
            document.querySelector('.goodmornigimg').src ='./Group.png';
        }
    
        // Check if the current time is between 4(16)pm and 8(20)pm
        else if (hrs >= 16 && hrs < 20) {
            // Change image to Good-evening
            document.querySelector('.goodmornigimg').src ='./Evening.png';
        }
    
    
        // Check if the current time is between 8pm and 11:59pm
        else if (hrs >= 20 && hrs <= 23) {
            // Change image to Good-night
            document.querySelector('.goodmornigimg').src ='./goodnight.png';
        }
    
        // Check if the current time is between 12am and 6am
        else if (hrs >= 0 && hrs < 6) {
            /// Change image to Good-morning
            document.querySelector('.goodmornigimg').src ='./goodnight.png';
        }

        if (hrs >= 12) {
            session.innerHTML = 'PM';
        } else {
            session.innerHTML = 'AM';
        }
    
        if (hrs > 12) {
            hrs = hrs - 12;
        }

        document.getElementById('hours').innerHTML = hrs;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;

    }
        setInterval(displayTime, 1000);