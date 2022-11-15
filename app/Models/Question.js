import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.id = generateId()
    this.difficulty = data.difficulty
    this.question = data.question
    this.answers = ([...data.incorrect_answers, data.correct_answer])
    this.answers.sort(() => Math.random() - 0.5)
    this.answers.sort(() => Math.random() - 0.5)
    this.answers.sort(() => Math.random() - 0.5)
    this.answers.sort(() => Math.random() - 0.5)
    this.correct_answer = data.correct_answer
  }



  get QuestionTemplate() {
    return `
    <div class="card shadow mt-5 p-5 text-center">
              <h6 class="mb-2">${this.question}</h6>
              <p class="selectable p-2 mb-0" onclick='app.questionsController.isCorrect("${this.answers[2]}")'>${this.answers[2]}</p>
              <p class="selectable p-2 mb-0" onclick='app.questionsController.isCorrect("${this.answers[3]}")'>${this.answers[3]}</p>
              <p class="selectable p-2 mb-0" onclick='app.questionsController.isCorrect("${this.answers[1]}")'>${this.answers[1]}</p>
              <p class="selectable p-2 mb-0" onclick='app.questionsController.isCorrect("${this.answers[0]}")'>${this.answers[0]}</p>
            </div>
    `
  }












}