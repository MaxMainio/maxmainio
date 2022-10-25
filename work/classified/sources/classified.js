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

responses = new Array();

responses[0] = "I'm troubled by how";
responses[1] = "With regard to the issue of content,";
responses[2] = "I find this work menacing/playful because of the way";
responses[3] = "It should be added that";
responses[4] = "I agree/disagree with some of the things that have just been said, but";
responses[5] = "Although I am not a painter, I think that";
responses[6] = "Umm...";
responses[7] = "I'm surprised that no one's mentioned yet that";
responses[8] = "It's difficult to enter into this work because of how";
responses[9] = "As an advocate of the Big Mac Aesthetic, I feel that";

// Error Array
errors = new Array();

errors = new Array();

errors[0] = "I need more information.";
errors[1] = "I'm going to need some more information than that.";
errors[2] = "You mind opening it up a bit more?";
errors[3] = "Continue...";
errors[4] = "More please...";
errors[5] = "I need more information";
errors[6] = "I need more information";
errors[7] = "I need more information";
errors[8] = "I need more information";
errors[9] = "I need more information";