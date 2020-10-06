import React from 'react' // import react library
import { FlatList, StyleSheet, View, TextInput, Text, Button } from 'react-native' // import and define components
// import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from... because it's named inside TMDBApi.js

class Search extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      films: [],
      searchedText: ''
    }
  }

  _searchTextInputChanged(text) {
    this.setState({ searchedText: text })
  }

  // JS syntax to indicate that this is a private method
  _loadFilms() {
    console.log(this.state.searchedText);
    if (this.state.searchedText.length > 0) {
      getFilmsFromApiWithSearchedText(this.state.searchedText)
        .then(data => {
          this.setState({ films: data.results })
        })
    }
  }

  render() { // method of the class React.Component
    console.log('RENDERED');
    return ( // must return a component for displaying
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder='Film Title'
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title='Search' onPress={() => this._loadFilms()}/>
        {/* <FilmItem/> is a custom component */}
        <View style={styles.list_container}>
          <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  list_container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ddd',
  },
  textinput: {
    width: 300,
    height: 50,
    marginTop: 1,
    marginBottom: 1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: '#000'
  }
});

export default Search
