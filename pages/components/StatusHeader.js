import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

export default class StatusHeader extends Component {
	render() {
		return(
			<View style={styles.singlePostContainer}>
				<View style={styles.singlePostImg}>
					<Image style={styles.singlePostImgPic} source={this.props.peopleImg} />
				</View>
				<View style={styles.singlePostAuthor}>
					<Text style={styles.singlePostAuthorName}>{this.props.name}</Text>
					<Text style={styles.singlePostTime}>{this.props.postTime} •</Text>
				</View>
				<View style={styles.singlePostMore}>
					<Text>•••</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	singlePostContainer: {
		flex: 1, 
		flexDirection: 'row', 
		margin: 12
	},
	singlePostImgPic: {
		height: 30, 
		width: 30, 
		borderRadius: 25,
	},
	singlePostAuthor: {
		flex: 9, 
		paddingLeft: 5,
	},
	singlePostAuthorName: {
		fontWeight: 'bold', 
		fontSize: 17,
	},
	singlePostTime: {
		fontSize: 14,
	},
	singlePostMore: {
		flex: 1, 
		paddingTop: 4,
	}
})