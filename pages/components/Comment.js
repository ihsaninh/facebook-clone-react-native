import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Comment extends Component {
	render() {
		const like = require('../../src/img/like.png');
		const haha = require('../../src/img/haha.png')
		const wow  = require('../../src/img/wow.png')
		return(
			<View style={styles.singlePostReactContainer}>
				<View style={styles.singlePostReact}>
					<Image style={styles.singlePostReactIcon} source={like} />
					<Image style={styles.singlePostReactIcon} source={haha} />
					<Image style={styles.singlePostReactIcon} source={wow} />
					<Text style={styles.singlePostLikeCount}>{this.props.likeCount}</Text>
				</View>
				<View style={styles.singlePostCommentsCount}>
					<Text>{this.props.commentCount}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	singlePostReactContainer: {
		flex: 1,
		flexDirection: 'row', 
		marginTop: 20, 
		margin: 10,
	},
	singlePostReact: {
		flex: 1, 
		flexDirection: 'row',
		marginTop: 5
	},
	singlePostReactIcon: {
		height: 18, 
		width: 18, 
		borderRadius: 25,
	},
	singlePostLikeCount: {
		paddingLeft: 3,
		paddingTop: 2,
	},
	singlePostCommentsCount: {
		flex: 1, 
		alignItems: 'flex-end', 
		justifyContent: 'flex-end', 
		marginRight: 10,
		marginTop: 5
	},
})
