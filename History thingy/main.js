

// Called when webpage is loaded
function PageLoadEffect() {
    document.body.style.opacity = 0;
    let opac = 0;

    const intervalNum = 2;
    let inter = setInterval(frame, intervalNum);

    function frame() {
        if (opac == 100) {
            clearInterval(inter);
        } else {
            document.body.style.opacity = opac / 100;
            opac++;
        }

    }
}

function ToHome() {
    location.href = "index.html";
}
function ToShortsPage() {
    location.href = "shortsPage.html";
}



// Video buttons: 
const likeButton = document.getElementById("likeButton_id");
const dislikeButton = document.getElementById("dislikeButton_id");

let isLiked = false;
let isDisliked = false;

likeButton.addEventListener("click", function() {
    if (isLiked) {
        likeButton.style.border = "2px solid rgba(150, 100, 255, 0.0)";
        isLiked = false;
    } else {
        isLiked = true;
    }
})
dislikeButton.addEventListener("click", function() {
    if (isDisliked) {
        dislikeButton.style.border = "2px solid rgba(150, 100, 255, 0.0)";
        isDisliked = false;
    } else {
        isDisliked = true;
    }
})

console.log("Page has loaded successfully at " + new Date())

likeButton.style.border = "2px solid rgba(100, 100, 255, 0.0)";
dislikeButton.style.border = "2px solid rgba(100, 199, 255, 0.0)";

function AddLike() {
    console.log("Liked!");

    likeButton.style.border = "2px solid rgba(150, 100, 255, 0.7)";
    dislikeButton.style.border = "2px solid rgba(150, 100, 255, 0.0)";

    isDisliked = false;
}
function DisLike() {
    console.log("Disliked!");

    dislikeButton.style.border = "2px solid rgba(150, 100, 255, 0.7)";
    likeButton.style.border = "2px solid rgba(150, 199, 255, 0.0)";

    isLiked = false;
}

/*Second vid*/
const nextPartButton = document.getElementById("nextPartButton_id");
const video = document.getElementById("video_id");
let videoPartCount = 1;
    
function ToNextPart() {
    if (videoPartCount == 1) {
        videoPartCount++;
        nextPartButton.innerHTML = "⏭️ | Next Part"
        video.src = "https://www.youtube-nocookie.com/embed/Dd1JUTA7Ijc?cc_load_policy=1";
    } else if (videoPartCount == 2) {
        videoPartCount++;
        nextPartButton.innerHTML = "⏭️ | Next Part"
        video.src = "https://www.youtube-nocookie.com/embed/_uk_6vfqwTA?cc_load_policy=1";
    } else if (videoPartCount == 3) {
        videoPartCount++;
        nextPartButton.innerHTML = "🔙 | First Part"
        video.src = "https://www.youtube-nocookie.com/embed/fo2Rb9h788s?cc_load_policy=1";
    } else {
        videoPartCount = 1;
        nextPartButton.innerHTML = "⏭️ | Next Part"
        video.src = "https://www.youtube-nocookie.com/embed/ATlila3e9dM?cc_load_policy=1";
    }
}