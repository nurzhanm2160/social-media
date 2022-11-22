import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import { actions, DialogType, MessageType } from '../../redux/reducers/dialogsReducer';
import { StateType } from '../../redux/reduxStore';
import { $fixMe } from '../../type';

const mapStateToProps = (state: StateType): $fixMe => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

interface DialogsPageType {
    dialogs: DialogType[];
    messages: MessageType[];
}

interface MapStatePropsType {
    dialogsPage: DialogsPageType;
}

interface MapDispatchPropsType {
    addMessage: (message: string) => void;
}

const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(
    mapStateToProps,
    { addMessage: actions.addMessage },
)(Dialogs);

export default DialogsContainer;
