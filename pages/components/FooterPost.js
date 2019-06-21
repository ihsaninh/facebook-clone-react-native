import React, { Component } from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'

export default class FooterPost extends Component {
	render() {
		return(
			<View style={styles.singlePostFooter}>
				<View style={styles.singlePostFooterBtn}>
					<View style={styles.singlePostBtnContent}>
						<Image style={styles.singlePostBtnIcon} source={require('../../src/img/likethis.png')} />
					</View>	
				</View>
				<View style={styles.singlePostFooterBtn}>
					<View style={styles.singlePostBtnContent}>
						<Image style={styles.singlePostBtnIcon} source={require('../../src/img/comment.png')} />
				</View>	
				</View>
				<View style={styles.singlePostFooterBtn}>
					<View style={styles.singlePostBtnContent}>
						<Image style={styles.singlePostBtnIcon} source={require('../../src/img/share.png')} />
					</View>	
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	singlePostFooter: {
		height: 50, 
		flexDirection: 'row', 
		borderTopWidth: 1, 
		borderTopColor: '#DDDDE4', 
		justifyContent: 'center', 
		alignItems: 'center', 
		paddingTop: 15
	},
	singlePostFooterBtn: {
		flex: 1, 
		height: 40
	},
	singlePostBtnContent: {
		justifyContent: 'center', 
		alignItems: 'center',
		marginTop: 2,
	},
	singlePostBtnIcon: {
		height: 20, 
		width: 20
	},
})