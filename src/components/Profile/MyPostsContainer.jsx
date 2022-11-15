import MyPosts from './MyPosts/MyPosts';
import { actions } from '../../redux/reducers/profileReducer';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (body) => dispatch(actions.addPostAC(body)),
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
