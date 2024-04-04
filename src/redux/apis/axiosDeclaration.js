import defaultAxios from 'axios';
import env from '../../utils/env';

const axiosIpay = defaultAxios.create(env.CONFIGIPAY);
const axiosFake = defaultAxios.create(env.CONFIGCONTACT);
const axios = defaultAxios.create(env.CONFIG);

export {axiosIpay, axiosFake, axios};
