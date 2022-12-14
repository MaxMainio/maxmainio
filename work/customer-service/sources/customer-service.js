console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

const profileImg = document.getElementById("profileImg")
const profileName = document.getElementById("profileName")

const chatContainer = document.getElementById("chatContainer");
var allHelpBtns = document.getElementsByClassName("grid-div");
const responseField = document.getElementById("responseField");
const inputField = document.getElementById("text-input");









// GENERATE PROFILE
function generateProfile() {
    var profileBucket = profileGroup(0)
    var profileImgIndex = profileIndex(0)

    if(profileBucket > 5) {
        profileName.innerHTML = femaleFirst[womanNameIndex(0)] + " " + surName[surNameIndex(0)];
    } else {
        profileName.innerHTML = maleFirst[manNameIndex(0)] + " " + surName[surNameIndex(0)];
    }

    profileImg.src = "assets/profiles/set_" + profileBucket + "/profile_" + profileImgIndex + ".jpg";
    document.getElementById("connectingText").innerHTML = "you are now connected to a professional."
}

// FIND THE PROFILE GROUP
function profileGroup(){
    return Math.round(Math.random() * 11)
}

// FIND IMG FROM THAT GROUP
function profileIndex(){
    return Math.round(Math.random() * 23)
}

// GET A FEMALE NAME INDEX
function womanNameIndex(){
    return Math.round(Math.random() * 39)
}

// GET A MALE NAME INDEX
function manNameIndex(){
    return Math.round(Math.random() * 39)
}

// GET AN INDEX NUMBER FOR A SURNAME
function surNameIndex(){
    return Math.round(Math.random() * 69)
}









// NAME GENERATOR
maleFirst = new Array();
maleFirst[0] = "Roman";
maleFirst[1] = "Montgomery";
maleFirst[2] = "Gabriel";
maleFirst[3] = "Mario";
maleFirst[4] = "Adrian";
maleFirst[5] = "Matthew";
maleFirst[6] = "Truman";
maleFirst[7] = "Thomas";
maleFirst[8] = "Maxton";
maleFirst[9] = "Leo";
maleFirst[10] = "Liam";
maleFirst[11] = "Noah";
maleFirst[12] = "Oliver";
maleFirst[13] = "Elijah";
maleFirst[14] = "James";
maleFirst[15] = "William";
maleFirst[16] = "Benjamin";
maleFirst[17] = "Lucas";
maleFirst[18] = "Henry";
maleFirst[19] = "Theodore";
maleFirst[20] = "Amiri";
maleFirst[21] = "Colter";
maleFirst[22] = "Ozzy";
maleFirst[23] = "Khai";
maleFirst[24] = "Jack";
maleFirst[25] = "Levi";
maleFirst[26] = "Alexander";
maleFirst[27] = "Jackson";
maleFirst[28] = "Daniel";
maleFirst[29] = "Michael";
maleFirst[30] = "Mason";
maleFirst[31] = "Sebastian";
maleFirst[32] = "Ethan";
maleFirst[33] = "Logan";
maleFirst[34] = "Owen";
maleFirst[35] = "Samuel";
maleFirst[36] = "Jacob";
maleFirst[37] = "Joseph";
maleFirst[38] = "David";
maleFirst[39] = "John";

femaleFirst = new Array();
femaleFirst[0] = "Olivia";
femaleFirst[1] = "Emma";
femaleFirst[2] = "Sharlene";
femaleFirst[3] = "Charlotte";
femaleFirst[4] = "Amelia";
femaleFirst[5] = "Ava";
femaleFirst[6] = "Sophia";
femaleFirst[7] = "Isabella";
femaleFirst[8] = "Mia";
femaleFirst[9] = "Evelyn";
femaleFirst[10] = "Harper";
femaleFirst[11] = "Luna";
femaleFirst[12] = "Camila";
femaleFirst[13] = "Gianna";
femaleFirst[14] = "Elizabeth";
femaleFirst[15] = "Eleanor";
femaleFirst[16] = "Ellen";
femaleFirst[17] = "Ella";
femaleFirst[18] = "Abigail";
femaleFirst[19] = "Avery";
femaleFirst[20] = "Scarlette";
femaleFirst[21] = "Emily";
femaleFirst[22] = "Penelope";
femaleFirst[23] = "Aria";
femaleFirst[24] = "Chloe";
femaleFirst[25] = "Layla";
femaleFirst[26] = "Mila";
femaleFirst[27] = "Nora";
femaleFirst[28] = "Hazel";
femaleFirst[29] = "Madison";
femaleFirst[30] = "Ellie";
femaleFirst[31] = "Lily";
femaleFirst[32] = "Grace";
femaleFirst[33] = "Violet";
femaleFirst[34] = "Aurora";
femaleFirst[35] = "Riley";
femaleFirst[36] = "Zoey";
femaleFirst[37] = "Emilia";
femaleFirst[38] = "Stella";
femaleFirst[39] = "Lucy";

surName = new Array();
surName[0] = "Smith";
surName[1] = "Johnson";
surName[2] = "Williams";
surName[3] = "Brown";
surName[4] = "Jones";
surName[5] = "Garcia";
surName[6] = "Miller";
surName[7] = "Davis";
surName[8] = "Wilson";
surName[9] = "Lopez";
surName[10] = "Hernandez";
surName[11] = "Anderson";
surName[12] = "Thomas";
surName[13] = "Thompson";
surName[14] = "Taylor";
surName[15] = "Moore";
surName[16] = "Jackson";
surName[17] = "Martin";
surName[18] = "Lee";
surName[19] = "White";
surName[20] = "Clark";
surName[21] = "Lewis";
surName[22] = "Robinson";
surName[23] = "Walker";
surName[24] = "Allen";
surName[25] = "King";
surName[26] = "Wright";
surName[27] = "Scott";
surName[28] = "Hill";
surName[29] = "Green";
surName[30] = "Adams";
surName[31] = "Nelson";
surName[32] = "Baker";
surName[33] = "Campbell";
surName[34] = "Hall";
surName[35] = "Turner";
surName[36] = "Cruz";
surName[37] = "Turner";
surName[38] = "Parker";
surName[39] = "Evans";
surName[40] = "Gomez";
surName[41] = "Mitchel";
surName[42] = "Phillips";
surName[43] = "Edwards";
surName[44] = "Diaz";
surName[45] = "Collins";
surName[46] = "Morris";
surName[47] = "Murphy";
surName[48] = "Cook";
surName[49] = "Morgan";
surName[50] = "Rogers";
surName[51] = "Ortiz";
surName[52] = "Peterson";
surName[53] = "Bailey";
surName[54] = "Reed";
surName[55] = "Kelly";
surName[56] = "Howard";
surName[57] = "James";
surName[58] = "Mendoza";
surName[59] = "Bennett";
surName[60] = "Myers";
surName[61] = "Foster";
surName[62] = "Powell";
surName[63] = "Perry";
surName[64] = "Russell";
surName[65] = "Sullivan";
surName[66] = "Fisher";
surName[67] = "Ross";
surName[68] = "Wallace";
surName[69] = "Bryant";









// GENERATE INITIAL INTRODUCTION
for (var i = allHelpBtns.length-1; i >=0  ; i--) {
	(function () {
		var selectedTopic = allHelpBtns[i].id

		allHelpBtns[i].addEventListener("click", function() {
            openChatBox()
            setTimeout(generateProfile, 3000);
            // document.getElementById("connectingText").innerHTML = "you are now connected to a professional."

            // BEGINNING = GREETING + INTRODUCTION
            setTimeout(function () {
                responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + greeting[Math.round(Math.random() * 11)] + ' ' + introduction[Math.round(Math.random() * 12)]; + '</p>'
            }, 5000)

            // MIDDLE = TOPIC-QUERY + TOPIC-RESPONSE + TOPIC-BOAST + CATCHPHRASE
            setTimeout(function () {
                responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + topicQuery[Math.round(Math.random() * 11)] + '<strong>' + topicResponse[selectedTopic] + '</strong>' + topicBoast[Math.round(Math.random() * 9)] + catchPhrase[Math.round(Math.random() * 9)] + '</p>';
            }, 8000)

            // CONCLUSION = CONTINUATION
            setTimeout(function () {
                responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + continuation[Math.round(Math.random() * 11)] + '</p>';
            }, 10000)
		}, false)
	}());
}

function openChatBox(){
    chatContainer.classList.toggle("hidden")
}









// GREETINGS
greeting = new Array();
greeting[0] = "Hello!"
greeting[1] = "Hello."
greeting[2] = "Good morning!"
greeting[3] = "Good morning."
greeting[4] = "Good afternoon!"
greeting[5] = "Good afternoon."
greeting[6] = "Good evening!"
greeting[7] = "Good evening."
greeting[8] = "Hello there!"
greeting[9] = "Hello there."
greeting[10] = "Salutations!"
greeting[11] = "Salutations."

// INTODUCTION
introduction = new Array();
introduction[0] = "Let's solve some issues!";
introduction[1] = "It's time to fix some issues!";
introduction[2] = "Let's solve some problems!";
introduction[3] = "It's time to fix some problems!";
introduction[4] = "Let's solve some dilemmas!";
introduction[5] = "It's time to fix some dilemmas!";
introduction[6] = "Together we can solve anything!";
introduction[7] = "Together there is no issue too hard to handle!";
introduction[8] = "Together there is no problem too hard to handle!";
introduction[9] = "Together there is no dilemma too hard to handle!";
introduction[10] = "Together there is no issue too hard to fix!";
introduction[11] = "Together there is no problem too hard to fix!";
introduction[12] = "Together there is no dilemma too hard to fix!";

// TOPIC QUERY
topicQuery = new Array();
topicQuery[0] = "I see you have selected "
topicQuery[1] = "You selected "
topicQuery[2] = "I see you have clicked on "
topicQuery[3] = "You clicked "
topicQuery[4] = "I see you are interested in "
topicQuery[5] = "I see you need help with "
topicQuery[6] = "This is telling me you selected "
topicQuery[7] = "This is telling me you clicked on "
topicQuery[8] = "You sent a request for "
topicQuery[9] = "You have requested assistance in "
topicQuery[10] = "You say you require assistance in "
topicQuery[11] = "You say you need help with "

// TOPIC RESPONSE
topicResponse = new Array();
topicResponse[0] = "Building and housing: Housing, Infractructure ... ";
topicResponse[1] = "Economy: Enterprise and innovation, Brexit ... ";
topicResponse[2] = "Education: School holidays, Freedom of education ... ";
topicResponse[3] = "Family, health and care: Coronavirus Covid-19, Drugs, Health insurance, Abortion, Mental health care, Family law ... ";
topicResponse[4] = "Government and democracy: Public administration, personal data, Police ... ";
topicResponse[5] = "International cooperation: European Union, Human rights, Treaties ... ";
topicResponse[6] = "Justice, security and defence: War in Ukraine, Identification documents, Emergency number 112, Counterterrorism and national security, Cybercrime ... ";
topicResponse[7] = "Migration and travel: Reception of refugees from Ukraine, Visas, Dutch nationality, Immigration, Embassies, consulates and other representations ... ";
topicResponse[8] = "Nature and the environment: Climate change, Environment, water management ... ";
topicResponse[9] = "Taxes, benefits and allowences: Taxation and Business, Grant programmes ... ";
topicResponse[10] = "Transportation: Mobility, public transport and road safety, Drones ... ";
topicResponse[11] = "Work: Minimum wage, Legalising documents, Working conditions ... ";

// TOPIC BOAST
topicBoast = new Array();
topicBoast[0] = "Luckily I'm an expert in this topic. "
topicBoast[1] = "Luckily for you, I'm an expert in this topic. "
topicBoast[2] = "I actually wrote my graduate thesis on this exact topic. "
topicBoast[3] = "This is in fact my area of expertise. "
topicBoast[4] = "Good thing this topic is my forte. "
topicBoast[5] = "I'm just the person you need! "
topicBoast[6] = "I'll definitely be able to help you with this! "
topicBoast[7] = "I'm willing to bet I'm the best person you could have been connected to. "
topicBoast[8] = "I practically wrote the book on this! "
topicBoast[9] = "No one knows their way around this topic better than I! "

// CATCHPHRASE
catchPhrase = new Array();
catchPhrase[0] = "A proper solution is only seconds away!"
catchPhrase[1] = "Let's get to work solving this."
catchPhrase[2] = "Let's get to work on a solution."
catchPhrase[3] = "This shouldn't take long."
catchPhrase[4] = "This shouldn't take long!"
catchPhrase[5] = "Let's get to work figuring out a solution."
catchPhrase[6] = "Let's get this show on the road!"
catchPhrase[7] = "Without further ado:"
catchPhrase[8] = "Let's get to it!"
catchPhrase[9] = "We'll be done before you know it!"

// CONTINUATION
continuation = new Array();
continuation[0] = "How may I be of assistance?"
continuation[1] = "How can I be of assistance?"
continuation[2] = "How can I help you?"
continuation[3] = "Do you have any preferences on how we should start?"
continuation[4] = "How would you like to get started?"
continuation[5] = "How should we get started?"
continuation[6] = "How can I help you today?"
continuation[7] = "Please let me know how I can help."
continuation[8] = "What can I do you for?"
continuation[9] = "What is the issue today?"
continuation[10] = "What can I do to help you today?"
continuation[11] = "What can I do to assist you today?"









// TYPING INPUT
document.getElementById("inputField")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("chatBtn").click();
    }
});

function inputText(){
    // GET INPUT
    var input = inputField.value;
    responseField.appendChild(document.createElement('p')).innerHTML += '<p class="subject">' + input + '</p>';

    // RESET TEXT INPUT
    inputField.value = "";
    inputField.placeholder = "Click here to type...";

    // DECRIMENT NUMBER OF MESSAGES
    messagesNumber -= 1;
    console.log(messagesNumber);

    // GENERATE A RESPONSE
    if (messagesNumber == 0) {
        chaseTheCarrot()
        messagesNumber += Math.round(Math.random() * 4 + 3)
        console.log(messagesNumber);
    } else {
        setTimeout(function() {
            responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + responses[Math.round(Math.random() * 20)] + '</p>';
        }, Math.random() * 5000 + 1000)
    }
}

var messagesNumber = Math.round(Math.random() * 4 + 3)
console.log(messagesNumber);







// RESPONSES
responses = new Array();
responses[0] = "I see, could I get some more information?"
responses[1] = "I see, could you give me some more information?"
responses[2] = "I see, could I get some more detail?"
responses[3] = "I'm beginning to understand, but could you give me some more information?"
responses[4] = "I'm beginning to understand, but could you give me some more details?"
responses[5] = "I'm sorry, but I'm not quite understanding what exactly you need help with."
responses[6] = "Could you elaborate?"
responses[7] = "I see, could you please elaborate more?"
responses[8] = "I'm beginning to understand, but could you elaborate?"
responses[9] = "I understand entirely, but I am going to need some more information."
responses[10] = "Could you open that up a little more?"
responses[11] = "Can you provide additional information?"
responses[12] = "Can you disclose anymore information?"
responses[13] = "Can you provide a more detailed question?"
responses[14] = "Ok, It's all starting to come together, but can I get some more information?"
responses[15] = "Alright, a little more please?"
responses[16] = "I would appreciate it if you could give me a little more information."
responses[17] = "I would appreciate it if you could get into the details a little more."
responses[18] = "Could you expand on that?"
responses[19] = "Great start! Could you continue a little?"
responses[20] = "Ok, could you provide a little more detail?"









// CHASE THE CARROT
function chaseTheCarrot(){
    setTimeout(function() {
        responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + apology[Math.round(Math.random() * 7)] + ' But! ' + retort[Math.round(Math.random() * 7)] + '</p>';

        setTimeout(function() {
            responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + redirection[Math.round(Math.random() * 10)] + '</p>';

            setTimeout(openChatBox, 3000)
            setTimeout(clearChatBox, 3000)
        }, 2000)
    }, Math.random() * 5000 + 1000)
}









// APOLOGY
apology = new Array();
apology[0] = "Oh, you know what? I'm actually not going to be able to help you with this.";
apology[1] = "This is getting a little bit out of my area of knowledge.";
apology[2] = "Actually my area does not deal entirely with that";
apology[3] = "I'm sorry, but I doubt I will be of any help for this exact issue.";
apology[4] = "I'm afraid I won't be able to help you with this after all.";
apology[5] = "I apologize, but I can't help you with this.";
apology[6] = "I apologize, but my expertise does not extend to that.";
apology[7] = "I'm afraid I can't actually help with this.";

// RETORT
retort = new Array();
retort[0] = "I know someone who can help you!";
retort[1] = "I know who you should be in contact with.";
retort[2] = "I know the department you should be talking with.";
retort[3] = "I know exactly who you should be in contact with.";
retort[4] = "I know which department you need to speak with.";
retort[5] = "I know who can help you.";
retort[6] = "I know just the right person for you to talk to.";
retort[7] = "I know just the right person for you to talk with.";

// REDIRECTION
redirection = new Array();
redirection[0] = "I'll redirect you to them now.";
redirection[1] = "I'll connect them to you now.";
redirection[2] = "I'll send you over their way.";
redirection[3] = "Hold on while I redirect you to them.";
redirection[4] = "Please hold as I redirect you to them.";
redirection[5] = "Please wait patiently as I redirect you to them.";
redirection[6] = "Please wait patiently as I connect you with them.";
redirection[7] = "Please hold as I connect you with them.";
redirection[8] = "I'll connect them with you. This will only take a moment.";
redirection[9] = "I'll you their way. This will only take a moment.";
redirection[10] = "I'll connect you with them as fast as possible.";









// CLEAR REOPEN THE CHATBOX
function clearChatBox(){
    responseField.innerHTML = '<p id="connectingText">Connecting...</p>'
    profileName.innerHTML = 'Connecting...'
    profileImg.removeAttribute('src');

    setTimeout(function() {
        openChatBox()
        setTimeout(generateProfile, 3000);
        // document.getElementById("connectingText").innerHTML = "you are now connected to a professional."

        // BEGINNING = GREETING + INTRODUCTION
        setTimeout(function () {
            responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + greeting[Math.round(Math.random() * 11)] + ' ' + introduction[Math.round(Math.random() * 12)]; + '</p>'
        }, 5000)

        // MIDDLE = REDIRECT-QUERY
        setTimeout(function () {
            responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + redirectQuery[Math.round(Math.random() * 6)] + ' ' + redirectConfirm[Math.round(Math.random() * 6)] + '</p>';
        }, 8000)

        // CONCLUSION = PICKUP
        setTimeout(function () {
            responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + pickup[Math.round(Math.random() * 5)] + '</p>';
        }, 10000)
    }, 1)
}









// QUERY AFTER REDIRECT
redirectQuery = new Array();
redirectQuery[0] = "I hear you couldn't get the help you needed from my coworker?";
redirectQuery[1] = "I hear you had some difficulties finding a proper professional to help you?";
redirectQuery[2] = "I see you couldn't get the help you needed from my coworker?";
redirectQuery[3] = "I see you had some difficulties finding a proper professional to help you?";
redirectQuery[4] = "I'm told you couldn't get the help you needed from my coworker?";
redirectQuery[5] = "I'm told you had some difficulties finding a proper professional to help you?";
redirectQuery[6] = "I apologize that the last person couldn't help you.";

// REDIRECT CONFIRMATION
redirectConfirm = new Array();
redirectConfirm[0] = "I should be able to help you.";
redirectConfirm[1] = "Look no further I can definitely help you.";
redirectConfirm[2] = "I will be able to help you where the last person couldn't.";
redirectConfirm[3] = "Don't worry, now you're talking to the right person.";
redirectConfirm[4] = "We here in my department are far better suited for handling your issue.";
redirectConfirm[5] = "We here in my subdivision are better equipped to handle a situation like yours.";
redirectConfirm[6] = "No worries anymore though! I am the right person to be talking to.";

// PICKUP
pickup = new Array();
pickup[0] = "Do you mind catching me up with what your issue is?";
pickup[1] = "Can you tell me where the two of you left off?";
pickup[2] = "How about we start with you catching me up to date.";
pickup[3] = "Will you fill me in on your situation so I can help?";
pickup[4] = "Could you introduce me to your situation?";
pickup[5] = "I got a little info on your situation, but can you go over it again just to make sure I got evrything?";