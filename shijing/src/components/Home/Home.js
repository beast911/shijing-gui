import React from 'react';
import './Home.css';
import { Tabs } from 'rmc-tabs';
import 'rmc-tabs/assets/index.css';
import { connect } from 'react-redux';
import { setBook } from '../../actions/bookActions';
import Content from './Content';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.tabData = this.computeTabData(this.props.books);
        this.state = {
            index: 0
        };
    }

    componentWillMount() {
        this.props.setBook(this.state.index);
    }

    componentDidUpdate() {
        this.props.setBook(this.state.index);
    }

    computeTabData(books) {
        let tabData = [];
        books.forEach((book) => {
            tabData.push({ title: book.bookName });
        });
        return tabData;
    }

    render() {
        const baseStyle = {
            display: 'flex', flexDirection: 'column', marginTop: 4
        };
        return (
            <div style={baseStyle}>
                <Tabs tabs={this.tabData}
                    tabBarBackgroundColor="none"
                    tabBarTextStyle={{ fontSize: 21 }}
                    onChange={(tab, index) => {
                        this.setState({
                            index: index
                        });
                    }}
                >
                    <Content></Content>
                </Tabs>
            </div>
        );
    }
}

export default connect(null, { setBook })(Home);