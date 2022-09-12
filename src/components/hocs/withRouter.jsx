import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

const withRouter = (Component) => {
    const ComponentWithRouterProps = (props) => {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return <Component {...props} router={{location, navigate, params}}/>
    }
    return ComponentWithRouterProps;
}

export default withRouter