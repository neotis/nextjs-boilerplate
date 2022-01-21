import {Provider, useDispatch} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../state/store';
import '../styles/globals.css'
import {useRouter} from 'next/router';
import React from 'react';
import LayoutRouter from "../config/LayoutRouter";
import selector from '../languages/selector';
import {updateAppLanguage} from '../state/actions/base'
import {notification} from "../languages";

function MyApp({Component, pageProps}) {
    const dispatch = useDispatch();
    const {pathname} = useRouter();
    const language = selector(pathname);
    dispatch(updateAppLanguage(language));
    return (
        <Provider store={store}>
            <LayoutRouter path={pathname}>
                <Component {...pageProps} />
            </LayoutRouter>
        </Provider>
    );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
