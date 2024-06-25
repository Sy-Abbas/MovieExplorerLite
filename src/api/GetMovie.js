import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5560cabb7792dd003901a10a34d2db12';

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const getMovies = () => {
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };

  const searchMovies = query => {
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(json => setSearchResults(json.results[0]));
  };

  const getMovieDetails = movieId => {
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => setSearchResults(json));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = () => {
    searchMovies(searchQuery);
  };

  const handleTitlePress = () => {
    setSearchResults(null);
    setSearchQuery('');
  };

  const handleMoviePress = movieId => {
    getMovieDetails(movieId);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleTitlePress}>
        <Text style={styles.title}>Movie Explorer Lite</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      {searchResults ? (
        <View style={styles.movieDetailsContainer}>
          <Image
            style={styles.moviePoster}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${searchResults.poster_path}`,
            }}
          />
          <Text style={styles.movieTitle}>{searchResults.original_title}</Text>
          <Text style={styles.movieDescription}>{searchResults.overview}</Text>
        </View>
      ) : (
        <View style={styles.moviesContainer}>
          {movieList.map(movie => (
            <TouchableOpacity
              key={movie.id}
              onPress={() => handleMoviePress(movie.id)}>
              <View style={styles.movieContainer}>
                <Image
                  style={styles.moviePoster}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                  }}
                />
                <Text style={styles.movieTitle}>{movie.original_title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

export default Movie;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007BFF',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    paddingLeft: 10,
    marginBottom: 20,
  },
  moviesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  movieContainer: {
    marginBottom: 20,
    alignItems: 'center',
    width: 120,
  },
  moviePoster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  movieTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  movieDetailsContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  movieDescription: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
});
