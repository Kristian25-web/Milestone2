/*Create array to hold answers in. This conatains multiple choice, multiple select, and fill-in-the-blank*/
const answers={ 
    q1: "25",
    q2: "Growth Mindset",
    q3: "Functional strength Training",
    q4: ["Carbohydrates", "Proteins", "Fats"],
    q5: "Visualization"
};
/* Attach event listener to quiaform. This also prevent default form submission */
/*Keep score at 0 to display results when complete */
document.getElementById("quizform").addEventListener("submit", function(e){
    e.preventDefault();
    let score= 0;
    let output= "<h2>Results</h2>";

    //question1
    /* Trim whitespace and check if submission alligns with answer */
    let q1 = document.getElementById("q1").value.trim();
    if(q1=== answers.q1){
        score++;
        output+= "<p>Q1: Correct</p>";
    }else{
        output += "<p>Q1: Incorrect. Correct answer: " + answers.q1 + "</p>";
    }


//Question 2
/*Radio button input type for multiple choice answers. Check if selection is the answer */
let q2=document.querySelector('input[name="q2"]:checked');
if (q2 && q2.value === answers.q2){
    score++;
    output += "<p>Q2: Correct!</p>";
}else{
    output += "<p>Q2: Incorrect. Correct answer: " + answers.q2 + "</p>";
}

//Question 3
/*Radio button input type for multiple choice answers. Check if selection is the answer */
let q3=document.querySelector('input[name="q3"]:checked');
if (q3 && q3.value === answers.q3){
    score++;
    output += "<p>Q3: Correct!</p>";
}else{
    output += "<p>Q3: Incorrect. Correct answer: " + answers.q3 + "</p>";
}

// Question 4 (multiple answer choice select)
/*Chackbox input type to allow multiple selection. */
/*All answers will be checked to see if they match the stored answers*/
let q4 = document.querySelectorAll('input[name="q4"]:checked');
let selectedq4=[];
q4.forEach(cb => selectedq4.push(cb.value));
if (
    selectedq4.length === 3 &&
    selectedq4.includes("Carbohydrates")&&
    selectedq4.includes("proteins")&&
    selectedq4.includes("Fats")){
        score++;
        output+= "<p>q4: Correct!</p>";
    }else{
        output+="<p>q4: Incorect. Correct answers: Carbohydrates, Proteins, Fats </p>"
    }
// Question5
/*/*Radio button input type for multiple choice answers. Check if selection is the answer */
let q5 = document.querySelector('input[name="q5"]:checked');
if (q5 && q5.value === answers.q5){
    score++;
    output += "<p>Q5: Correct!</p>";
}else{
    output += "<p>Q5: Incorrect. Correct answer: " + answers.q5 + "</p>";
}

//Final score 
/* display total results*/
/*User will pass if they m=had a minimum of 3/5. If less than three, user will fail*/
output += "<h3> Total Score: "+ score + "/5</h3>";
if(score>=3){
    output += "<p class='passingresult'>You passed!</p>";
}else {
    output +="<p class='failingresult'>You failed. Please try again!</p>";
}
document.getElementById("results").innerHTML= output;
});

/*reset function to allow user to retake quiz*/
/*removes prior inputs and refreshes page*/
function resetQuiz(){
    document.getElementById("quizform").reset();
    document.getElementById("results").innerHTML="";
}