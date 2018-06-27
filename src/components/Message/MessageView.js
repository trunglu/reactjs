import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
    return {
        _message: state.messages.message,
    };
};

class MessageView extends Component {
    render() {
        return (
            <div style={{fontSize:'11px'}}>
                <p>Element:{typeof(this.props.message) == "undefined" ?
                    "":this.props.message }</p>
            </div>
        );
    }
}
export default MessageView;
//export default connect(mapStateToProps,{})(MessageView);