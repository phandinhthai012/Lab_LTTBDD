import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS, setTodos } from './toDoActions';

// Mock API call
const fetchTodosFromApi = () => {
  return Promise.resolve([
    { id: 1, text: 'Learn React Native' },
    { id: 2, text: 'Learn Redux' },
  ]);
};

function* fetchTodos() {
  const todos = yield call(fetchTodosFromApi);
  yield put(setTodos(todos));
}

function* todoSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodos);
}

export default todoSaga;
