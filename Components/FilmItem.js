import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class FilmItem extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: "image"}}
        />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.vote}>Vote</Text>
          </View>
          <View style={styles.description_container}>
          {/* style and numberOfLines are 'props', that means, properties of a component*/}
            <Text style={styles.description} numberOfLines={6}>Description</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date}>Premiered on 00/00/0000</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 190
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content: {
    flex: 1,
    margin: 5
  },
  header: {
    flex: 3,
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    fontWeight: 'bold',
    fontSize: 20
  },
  vote: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date: {
    textAlign: 'right',
    fontSize: 14
  }
});

export default FilmItem
