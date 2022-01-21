import {Get} from '../services/axios/server';
import Dispatch from "../components/dispatcher/dispatch";

export default function Home({data}) {
    return (
        <Dispatch response={data}>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </Dispatch>
    );
}

export const getServerSideProps = async ({res}) => {
    let response = await Get('/');
    res.statusCode = response.status;
    return { props: {data: response} }
}