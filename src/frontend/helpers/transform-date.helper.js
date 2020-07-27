import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

export const prettyDate = (date) => moment(date).format('LL');
