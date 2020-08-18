

var home_pane = document.querySelector('.home-pane');
var schedule_pane = document.querySelector('.schedule-pane');
var grades_pane = document.querySelector('.grades-pane');






var value = '1';


// if($('.user_course_link').hasClass('active')){
//     const user_course_link = document.querySelector('.user_course_link');
//     var arr = user_course_link.id.split('-')
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//      if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         document.querySelector('#nav-' + arr[1] +  "-" + arr[2]).innerHTML = xhttp.responseText;
//      }
//    };
//      xhttp.open("GET", "/basic" + arr[1] + "-" + arr[2], true);
//      xhttp.send();
// }

var basic_val = ""

function bases(response){
    alert(response)
    var arr = basic_val;
    document.querySelector('#nav-' + arr[1] + "-" + arr[2]).innerHTML = response;

}


function load(url, callback) {

    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        callback(xhr.response);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send('');
};

$('.btn').on('click', function () {
    alert("basic")
    this.style.background = "yellow";
})


$('.nav-link').on('click', function () {
    
    // var arr = this.id.split('-')
    // basic_val = arr;
    // var url = "/Users/christopherwilson/Desktop/PSDTOHTML/views/Classes/Math-47.ejs"   //"/basic" + arr[1] + "-" + arr[2]; //A local page
    // load(url, bases);
    alert("in here")
    var arr = this.id.split('-')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        document.querySelector('#nav-' + arr[1] + "-" + arr[2]).innerHTML = this.responseText;
     }
 };
     xhttp.open("GET", "/basic" + arr[1] + "-" + arr[2], true);
     xhttp.send();
 })

// $('.nav-link').on('click', function () {

// var arr = this.id.split('-')
// fetch("/basic" + arr[1] + "-" + arr[2]) // Call the fetch function passing the url of the API as a parameter
// .then((res) => res.text())
// .then(function(data) {
//   alert(data)
//   var content = document.querySelector('#nav-' + arr[1] + "-" + arr[2]);
//   content.appendChild(data)
//    //.innerHTML += data

//     // Your code for handling the data you get from the API
// })
// .catch(function() {
//     // This is where you run code if the server returns any errors
// });
// })




var Questions = []




function form_submit() {
    document.getElementById("search_form").submit();
 }






var dropdown_text = document.querySelector('.s_dw');
document.querySelectorAll(".ls").forEach(function(element) {
     
    element.addEventListener('click', function(event) {
         
        document.querySelectorAll(".ls").forEach(function(ele) {
            if(ele.classList.contains("dropdown-item-checked")){
                ele.classList.remove("dropdown-item-checked");
             }
        });
         element.classList.add("dropdown-item-checked");
         dropdown_text.innerHTML = element.innerHTML
      });
  });







    // Functions
    // function buildQuiz(){
    //   // variable to store the HTML output
    //   const output = [];
  
    //   // for each question...
    //   myQuestions.forEach(
    //     (currentQuestion, questionNumber) => {
  
    //       // variable to store the list of possible answers
    //       const answers = [];
  
    //       // and for each available answer...
    //       for(letter in currentQuestion.answers){
  
    //         // ...add an HTML radio button
    //         answers.push(
    //           `<label>
    //             <input type="radio" name="question${questionNumber}" value="${letter}">
    //             ${letter} :
    //             ${currentQuestion.answers[letter]}
    //           </label>`
    //         );
    //       }
  
    //       // add this question and its answers to the output
    //       output.push(
    //         `<div class="slide">
    //           <div class="question"> ${currentQuestion.question} </div>
    //           <div class="answers"> ${answers.join("")} </div>
    //         </div>`
    //       );
    //     }
    //   );
  
    //   // finally combine our output list into one string of HTML and put it on the page
    //   quizContainer.innerHTML = output.join('');
    // }
  
//     function showResults(){
  
//       // gather answer containers from our quiz
//       const answerContainers = quizContainer.querySelectorAll('.answers');
  
//       // keep track of user's answers
//       let numCorrect = 0;
  
//       // for each question...
//       myQuestions.forEach( (currentQuestion, questionNumber) => {
  
//         // find selected answer
//         const answerContainer = answerContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//         // if answer is correct
//         if(userAnswer === currentQuestion.correctAnswer){
//           // add to the number of correct answers
//           numCorrect++;
  
//           // color the answers green
//           answerContainers[questionNumber].style.color = 'lightgreen';
//         }
//         // if answer is wrong or blank
//         else{
//           // color the answers red
//           answerContainers[questionNumber].style.color = 'red';
//         }
//       });
  
//       // show number of correct answers out of total
//       resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//     }
  
//     function showSlide(n) {
//       slides[currentSlide].classList.remove('active-slide');
//       slides[n].classList.add('active-slide');
//       currentSlide = n;
//       if(currentSlide === 0){
//         previousButton.style.display = 'none';
//       }
//       else{
//         previousButton.style.display = 'inline-block';
//       }
//       if(currentSlide === slides.length-1){
//         nextButton.style.display = 'none';
//         submitButton.style.display = 'inline-block';
//       }
//       else{
//         nextButton.style.display = 'inline-block';
//         submitButton.style.display = 'none';
//       }
//     }
  
//     function showNextSlide() {
//       showSlide(currentSlide + 1);
//     }
  
//     function showPreviousSlide() {
//       showSlide(currentSlide - 1);
//     }
  
//     // Variables
//     const quizContainer = document.getElementById('quiz');
//     const resultsContainer = document.getElementById('results');
//     const submitButton = document.getElementById('submit');
//     const myQuestions = [
//       {
//         question: "Who invented JavaScript?",
//         answers: {
//           a: "Douglas Crockford",
//           b: "Sheryl Sandberg",
//           c: "Brendan Eich"
//         },
//         correctAnswer: "c"
//       },
//       {
//         question: "Which one of these is a JavaScript package manager?",
//         answers: {
//           a: "Node.js",
//           b: "TypeScript",
//           c: "npm"
//         },
//         correctAnswer: "c"
//       },
//       {
//         question: "Which tool can you use to ensure code quality?",
//         answers: {
//           a: "Angular",
//           b: "jQuery",
//           c: "RequireJS",
//           d: "ESLint"
//         },
//         correctAnswer: "d"
//       }
//     ];
  
//     // Kick things off
//     buildQuiz();
  
//     // Pagination
//     const previousButton = document.getElementById("previous");
//     const nextButton = document.getElementById("next");
//     const slides = document.querySelectorAll(".slide");
//     let currentSlide = 0;
  
//     // Show the first slide
//     showSlide(currentSlide);
  
//     // Event listeners
//     submitButton.addEventListener('click', showResults);
//     previousButton.addEventListener("click", showPreviousSlide);
//     nextButton.addEventListener("click", showNextSlide);
//   })();

var question_struct = {
    header: String,
    question: String,
    question_number: Number,
    key: [],
    answer: [],
    correctAnswer: String
}

const num_of_answers_selectElement = document.querySelector('.num_of_answers_select');
const multi_selectElement = document.querySelector('#customSwitch1');
const question_type_select = document.querySelector('.question_type_select');
const question_header_switch = document.querySelector('#header_switch');
const modal_body = document.querySelector('.damn');
const custom_select_text = document.querySelector('.num_of_answers_lb')
const correct_answer= document.querySelector('.correct_answer_text');
const correct_answer_lb= document.querySelector('.correct_answer');  
const question_header = document.querySelector('#question_header');
const question_header_lb = document.querySelector('#question_header_lb');



$('.create_question').on('click', function () {
    correct_answer.value = ""
    var answer_texts = document.querySelectorAll('.answer_text');
    var question_text = document.querySelector('.question_text');
    var key = document.querySelectorAll('#key');

    const quiz_number = document.querySelector(".question_number_text");

    quiz_number.value = 0;

    if(question_header_switch.checked){
        question_header_switch.checked = false
        question_header.style.display = "none";
        question_header_lb.style.display = "none";

    }


    if(num_of_answers_selectElement.value != 0){
        num_of_answers_selectElement.style.display = "none";
        custom_select_text.style.display = "none";
        correct_answer.style.display = "none"
        correct_answer_lb.style.display = "none"
        const matches = document.querySelectorAll('.add_quiz_multi');
        matches.forEach(function(item) {
            item.style.display = "none";
        })   
    }


        answer_texts.forEach(function(item){
        item.value = ""
    })

    key.forEach(function(item){
        item.value = ""
    })

    question_text.value = ""
    item = ""
})



$('#staticBackdrop').modal('toggle');

$('.close').on('click', function () {
    window.location.replace("/learning_centervvssms");
})




question_header_switch.addEventListener('change', (event) => {


    if(question_header_switch.checked){
        question_header.style.display = "block";
        question_header_lb.style.display = "block";
    }
    else {
        question_header.style.display = "none";
        question_header.value = "";
        question_header_lb.style.display = "none"; 
    }
});







// Question type select button
question_type_select.addEventListener('change', (event) => {
    var question_type_value = event.target.value
 
    if(question_type_value == 1){
        num_of_answers_selectElement.style.display = "block";
        custom_select_text.style.display = "block";
    }
    else {
        num_of_answers_selectElement.style.display = "none";
        custom_select_text.style.display = "none"; 
        correct_answer.style.display = "none"
        correct_answer_lb.style.display = "none"
        const matches = document.querySelectorAll('.add_quiz_multi');
        matches.forEach(function(item) {
            item.style.display = "none";
        })   
    }
})







num_of_answers_selectElement.addEventListener('change', (event) => {
     var len = event.target.value
     const matches = document.querySelectorAll('.add_quiz_multi');
     if(matches.length > 1) {
        matches.forEach(function(item) {
            item.style.display = "none";
        })
     }


     
     for (var i = 0; i < len - 1; i++){
      if(len == 2) {
         const add_quiz_multi = document.querySelector('.add_quiz_multi');
         add_quiz_multi.style.display = "block";
         var clone = add_quiz_multi.cloneNode(true)
         modal_body.appendChild(clone)
         $(".answer" ).first().css("display","inline");
         $(".answer_text" ).first().css("display","inline");

         

      } else {
      const add_quiz_multi = document.querySelector('.add_quiz_multi');
      add_quiz_multi.style.display = "block";
      var clone = add_quiz_multi.cloneNode(true)
      modal_body.appendChild(clone)
      $(".answer" ).first().css("display","inline");
      $(".answer_text" ).first().css("display","inline");
      }
     }
     correct_answer.style.display = "inline"
     correct_answer_lb.style.display = "inline"

});

$('.add-quest').on('click', function () {
    var item = question_struct;
    var answer_texts = document.querySelectorAll('.answer_text');
    var question_text = document.querySelector('.question_text');
    var key = document.querySelectorAll('#key');
    const question_header = document.querySelector('#question_header');
    const question_type_select = document.querySelector('.question_type_select');
    const quiz_number = document.querySelector(".question_number_text");


    var is_theory = false;

    if(question_header_switch.checked){
        item.header = question_header.value;
    }
    else {
        item.header = "1";
    }

    if(question_type_select.value == 2) {
        is_theory = true
    }
    else {
        is_theory = false
    }
    var answers = []
    var keys = []
    key.forEach(function(item) {
       keys.push(item.value)
    })

    answer_texts.forEach(function(item) {
        answers.push(item.value)
     })

    item.answer = answers;
    item.key = keys;
    item.question = question_text.value;
    item.question_number =  quiz_number.value
    const correct_answer= document.querySelector('.correct_answer_text');
    answer_texts.forEach(function(item) {
       item.correctAnswer = correct_answer.value;
    })
     var index = 0;
    const temp_answers = [];
    for(var i = 0; i < item.answer.length; i++){
        temp_answers.push(
                          `<label>
                            <input type="radio" name="question${index}" value="${item.key[i]}">
                            ${item.key[i]} :
                            ${item.answer[i]}
                          </label>`
                );
       }

       index += 1;
       var output = new Array();



       if(item.header != "1") {


        if(is_theory){
            output.push(`<div class=slide">
            <div class="question_header">${item.header}</div>
            <div class="question">${item.question_number + ". " + item.question} </div>
             <div><textarea class="theory_answer" type="text" id="fname" name="fname" rows="10" cols="50"> </textarea></div>
            </div`)   
             }
          else {
          output.push(`<div class=slide">
        <div class="question_header">${item.header}</div>
        <div class="question"> ${item.question_number + ". " + item.question} </div>
        <form class="answers"> ${temp_answers.join("")} </form>
        </div`)
          }
       } else {
        if(is_theory){
            output.push(`<div class=slide">
            <div class="question"> ${item.question_number + ". " + item.question} </div>
            <textarea class="theory_answer" type="text"rows="10" cols="50"> </textarea>
            </div`)
        } else {
           output.push(`<div class=slide">
           <div class="question"> ${item.question_number + ". " + item.question} </div>
           <form class="answers"> ${temp_answers.join("")} </form>
          </div`)
        }
       }
        
        var quizContainer = document.querySelector('.question_body');
        quizContainer.innerHTML += output.join("")
    
    
})


// var question = document.querySelector('.question');
// alert(question.value)

// // do a post request to create quiz
// const create_quiz = querySelector(".create_quiz_btn");
// alert(create_quiz.id)

$('.create_quiz_btn').on('click', function () {
    var quizContainer = document.querySelector('.question_body');
    var body = quizContainer.innerHTML;
    sendJSON(body)
})



function sendJSON(body) {

    var data = {
        body: body
    };

    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/create_quiz");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
 }



 const create_quiz = querySelector(".ann_title");
alert(create_quiz)
 



// create_quiz.addEventListener("submit", (event) => {

// })
