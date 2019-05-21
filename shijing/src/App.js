import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { BrowserRouter, Route } from 'react-router-dom';
import Poems from './components/Poems';
import Poem from './components/Poem';

import Center from './components/Landing/Center';
import Home from './components/Home';
import baseStyle from './styles/baseStyle';
import { connect } from 'react-redux';
import { fetchBooks } from './actions/bookActions';

import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000)
  }

  componentWillMount() {
    this.props.fetchBooks();
  }

  async getBooks() {
    try {
      let response = await fetch(
        'https://shijing.azurewebsites.net/books',
      );
      let responseJson = await response.json();
      setTimeout(() => {
        this.setState({
          loading: false,
          books: responseJson
        });
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <View style={styles.appContainer}>
          <Center></Center>
        </View>
      );
    }
    const lightBackground = require('./resources/shijing_background.png');
    return (
        <View style={[styles.appContainer, {backgroundImage: `url(${lightBackground})`}]}>
          <BrowserRouter>
            <Route exact path="/" render={() => <Home books={this.props.books} />} />
            <Route path="/poems" component={Poems} />
            <Route path="/poem" component={Poem} />
          </BrowserRouter>
        </View>
    )
  }
}

App.propTypes = {
  fetchBooks: PropTypes.func.isRequired
}

const styles = StyleSheet.create(baseStyle);
const mapStateToProps = state => ({
  books: state.books.books
})
AppRegistry.registerComponent('App', () => App);

export default connect(mapStateToProps, { fetchBooks })(App);