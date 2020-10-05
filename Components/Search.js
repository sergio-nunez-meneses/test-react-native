import React from 'react'; // import react library
import { View, TextInput, Button } from 'react-native' // import and define components

class Search extends React.Component {
  render() { // method of the class React.Component
    return ( // must return a component for displaying
      <View>
        <TextInput placeholder='Film Title'/>
        <Button title='Search' onPress={() => {}}/>
      </View>
    )
  }
}

export default Search
