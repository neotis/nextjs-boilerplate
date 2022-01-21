import NotFound from "../errors/404";
import Unauthorized from "../errors/401";
import Forbidden from "../errors/403";
import Error from "../errors/500";

const Dispatch = ({children, response}) => {
    switch (response.status) {
        case 200:
            return (
                <>{children}</>
            );
        case 404:
           return (
               <NotFound />
           );
        case 401:
            return (
                <Unauthorized />
            );
        case 403:
            return (
                <Forbidden />
            );
        case 500:
            return (
                <Error />
            );
    }
}

export default Dispatch;