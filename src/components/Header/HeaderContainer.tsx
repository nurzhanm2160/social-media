import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeThunkCreator, logoutThunkCreator } from '../../redux/reducers/authReducer';
import { StateType } from '../../redux/reduxStore';
import { $fixMe } from '../../type';

interface PropsType {
    authMeThunkCreator: () => void;
    isAuth: boolean;
    login: string | null;
    logoutThunkCreator: () => void;
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.authMeThunkCreator();
    }

    render(): JSX.Element {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logoutThunkCreator}
            />
        );
    }
}

const mapStateToProps = (state: StateType): $fixMe => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

interface MapStatePropsType {
    isAuth: boolean;
    login: string | null;
}

interface MapDispatchPropsType {
    authMeThunkCreator: () => void;
    logoutThunkCreator: () => void;
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(mapStateToProps, {
    authMeThunkCreator,
    logoutThunkCreator,
})(HeaderContainer);
