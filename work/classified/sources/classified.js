console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

document.getElementById("text-input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("chat-button").click();
    }
});









function myFunction() {
    // get Input
    var input = document.getElementById("text-input").value;
    document.getElementById("response-field").appendChild(document.createElement('p')).innerHTML = input;

    // reset text input
    document.getElementById("text-input").value = "";
    document.getElementById("text-input").placeholder = "wait for response...";

    // generate responses
    if (input.length > 5) {
        
        // Responses
        var response = responses[Math.floor(Math.random()*responses.length)];
        setTimeout(function() {
            document.getElementById('response-field').innerHTML += '<p class="future">' + response + '<p>';

            // prepare text input
            document.getElementById("text-input").placeholder = "Ask another question...";
        }, 2000);
    } else {

        // Errors
        var error = errors[Math.floor(Math.random()*errors.length)];
        setTimeout(function() {
            document.getElementById('response-field').innerHTML += '<p class="future">' + error + '<p>'; 

            // prepare text input
            document.getElementById("text-input").placeholder = "Refine your question...";
        }, 1000);
    }
}









// Responses Array
responses = new Array();

responses[0] = "It should be where you last left it.";
responses[1] = "Just like other human problems in daily life, the first thing to do is to consider lifestyle changes.";
responses[2] = "Talk about the challenges with your partner and look for common grounds.";
responses[3] = "Be kind and show understanding, and try to avoid personal confrontation.";
responses[4] = "Observe your colleagues who are succeeding and take note of what they are doing differently.";
responses[5] = "There is the temptation to decry your treatment, defend yourself, and demand a change immediately, but you should really wait for the right opportunity to do that.";
responses[6] = "Break out of your routines, and deliberately create a new experience for yourself";
responses[7] = "Don’t allow the situation to deteriorate into something more serious.";
responses[8] = "Be true to yourself and forgive yourself.";
responses[9] = "Seek out the one called Danny Devito. He will have the answer to your question.";

// Error Array
errors = new Array();

errors[0] = "I need more information.";
errors[1] = "I'm going to need some more information than that.";
errors[2] = "You mind opening that up a bit more?";
errors[3] = "Continue...";
errors[4] = "More please.";
errors[5] = "Can you provide additional information?";
errors[6] = "Please provide a more detailed question?";
errors[7] = "Please provide further explenation?";
errors[8] = "Can you disclose more information?";
errors[9] = "You're not making any sense.";