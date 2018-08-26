import { values, map, pipe, uniq } from 'ramda'

function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

function getQuestions ({ questions }) {
  return questions
}

function getTopic ({ topic }) {
  return topic
}

function getTopicList (state) {
  return pipe(getQuestions, values, map(getTopic), uniq)
}

export { getActiveQuestion, getQuestions, getTopicList }
