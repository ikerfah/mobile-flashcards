import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import DecksScreen from './DecksScreen';

class MainScreen extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <DecksScreen />
            </View>)
    }
}


export default connect()(MainScreen);