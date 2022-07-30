let btn = document.getElementById("btn");
let home = document.getElementById("home");
let question = document.getElementById("Questions");
let gameover = document.getElementById("gameover")
let btn2 = document.getElementById("homepage");
let btn3 = document.getElementById("restart");


btn.addEventListener('click', function(){
    home.style.display = 'none'
    question.style.display = 'flex'
})
btn2.addEventListener('click', function(){
   gameover.style.display = 'none'
   home.style.display = 'flex'
})
btn3.addEventListener('click', function(){
    gameover.style.display = 'none'
    question.style.display = 'flex'
})



function populate(){
  if(quiz.isEnded()){
    question.style.display = 'none';
    gameover.style.display = 'flex'
  }else{
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;


    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i<choices.length;i++){
     var element = document.getElementById("choice" + i);
  
       element.innerHTML = choices[i];
      guess("btns" + i, choices[i]);
    }
  }
};

function guess(id, guess){
  var button = document.getElementById(id);
   button.onclick = function(){
     quiz.guess(guess)
     populate()
   }
}


var questions = [
  new Question("Why Samir Karimov is not answer to our question in Whatsapp?", ["He is busy whole part of his day", "He doesn't want to talk with us", "He is irresponsible", "None of them"], "He doesn't want to talk with us"),
  new Question("Why Nezrin Abla is so capricious?",["She didn't like how Samir Karimov behaves", "She didn't like life given to her", "She has psychological problems", "None of them"], "None of them"),
  new Question("What dou you prefer to do,when someone get bored of coding?",["Take a rest?", "Continue to coding disregarding this", "Whatch Movies or something like this for motivattion", "None of thm"], "Continue to coding disregarding this"),
  new Question("Can you guess how old is Samir Karimov", ["41", "45", "40", "43"], "41"),
  new Question("What is popular histroy which make us to be strong and get motivation which phereprase it to us Samir Karimov on his own life?",["His history to start programming", "Example about Soliders and soup", "Example about people who earn lof of money", "None of them"],"Example about Soliders and soup")
];

var quiz = new Quiz(questions);
populate();

let button = document.querySelectorAll('.button');
 let i = 0;
button.forEach(element => {
  element.addEventListener('click', (e)=>{
    var selectedanswer = e.target.innerText;
       if(selectedanswer = questions[i].answer){
         console.log(selectedanswer)
         i++;
     }
  })
})
