import React from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { setPoem } from '../../actions/bookActions';

import './Poems.css';
class Poems extends React.Component {
    prepareListOfPoems(poemsData) {
        let listOfPoems = [];
        let that = this;
        poemsData.forEach((poem, index) => {
            listOfPoems.push(
                <div className="center-poems-list" onClick={function () {
                    that.props.setPoem(poem);
                    that.props.history.push("/poem");
                }}>
                    <text className="poem-list" id={index}>{poem.title}</text>
                    <text className="poem-list highlight" id={index}>{poem.originalText[0]}</text>
                </div>
            )
        });
        return listOfPoems;
    }
    render() {
        return (
            <ScrollView>
                <div className="chapter">
                    <Text className="title">
                        {this.props.title}
                    </Text>
                    <div className="chapter-center chapter">
                        {this.prepareListOfPoems(this.props.poems)}
                    </div>
                </div>
            </ScrollView>
        );
    }
}

const matchStateToProps = state => ({
    poems: state.books.chapter.poems,
    title: state.books.chapter.title
});

export default connect(matchStateToProps, { setPoem })(Poems);