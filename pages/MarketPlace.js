import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from '../pages/components/Header';

class MarketPlace extends Component {
	render() {
		return (
			<View style={styles.marketplaceContainer}>
				<Header />
				<View style={styles.marketplaceCategory}>
					<View>
						<Image></Image>
					</View>
				</View>
		 	</View>
		)
	}
}

export default MarketPlace

const styles = StyleSheet.create({
	marketplaceContainer: {
		flex: 1
	},
	marketplaceCategory: {
		height: 60,
		backgroundColor: 'blue'
	}
})