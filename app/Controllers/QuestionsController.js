import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"




function _drawQuestions() {
  let randomNumber = Math.floor(Math.random() * 10)
  let randomQuestion = appState.questions[randomNumber]
  appState.activeQuestion = randomQuestion
  console.log(randomQuestion)
  setHTML('questions', randomQuestion.QuestionTemplate)


}
export class QuestionsController {

  constructor() {
    console.log('questions controller loaded')
    // this.getQuestions()
    appState.on('questions', _drawQuestions)
  }
  async getQuestions(difficulty) {
    console.log('getting questions')
    await questionsService.getQuestions(difficulty)
    console.log('got the questions')
  }

  isCorrect(answer) {
    if (answer == appState.activeQuestion.correct_answer) {
      Pop.success('You answered correct')
      _drawQuestions()
    }
    else {
      Pop.error('Wrong Answer Buddy')
    }
  }

}