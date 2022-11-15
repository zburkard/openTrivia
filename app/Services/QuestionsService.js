import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"

class QuestionsService {

  async getQuestions(difficulty) {
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=15&difficulty=' + difficulty + '&type=multiple')
    console.log(response.data)
    appState.questions = response.data.results.map(questionData => new Question(questionData))
  }








}





export const questionsService = new QuestionsService()