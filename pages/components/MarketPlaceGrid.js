import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

class MarketPlaceGrid extends Component {
  render() {
    return (
		<View style={styles.gridPhotoWrapper}>
			<Image source={this.props.marketplaceImg} style={styles.gridPhoto} />
		</View>
	);
  }
}

const styles = StyleSheet.create({
	gridPhotoWrapper: {
		marginRight: 5, 
		marginBottom: 5, 
		flexBasis: '48%', 
		height: 150, 
		backgroundColor: 'rgba(255,255,255,.5)'
	},
	gridPhoto: {
		width: 145,
		height: 150
	}
});


export default MarketPlaceGrid;