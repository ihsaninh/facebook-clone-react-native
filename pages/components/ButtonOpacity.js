import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class ButtonOpacity extends Component {
  render() {
    return (
    	<View>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={styles.button}>{this.props.buttonText}</Text>
			</TouchableOpacity>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 10,
		marginRight: 5,
	    paddingTop:10,
	    paddingBottom:10,
	    backgroundColor:'#EBEDF0',
	    borderRadius:25,
	    borderWidth: 1,
	    borderColor: '#fff',
	    width: 90
	},
	button:{
		color:'#1C1E21',
		textAlign:'center',
		fontWeight: '500'
  },
});


export default ButtonOpacity;