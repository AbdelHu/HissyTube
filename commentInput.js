const vidComments = document.getElementsByClassName("NewVidComments");

function SubmitComment(commentIndex) {
    let input = document.getElementsByClassName("CommentInputSubmit");
    const val = input[commentIndex].value;
    console.log(val);

    if (val != "" && val != "Type stuff here") {
        let newComment = document.createElement("div");
        let newProflie = document.createElement("div");
        let newTextNode = document.createTextNode(val);
        newComment.className = "NewVidComment";
        newComment.style.width = "70%";
    
        let newPfp = document.createElement("img");
        newPfp.src = "Images/Profile pictures/human.png";
        newPfp.className = "newPfp";

        let newProfileName = document.createElement("p");
        let newProfileNameText = document.createTextNode("Mr L. D");
        let newBreak = document.createElement("br");
        let newRemoveCommentButton = document.createElement("button");
        let newRemoveTextNode = document.createTextNode("Remove comment");

        newProfileName.appendChild(newProfileNameText);
        newProfileName.className = "ProfileName";
        newRemoveCommentButton.className = "RemoveNewCommentButton";
        newRemoveCommentButton.appendChild(newRemoveTextNode);
        newProflie.appendChild(newPfp);
        newProflie.appendChild(newProfileName);
        newProflie.appendChild(newRemoveCommentButton);
        newProflie.style.display = "inline";
    
        newComment.appendChild(newProflie);
        newComment.appendChild(newBreak);
        newComment.appendChild(newTextNode);

        newComment.style.marginBottom = "5%";
        newComment.style.display = "inline-block";
    
        vidComments[commentIndex].appendChild(newComment);


        newRemoveCommentButton.addEventListener("click", function() {
            newComment.remove();
        });
    } else {
        console.log("Put a value in! ");
    }
    
}