import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMe, logout } from '../../redux/reducers/authReducer';
// import { StateType } from '../../redux/reduxStore';
import { $fixMe } from '../../type';

interface PropsType {
    authMe: () => void;
    isAuth: boolean;
    login: string | null;
    logout: () => void;
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.authMe();
    }

    render(): JSX.Element {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout()}
            />
        );
    }
}

const mapStateToProps = (state: $fixMe): $fixMe => {
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
    authMe: () => void;
    logout: () => void;
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, $fixMe>(mapStateToProps, {
    authMe,
    logout,
})(HeaderContainer);
