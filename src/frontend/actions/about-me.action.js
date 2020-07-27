import axios from 'axios';
import {
	GET_ABOUT_ME_DATA_SUCCESS,
	GET_ABOUT_ME_DATA_ERROR,
} from '../config/constants';

export const getAboutMeDataAction = (dispatch) => async () => {
	try {
		const url = 'https://api.eduardoalvarez.cl/node/api/about_me';

		const { data } = await axios({
			url,
			method: 'GET',
		});

		return dispatch({
			type: GET_ABOUT_ME_DATA_SUCCESS,
			payload: {
				type: 'success',
				content: data.content,
			},
		});
	} catch (error) {
		return dispatch({
			type: GET_ABOUT_ME_DATA_ERROR,
			payload: {
				type: 'error',
				error_message: error,
			},
		});
	}
};
