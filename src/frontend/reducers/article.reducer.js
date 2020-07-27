import {
	GET_LAST_BLOG_DATA_SUCCESS,
	GET_LAST_BLOG_DATA_ERROR,
} from '../config/constants';

const initialState = {
	type: '',
	content: [],
	error_message: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_LAST_BLOG_DATA_SUCCESS:
			return {
				...state,
				type: action.payload.type,
				content: action.payload.content,
			};
		case GET_LAST_BLOG_DATA_ERROR:
			return {
				...state,
				type: action.payload.type,
				error_message: action.payload.error_message,
			};
		default:
			return state;
	}
};
