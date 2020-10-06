import React from 'react' // import react library
import { ActivityIndicator, FlatList, StyleSheet, View, TextInput, Text, Button } from 'react-native' // import and define components
// import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from... because it's named inside TMDBApi.js

class Search extends React.Component {
  constructor(props) {
    super (props)
    this.page = 0
    this.totalPages = 0
    this.searchedText = ''
    this.state = {
      opacity: 0,
      films: [],
      isLoading: false
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  // JS syntax to indicate that this is a private method
  _loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })

      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1)
        .then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            // spread syntax
            films: [...this.state.films, ...data.results],
            isLoading: false
          })
        })
    }
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({ films: [] }, () => {
      this._loadFilms()
    })
  }

  render() { // method of the class React.Component
    return ( // must return a component for displaying
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder='Enter a film title'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._searchFilms()}
        />
        <Button title='Search' onPress={() => this._searchFilms()}/>
        {/* <FilmItem/> is a custom component */}
        <FlatList
          data={this.state.films}
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({item}) => <FilmItem film={item}/> }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
              if (this.page < this.totalPages) {
                // console.log(this.page);
                this._loadFilms()
              }
            }
          }
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 1,
    marginHorizontal: 1,
    padding: 3,
    justifyContent: 'center',
  },
  textinput: {
    height: 70,
    marginVertical: 1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: '#000'
  },
  loading_container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 110,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
});

export default Search
