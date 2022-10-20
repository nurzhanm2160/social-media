import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeThunkCreator, logoutThunkCreator } from '../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeThunkCreator();
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logoutThunkCreator}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

export default connect(mapStateToProps, {
    authMeThunkCreator,
    logoutThunkCreator,
})(HeaderContainer);