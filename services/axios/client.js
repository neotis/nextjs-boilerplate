import {mainAxios as axios} from "./axiosInstances";
import {base} from './headers';
import {warning, error} from '../../components/widgets/notification/notify';
import {notification} from "../../languages";

const basicErrorHandler = {
    401: warning,
    403: warning,
    404: error,
    500: error,
};
const response = {};

export function Get(path, data = {}, config = {}, errorHandler = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}
    const finalErrorHandler = {...basicErrorHandler, errorHandler};

    axiosInstance.get(path, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            finalErrorHandler[error.response.status](notification(error.response.status));
        }
    });

    return response;
}

export function Post(path, data = {}, config = {}, errorHandler = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}
    const finalErrorHandler = {...basicErrorHandler, errorHandler};

    axiosInstance.post(path, data, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            finalErrorHandler[error.response.status](notification(error.response.status));
        }
    });

    return response;
}

export function Put(path, data = {}, config = {}, errorHandler = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}
    const finalErrorHandler = {...basicErrorHandler, errorHandler};

    axiosInstance.put(path, data, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            finalErrorHandler[error.response.status](notification(error.response.status));
        }
    });

    return response;
}

export function Patch(path, data = {}, config = {}, errorHandler = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}
    const finalErrorHandler = {...basicErrorHandler, errorHandler};

    axiosInstance.patch(path, data, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            finalErrorHandler[error.response.status](notification(error.response.status));
        }
    });

    return response;
}

export function Delete(path, config = {}, errorHandler = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}
    const finalErrorHandler = {...basicErrorHandler, errorHandler};

    axiosInstance.delete(path, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            finalErrorHandler[error.response.status](notification(error.response.status));
        }
    });

    return response;
}