import React from 'react' // import react library
import { FlatList, StyleSheet, View, TextInput, Text, Button } from 'react-native' // import and define components
// import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from... because it's named inside TMDBApi.js

class Search extends React.Component {
  constructor(props) {
    super (props)
    this.searchedText = ''
    this.state = {
      films: [],
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
          placeholder='Enter a film title'
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title='Search' onPress={() => this._loadFilms()}/>
        {/* <FilmItem/> is a custom component */}
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    justifyContent: 'center',
  },
  textinput: {
    height: 70,
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
