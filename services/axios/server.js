import {mainAxios as axios} from "./axiosInstances";
import {base} from './headers';

const response = {};

export async function Get(path, data = {}, config = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}

    await axiosInstance.get(path, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            response['status'] = error.response.status;
        }
    });

    return response;
}

export async function Post(path, data = {}, config = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}

    await axiosInstance.post(path, data, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            response['status'] = error.response.status;
        }
    });

    return response;
}

export async function Put(path, data = {}, config = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}

    await axiosInstance.put(path, data, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            response['status'] = error.response.status;
        }
    });

    return response;
}

export async function Patch(path, data = {}, config = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}

    await axiosInstance.patch(path, data, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            response['status'] = error.response.status;
        }
    });

    return response;
}

export async function Delete(path, config = {}, axiosInstance = axios)
{
    const finalConfig = {...base, ...config}

    await axiosInstance.delete(path, finalConfig).then(res => {
        response['data'] = res.data;
        response['status'] = 200;
    }).catch(function (error) {
        if (error.response) {
            response['status'] = error.response.status;
        }
    });

    return response;
}