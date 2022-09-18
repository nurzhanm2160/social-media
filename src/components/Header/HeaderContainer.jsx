import React from 'react'
import {instance} from "../../api/api";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthDataAC} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        instance.get('auth/me').then(response => {
            let {id, email, login} = response.data.data
            console.log(response.data.resultCode)
            if(response.data.resultCode === 0){
                this.props.setAuthDataAC(id, email, login)
            }
        })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthDataAC})(HeaderContainer)


