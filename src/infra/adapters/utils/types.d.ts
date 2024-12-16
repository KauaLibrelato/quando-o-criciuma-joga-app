type IAxiosAdapter = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: any;
  query?: {
    [key: string]: any;
  };
  showSuccessToast?: boolean;
};
