import React, {Component} from 'react';
import {
	Text, 
	View,
	Image,
	TextInput,
	ScrollView,
	StyleSheet,
	StatusBar
} from 'react-native';
import Header from '../pages/components/Header'
import AddStatus from '../pages/components/AddStatus'
import Status from '../pages/components/Status'
import Story from '../pages/components/Story'

class Home extends Component {
	render() {
		const photo  = require('../src/img/photo.jpeg');
		return (
			<View style={styles.container}>
			<StatusBar barStyle = "light-content" backgroundColor = "#30477C" translucent = {true}/>
				<Header />
				<ScrollView showsHorizontalScrollIndicator={false}>
					<AddStatus photo={photo}/>
					<Story />
					<View style={styles.lineBorder}></View>
					<Status />
				</ScrollView>
			</View>
		)
	}
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	lineBorder: {
		borderColor: '#DDDDE4', 
		borderWidth: 2,
	},
})