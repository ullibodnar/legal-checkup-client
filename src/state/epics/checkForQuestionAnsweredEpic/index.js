import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'

import { QUESTION_ANSWERED, nextQuestion } from '../..'

function checkForQuestionAnsweredEpic (action$, state$) {
  console.log('hi')
  return action$.ofType(QUESTION_ANSWERED).mergeMap(({ payload }) => {
    console.log('hello')
    return Observable.of(nextQuestion())
  })
}

export default checkForQuestionAnsweredEpic
