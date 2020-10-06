import React from 'react' // import react library
import { FlatList, StyleSheet, View, TextInput, Text, Button } from 'react-native' // import and define components
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
  render() { // method of the class React.Component
    return ( // must return a component for displaying
      <View style={styles.container}>
        <TextInput style={styles.textinput} placeholder='Film Title'/>
        <Button title='Search' onPress={() => {}}/>
        <FlatList
          data={ films }
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({item}) => <FilmItem film={ item }/> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#ddd',
  },
  textinput: {
    margin: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    width: 300,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: '#000'
  }
});

export default Search
