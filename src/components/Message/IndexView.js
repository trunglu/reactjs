import React, {Component} from 'react';
import MessageView from './MessageView';
import {loadMessages} from './../../redux/actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

class Message_Index_View extends Component {

    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        this.props.loadMessages();
        console.log("Props cua trang Index View");
        console.log(this.props);
    }

    render() {
        var l_msg = [];
        if(!this.props.messages){

        }
        for (var i = 0; i < this.props.messages.length; i++) {
            l_msg.push((
                <MessageView key={i} message={"Element :" + this.props.messages[i].message}/>
            ));
        }
        return (
            <div>
                <h3>Show List Message</h3>
                <div id="list_msg">{l_msg}</div>
            </div>
        );
    };
}

export default connect(mapStateToProps, {loadMessages})(Message_Index_View);
