import { FETCH_BOOKS, SET_POEM, SET_CHAPTER, SET_BOOK } from './types';

async function getBooks(dispatch) {
    try {
        let response = await fetch(
            'https://shijing.azurewebsites.net/books',
        );
        let responseJson = await response.json();
        dispatch({
            type: FETCH_BOOKS,
            payload: responseJson
        })
    } catch (error) {
        console.error(error);
    }
}
export const fetchBooks = () => dispatch => {
    getBooks(dispatch);
}

export const setBook = (args) => dispatch => {
    dispatch({
        type: SET_BOOK,
        payload: args
    });
}

export const setChapter = (args) => dispatch => {
    dispatch({
        type: SET_CHAPTER,
        payload: args
    });
}

export const setPoem = (args) => dispatch => {
    dispatch({
        type: SET_POEM,
        payload: args
    });
}