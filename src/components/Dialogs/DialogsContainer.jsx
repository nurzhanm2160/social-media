import {connect} from "react-redux";

import Dialogs from "./Dialogs";
import {addMessageAC} from "../../redux/reducers/dialogsReducer";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => dispatch(addMessageAC(message))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;