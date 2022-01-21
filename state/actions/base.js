import * as types from '../types/base';

export const updatePageTitle = (data) => {
    return {
        type: types.UPDATE_PAGE_TITLE,
        payload: data,
    };
};

export const updateAppLanguage = (data) => {
    return {
        type: types.UPDATE_APP_LANGUAGE,
        payload: data,
    };
};