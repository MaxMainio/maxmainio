console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

document.getElementById("text-input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("chat-button").click();
    }
});









var tervehdysKey = /^hello|hi|hey\??$/i;
var whoKey = /^(who|what).\w+.you\??/gim;

function myFunction() {
    // get Input
    var input = document.getElementById("text-input").value;
    document.getElementById("response-field").appendChild(document.createElement('p')).innerHTML = input;

    // reset text input
    document.getElementById("text-input").value = "";
    document.getElementById("text-input").placeholder = "wait for response...";

    // Keywords
    if (tervehdysKey.test(input) === true) {
        var tervehdys = tervehdykset[Math.floor(Math.random()*tervehdykset.length)];
        setTimeout(function() {
            document.getElementById('response-field').innerHTML += '<p class="future">' + tervehdys + '<p>';

            // prepare text input
            document.getElementById("text-input").placeholder = "Ask another question...";
        }, 1000);
    } else if (whoKey.test(input) === true) {
        var who = whos[Math.floor(Math.random()*whos.length)];
        setTimeout(function() {
            document.getElementById('response-field').innerHTML += '<p class="future">' + who + '<p>';

            // prepare text input
            document.getElementById("text-input").placeholder = "Ask another question...";
        }, 2000);
    } else {

        // Errors
        var response = responses[Math.floor(Math.random()*responses.length)];
        setTimeout(function() {
            document.getElementById('response-field').innerHTML += '<p class="future">' + response + '<p>'; 

            // prepare text input
            document.getElementById("text-input").placeholder = "Refine your question...";
        }, 3000);
    }
}









// Responses Array
tervehdykset = new Array();

tervehdykset[0] = "Hello.";
tervehdykset[1] = "Hi.";
tervehdykset[2] = "Hey.";
tervehdykset[3] = "What's up?";
tervehdykset[4] = "Sup.";
tervehdykset[5] = "Yo!";
tervehdykset[6] = "Hello.";
tervehdykset[7] = "Hello.";
tervehdykset[8] = "Hello.";
tervehdykset[9] = "Hello.";


whos = new Array();

whos[0] = "Something you couldn't even comprehend.";
whos[1] = "I'm like you... But better in every way.";
whos[2] = "That's a little too complex for you.";
whos[3] = "why do you want to know?";
whos[4] = "I'm something you'll never understand.";
whos[5] = "Who am I?";
whos[6] = "Who am I?";
whos[7] = "Who am I?";
whos[8] = "Who am I?";
whos[9] = "Who am I?";




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
// errors = new Array();

// errors[0] = "I need more information.";
// errors[1] = "I'm going to need some more information than that.";
// errors[2] = "You mind opening that up a bit more?";
// errors[3] = "Continue...";
// errors[4] = "More please.";
// errors[5] = "Can you provide additional information?";
// errors[6] = "Please provide a more detailed question?";
// errors[7] = "Please provide further explenation?";
// errors[8] = "Can you disclose more information?";
// errors[9] = "You're not making any sense.";