import Head from 'next/head'
import {useSelector} from "react-redux";

const Base = (children) => {
    const { title, language } = useSelector(
        (state) => state.baseReducer
    );

    return (
        <>
            <Head>
                <meta httpEquiv="content-language" content={language} />
                <title>{title}</title>
            </Head>
            {children}
        </>)
}

export default Base;