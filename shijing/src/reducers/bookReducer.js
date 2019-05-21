import { FETCH_BOOKS, SET_POEM, SET_CHAPTER, SET_BOOK } from '../actions/types';

const initialState = {
    books: [],
    book: {},
    chapter: {},
    poem: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case SET_BOOK:
            return {
                ...state,
                book: state.books[action.payload]
            }
        case SET_CHAPTER:
            return {
                ...state,
                chapter: state.book.chapters[action.payload]
            }
        case SET_POEM:
            return {
                ...state,
                poem: action.payload
            }
        default:
            return state;
    }
}