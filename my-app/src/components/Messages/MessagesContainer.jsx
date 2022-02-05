import React from "react";
import {actions} from "../../redux/reducers/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(actions.addMessageCreator(text));
        },
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Messages);