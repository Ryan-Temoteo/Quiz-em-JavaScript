var myQuestions = [
	{
		question: "De onde é a invenção do chuveiro elétrico?",
		answers: {
			a: 'França',
			b: 'inglaterra',
			c: 'Brasil',
			d: 'Austrália',
			e: 'Itália'
		},
		correctAnswer: 'c'
	},
	{
		question: "O que a palavra 'legend' significa em português?",
		answers: {
			a: 'Legenda',
			b: 'Conto',
			c: 'Historia',
			d: 'Lenda',
			e: 'Legendário'
		},
		correctAnswer: 'd'
	},
	{
		question: "Quanto tempo a luz do sol demora para chegar à Terra?",
		answers: {
			a: '12 minutos',
			b: '1 dia',
			c: '12 horas',
			d: '8 minutos',
			e: 'segundos'
		},
		correctAnswer: 'd'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){

		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input class="botao" type="radio" name="question'+i+'" value="'+letter+'">'

						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}