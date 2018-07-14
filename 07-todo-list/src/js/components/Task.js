export default class Task {
  constructor (name) {
    this.id = new Date().getTime()
    this.name = name
    this.isComplete = false
    return this // Necesito que la retorne a manera de objeto
  }
}
