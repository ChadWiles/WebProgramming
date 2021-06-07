var quiz = {
    questions: [],
    unsortedQuestions: [],
    questionSequence: [0,1,2,3,4,5],
    questionID: 0,
    questionNumber: 0
};

for(let i = quiz.questionSequence.length -1; i > -1; i--){
    const j = Math.floor(Math.random() * i)
    const temp = quiz.questionSequence[i]
    quiz.questionSequence[i] = quiz.questionSequence[j]
    quiz.questionSequence[j] = temp
}

// Question order before its randomized //
quiz.unsortedQuestions[0]="What is the the name for the Jewish New Year?";
quiz.unsortedQuestions[1]="How many blue stripes are there on the U.S. flag?";
quiz.unsortedQuestions[2]="Which one of these characters is not friends with Harry Potter?";
quiz.unsortedQuestions[3]="What is the color of Donald Ducks bowtie?";
quiz.unsortedQuestions[4]="What was the name of the band Lionel Richie was a part of?";
quiz.unsortedQuestions[5]="Which animal does not appear in the Chinese zodiac?";

var seq = quiz.questionSequence;

//Questions with random sequeence //
quiz.questions[seq[0]]="What is the the name for the Jewish New Year?";
quiz.questions[seq[1]]="How many blue stripes are there on the U.S. flag?";
quiz.questions[seq[2]]="Which one of these characters is not friends with Harry Potter?";
quiz.questions[seq[3]]="What is the color of Donald Ducks bowtie?";
quiz.questions[seq[4]]="What was the name of the band Lionel Richie was a part of?";
quiz.questions[seq[5]]="Which animal does not appear in the Chinese zodiac?";

var QuestionID = 0;

QuestionID = quiz.unsortedQuestions.indexOf(quiz.questions[0]);

document.getElementById("questionText").innerHTML = quiz.questions[0] + " Question ID: " + QuestionID;

document.getElementById("questionNumber").innerHTML = " Question: " + (quiz.questionNumber + 1);



