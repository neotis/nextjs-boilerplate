import {messages as messageNotificationEn} from "./notifications/en";
import store from "../state/store";
import baseReducer from "../state/reducers/base";

const notificationTxt = {
        en: messageNotificationEn
};

export const notification = (index) => {
    const state = store.getState();
    return notificationTxt[state.baseReducer.language][index];
}