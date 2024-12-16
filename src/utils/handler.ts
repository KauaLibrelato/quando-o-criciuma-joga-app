import { Toast } from 'toastify-react-native';
import { ICatchHandler, IThenHandler } from './utils/types';
export const catchHandler = (err: ICatchHandler) => {
  if (err.response?.data) {
    Toast.error(err.response.data);
  } else {
    Toast.error(`Erro: ${err.response.status}`);
  }
};
export const thenHandler = (res: IThenHandler) => {
  if (res.data) {
    Toast.success(res.data.message);
  } else {
    Toast.success('Sucesso');
  }
};
