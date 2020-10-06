import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'https://www.themoviedb.org/movie' + film.poster_path}}
        />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{film.original_title}</Text>
            <Text style={styles.vote}>{film.id}</Text>
            <Text style={styles.vote}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            {/* style and numberOfLines are 'props', that means, properties of a component*/}
            <Text style={styles.description} numberOfLines={6}>{film.overview}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date}>{film.release_date}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    flexDirection: 'row'
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
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description: {
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
})

export default FilmItem
