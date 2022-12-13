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









// Math.random() * 5000



// GENERATE INITIAL INTRODUCTION
for (var i = allHelpBtns.length-1; i >=0  ; i--) {
	(function () {
		var selectedTopic = allHelpBtns[i].id

		allHelpBtns[i].addEventListener("click", function() {
            openChatBox()
            setTimeout(generateProfile, 0);
            document.getElementById("connectingText").innerHTML = "you are now connected to a professional."

            // BEGINNING = GREETING + INTRODUCTION
            setTimeout(function () {
                responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + greeting[Math.round(Math.random() * 9)] + ' ' + introduction[Math.round(Math.random() * 12)]; + '</p>'
            }, 0)

            // MIDDLE = TOPIC-QUERY + TOPIC-RESPONSE + TOPIC-BOAST + CATCHPHRASE
            setTimeout(function () {
                responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + topicQuery[Math.round(Math.random() * 3)] + '<strong>' + topicResponse[selectedTopic] + '</strong>' + topicBoast[Math.round(Math.random() * 0)] + catchPhrase[Math.round(Math.random() * 0)] + '</p>';
            }, 10)

            // CONCLUSION = CONTINUATION
            setTimeout(function () {
                responseField.appendChild(document.createElement('p')).innerHTML += '<p class="server">' + continuation[Math.round(Math.random() * 2)] + '</p>';
            }, 20)
		}, false)
	}());
}

function openChatBox(){
    chatContainer.classList.toggle("hidden")
}





// GREETINGS
greeting = new Array();
greeting[0] = "Hello!"
greeting[1] = "Hello,"
greeting[2] = "Good morning!"
greeting[3] = "Good morning,"
greeting[4] = "Good afternoon!"
greeting[5] = "Good afternoon,"
greeting[6] = "Good evening!"
greeting[7] = "Good evening,"
greeting[8] = "Hello there!"
greeting[9] = "Hello there,"

// INTODUCTION
introduction = new Array();
introduction[0] = "Lets solve some issues!";
introduction[1] = "It's time to fix some issues!";
introduction[2] = "Lets solve some propblems!";
introduction[3] = "It's time to fix some problems!";
introduction[4] = "Lets solve some dilemmas!";
introduction[5] = "It's time to fix some dilemas!";
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
topicBoast[3] = "This is infact my area of expertise. "

// CATCHPHRASE
catchPhrase = new Array();
catchPhrase[0] = "A proper solution is only seconds away!"

// CONTINUATION
continuation = new Array();
continuation[0] = "How may I be of assistance?"
continuation[1] = "How can I be of assistance?"
continuation[2] = "How can I help you?"









// TYPING INPUT
document.getElementById("inputField")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("chatBtn").click();
    }
});

function inputText(){
        // get Input
        var input = inputField.value;
        responseField.appendChild(document.createElement('p')).innerHTML += '<p class="subject">' + input + '</p>';
    
        // reset text input
        inputField.value = "";
        inputField.placeholder = "Click here to type...";
}