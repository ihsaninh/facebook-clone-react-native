import React, { Component } from 'react'
import { View,Text,Image, StyleSheet, ScrollView } from 'react-native'

export default class Story extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	story: require('../../data/story.json')
	  };
	}
	render() {
		return(
			<View style={styles.status}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{
						this.state.story.map(function(item, index) {
							return (
								<View style={styles.statusImage} key={index}>
									<Image style={{borderRadius: 5, width: 100, height: 150}} resizeMode='cover' source={{uri: item.profile}} />
									<Text>{item.name}</Text>
								</View>
							)
						})
					}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	status: {
		height: 160, 
		flexDirection: 'row',
	},
	statusImage: {
		height: 150, 
		width: 100, 
		marginHorizontal: 2, 
		marginVertical: 5,
		backgroundColor: '#F5F6F9', 
		borderRadius: 5,
	},
	lineBorder: {
		borderColor: '#DDDDE4', 
		borderWidth: 2,
	},
})