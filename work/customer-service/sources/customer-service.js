console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

function profileGroup(){
    return Math.round(Math.random() * 11)
}

function profileIndex(){
    return Math.round(Math.random() * 23)
}








const profileImg = document.getElementById("profileImg")

profileImg.src = "assets/profiles/set_"+ profileGroup(0) +"/profile_"+ profileIndex(0) +".jpg";