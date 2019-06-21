import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native';
import Header from '../pages/components/Header';
import ButtonOpacity from './components/ButtonOpacity'
import MarketPlaceGrid from './components/MarketPlaceGrid'

class MarketPlace extends Component {
	render() {
		return (
		<View style={styles.marketplaceContainer}>
			<Header componentId={this.props.componentId}/>
				<View style={styles.marketplaceCategory}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={{flexDirection: 'row'}}>
							<ButtonOpacity buttonText='Jual Beli' />
							<ButtonOpacity buttonText='Lokal' />
							<ButtonOpacity buttonText='Kendaraan' />
							<ButtonOpacity buttonText='Sewa Properti' />
							<ButtonOpacity buttonText='Lainnya' />
						</View>
					</ScrollView>
				</View>
				<ScrollView>
					<View>
						<View style={styles.marketplaceWrapper}>
							<Text style={styles.marketplaceTitle}>Pilihan hari ini</Text>
							<Text style={styles.marketplaceLocation}>Kota Bogor</Text>
						</View>
						<View style={styles.gridContainer}>
						   <MarketPlaceGrid marketplaceImg={{uri: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/casio_casio-edifice-efr-533d-1avdf_full02.jpg'}} />
							<MarketPlaceGrid marketplaceImg={{uri: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/casio_casio-edifice-efr-533d-1avdf_full02.jpg'}} />
							<MarketPlaceGrid marketplaceImg={{uri: 'https://id-live-01.slatic.net/original/b30e8eafcbc4d76bd0512cf786efe6b9.jpg'}} />
							<MarketPlaceGrid marketplaceImg={{uri: 'http://cdn.elevenia.co.id/g/5/1/9/7/8/1/25519781_B.jpg'}} />
							<MarketPlaceGrid marketplaceImg= {{uri: 'https://id-test-11.slatic.net/p/e2551d00531b9a5b109f286b1dc6a588.jpg'}}/>
							<MarketPlaceGrid marketplaceImg= {{uri: 'https://bajumurahonline.biz/wp-content/uploads/2017/11/Baju-Gamis-Keren-Harga-Murah-Model-Terbaru-untuk-Wanita-Muslimah-ELLA204-7.jpg'}}/>
						</View>
					</View>
				</ScrollView>

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
		paddingHorizontal: 10,
		borderBottomWidth: 1,
    	borderBottomColor: '#CED2D7',
	},
	marketplaceWrapper: {
		marginHorizontal: 10,
		flexDirection: 'row',
		paddingTop: 5,
	},
	marketplaceTitle: {
		fontSize: 18,
		color: 'black',
		fontWeight: 'bold'
	},
	marketplaceLocation: {
		textAlign: 'center',
		marginLeft: 'auto',
		color: '#1A73E8'
	},
	imgThumbWrapper: {
		flexDirection: 'row'
	},
	gridContainer: {
		flex: 1, 
		flexDirection: 'row', 
		flexWrap: 'wrap', 
		flexGrow: 0, 
		marginTop: 5, 
		marginHorizontal: 10
	},
})