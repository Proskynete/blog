import axios from 'axios';
import {
	GET_HOME_DATA_SUCCESS,
	GET_HOME_DATA_ERROR,
} from '../config/constants';

export const getHomeDataAction = (dispatch) => async () => {
	try {
		const url = 'https://api.eduardoalvarez.cl/node/api/home';

		const { data } = await axios({
			url,
			method: 'GET',
		});

		return dispatch({
			type: GET_HOME_DATA_SUCCESS,
			payload: {
				type: 'success',
				content: data.content,
			},
		});
	} catch (error) {
		return dispatch({
			type: GET_HOME_DATA_ERROR,
			payload: {
				type: 'error',
				error_message: error,
			},
		});
	}
};
