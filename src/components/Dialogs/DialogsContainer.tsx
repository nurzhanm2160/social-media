import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import { dialogsSlice, DialogType, MessageType } from '../../redux/reducers/dialogsReducer';
import { $fixMe } from '../../type';

const mapStateToProps = (state: $fixMe): $fixMe => {
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

const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, $fixMe>(
    mapStateToProps,
    { addMessage: dialogsSlice.actions.addMessage },
)(Dialogs);

export default DialogsContainer;
