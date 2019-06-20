import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from './TopBar'
import { Navigation } from 'react-native-navigation'
import Profile from "./Profile"

export default class Tab extends Component {

	gotoScreen = (screenName) => {
		Navigation.push(this.props.componentId, {
	        component: {
	            name: 'screenName'
	        }
	    })
    }
	render() {
		return(
			<View style={styles.headerContainer}>
				<TopBar />
				<View style={styles.tabContainer}>
					<View style={styles.tabIconContainer}>
						<TouchableOpacity>
							<Image style={styles.tabIconImg} source={require('../../src/img/homeActive.png')} />
						</TouchableOpacity>
					</View>	
					<View style={styles.tabIconContainer}>
						<TouchableOpacity>
							<Image style={styles.tabIconImg} source={require('../../src/img/group.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.tabIconContainer}>
						<TouchableOpacity>
							<Image style={styles.tabIconImg} source={require('../../src/img/watch.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.tabIconContainer}>
						<TouchableOpacity>
							<Image style={styles.tabIconImg} source={require('../../src/img/profile.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.tabIconContainer}>
						<TouchableOpacity>
							<Image style={styles.tabIconImg} source={require('../../src/img/notification.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.tabIconContainer}>
						<TouchableOpacity>
							<Image style={styles.tabIconImg} source={require('../../src/img/more.png')} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerContainer: {
		height: 85,
		borderBottomWidth: 1,
		borderBottomColor: '#c1c4c9',
		paddingBottom: 3,
	},
	tabContainer: {
		height: 40, 
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center', 
		marginLeft: 18, 
		paddingTop: 5
	},
	tabIconContainer: {
		flex:1
	},
	tabIconImg: {
		height: 24, width: 24
	}
})