var correctAns = "Paris";

function checkAns() {


    var userChoice;
    if (document.getElementById("opt1").checked) {
        userChoice = document.getElementById("opt1").value;
    } else if (document.getElementById("opt2").checked) {
        userChoice = document.getElementById("opt2").value;
    } else if (document.getElementById("opt3").checked) {
        userChoice = document.getElementById("opt3").value;
    } else if (document.getElementById("opt4").checked) {
        userChoice = document.getElementById("opt4").value;
    }

    if (userChoice == correctAns) {
        document.getElementById("myresults").innerHTML = "Congratulations!! Your answer is correct..";
    } else {
        document.getElementById("myresults").innerHTML = "Oops!! Your answer is incorrect..";
    }
}
