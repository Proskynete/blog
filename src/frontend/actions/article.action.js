import axios from 'axios';
import {
	GET_LAST_BLOG_DATA_SUCCESS,
	GET_LAST_BLOG_DATA_ERROR,
} from '../config/constants';

export const getLastBlogDataAction = (dispatch) => async () => {
	try {
		const url = 'https://api.eduardoalvarez.cl/node/api/blog?last_articles=3';

		const { data } = await axios({
			url,
			method: 'GET',
		});

		return dispatch({
			type: GET_LAST_BLOG_DATA_SUCCESS,
			payload: {
				type: 'success',
				content: data.content,
			},
		});
	} catch (error) {
		return dispatch({
			type: GET_LAST_BLOG_DATA_ERROR,
			payload: {
				status: 'error',
				error_message: error,
			},
		});
	}
};
