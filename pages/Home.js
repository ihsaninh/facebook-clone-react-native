import React, {Component} from 'react';
import {
	Text, 
	View,
	Image,
	TextInput,
	ScrollView,
	StyleSheet
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