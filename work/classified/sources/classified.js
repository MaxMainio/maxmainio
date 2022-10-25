console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

document.getElementById("text-input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("chat-button").click();
    }
});

function myFunction() {
    var input = document.getElementById("text-input").value;
    document.getElementById("response-field").appendChild(document.createElement('p')).innerHTML = input;

    setTimeout(function() {
        document.getElementById('response-field').innerHTML += '<p class="future">let me think...<p>'; 
    }, 1000);

    // reset text input
    document.getElementById("text-input").value = "";
    document.getElementById("text-input").placeholder = "wait for response...";
}

