import React from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (Component) => {
    const ComponentWithRouterProps = (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };
    return ComponentWithRouterProps;
};

export default withRouter;
