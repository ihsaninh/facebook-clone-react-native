import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default class AddStatus extends Component {
	render() {
		const upload = require('../../src/img/upload.png');
		return(
			<View>
				<View style={styles.addStatus}>
					<View style={styles.addStatusContainer}>
						<View style={styles.addStatusPic}>
							<Image style={styles.addStatusPicture} source={this.props.photo} />
						</View>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput style={styles.TextInputStatus} placeholder='Apa yang Anda pikirkan?' placeholderTextColor='grey' />
					</View>
					<View style={styles.statusUploadContainer}>
						<View style={styles.statusUpload}>
							<Image style={styles.statusImageUpload} source={upload} />
						</View>
					</View>
				</View>
			<View style={styles.lineBorder}></View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	addStatus: {
		height: 60, 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'center', 
		marginLeft: 5,
	},
	addStatusPic: {
		flex:1, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	addStatusPicture: {
		height: 35,
		width: 35, 
		borderRadius: 25,
	},
	TextInputStatus: {
		paddingHorizontal: 10, 
		height: 35, 
		borderColor: '#DDDDE4', 
		borderWidth: 1, 
		marginTop: 2, borderRadius: 20	
	},
	statusUpload: {
		flex:1, 
		alignItems: 'center', 
		justifyContent: 'center',
	},
	peopleStatusContainer: {
		flex: 6, 
		alignItems: 'center', 
		justifyContent: 'center',
	},
	addStatusContainer: {
		flex: 2,
	},
	textInputContainer: {
		flex:12,
		marginLeft: 5
	}, 
	statusUploadContainer: {
		flex:2
	},
	statusImageUpload: {
		height: 28, 
		width: 20
	},
	lineBorder: {
		borderColor: '#DDDDE4', 
		borderWidth: 3,
	}
})