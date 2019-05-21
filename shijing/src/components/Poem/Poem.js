import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import { Tabs } from 'rmc-tabs';
import './Poem.css';

class Poem extends React.Component {
    constructor(props) {
        super(props);
        this.tabData = [{
            title: "注释"
        }, {
            title: "题解"
        }, {
            title: "赏析"
        }];
        this.state = {
            selected: "注释"
        };
    }
    generatePoemText() {
        let poemList = [];
        this.props.poem.originalText.forEach((poem, index) => {
            poemList.push(
                <div className="center-poem">
                    <div className="original-text" id={index}>{poem}</div>
                </div>)
        });
        return poemList;
    }
    loadSelectedDetails() {
        if (this.state.selected === '赏析') {
            return (
                <div>{this.props.poem.analysis}</div>
            )
        } else if (this.state.selected === '题解') {
            let simplifiedList = this.props.poem.simplifiedText.map((item, index) => {
                return (
                    <div id={index} style={{ display: "flex" }} className="center-poem-content">
                        {item}
                    </div>)
            });
            return (
            <div className="poem-center poem">
                {simplifiedList}
            </div>);
        } else if (this.state.selected === '注释') {
            let list = this.props.poem.note.map((item, index) => {
                return (
                    <div style={{ display: "flex" }} className="center-poem-content">
                        {index + 1}、 <div id={index}>{item}</div>
                    </div>)
            });
            return (
                <div class="poem-center poem">
                    {list}
                </div>
            )
        }
    }
    render() {
        return (
            <ScrollView>
                <div className="poem">
                    <Text className="poem-center title">{this.props.chapterTitle}·{this.props.poem.title}</Text>
                    <div className="scroll">
                        <div className="poem-center">
                            {this.generatePoemText()}
                        </div>
                        <div className="tab-bar">
                            <Tabs tabs={this.tabData}
                                tabBarBackgroundColor="none"
                                tabBarTextStyle={{ fontSize: 18 }}
                                onChange={(tab) => {
                                    this.setState({
                                        selected: tab.title
                                    });
                                }}
                            >
                            </Tabs>
                        </div>
                        <div className="details">
                            {this.loadSelectedDetails()}
                        </div>
                    </div>
                </div>
            </ScrollView>
        )
    }
}
const matchStateToProps = state => ({
    poem: state.books.poem,
    chapterTitle: state.books.chapter.title
});
export default connect(matchStateToProps)(Poem);