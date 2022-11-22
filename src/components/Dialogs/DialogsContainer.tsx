import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import { actions } from '../../redux/reducers/dialogsReducer';
import { StateType } from '../../redux/reduxStore';
import { $fixMe } from '../../type';

const mapStateToProps = (state: StateType): $fixMe => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const DialogsContainer = connect(mapStateToProps, { ...actions })(Dialogs);

export default DialogsContainer;
