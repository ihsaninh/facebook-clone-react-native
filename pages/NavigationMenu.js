import React, { Component } from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import Header from './components/Header'
import { ListItem } from 'react-native-elements'
import { Divider } from 'react-native-elements'

class NavigationMenu extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	navLists: require('../data/navigationmenu.json')
	  };
	}

	render() {
		const lists = [
		  {
		    name: 'Ihsan Nurul Habib',
		    avatar_url: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/60467814_2864130940479593_6101508434224480256_n.jpg?_nc_cat=104&efg=eyJpIjoidCJ9&_nc_eui2=AeEcBC4YhslIj3AkYv9PyOAEQK2l6d-3qKFRY9n1PvKX7xaXY7Y6n-NbaY0kbClfxQTEdN7mE2KJ78PfUkupSwTdY7z_kqBjGl0xQTGYIx5Qow&_nc_ht=scontent-sin6-2.xx&oh=ccfa3d79a35e9063757562522264005a&oe=5DC0192C',
		    subtitle: 'Lihat Profil Anda'
		  },
		  {
		    name: 'Ihsan Tutorial',
		    avatar_url: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/14462755_651802221654841_199133480738668382_n.png.jpg?_nc_cat=109&efg=eyJpIjoidCJ9&_nc_eui2=AeG2RoTF6ts9hCEqFPm26Q289Ljw75kVLL4reFcAj-A896GymxZvkMjchN27DjBDvxpR4h963nLjqK1FNBr-wPlIxTHZRQx70M_F-PUJrb7PWw&_nc_ht=scontent-sin6-2.xx&oh=ff8fbc1a20bde7d766d61e9abf225a13&oe=5D809AA5',
		    subtitle: '1 Baru'
		  },
		  {
		 	name: 'Ihsan Nurul Habib',
		    avatar_url: 'https://icons-for-free.com/iconfiles/png/512/flag+24px-131985190044767854.png',
		    subtitle: ''
		  }
	]
		return(
			<View>
			<Header componentId={this.props.componentId} />
				<ScrollView>
					<View>
					  {
					    lists.map((item, index) => (
					      <ListItem
					        key={index}
					        leftAvatar={{ source: { uri: item.avatar_url } }}
					        title={item.name}
					        subtitle={item.subtitle} titleStyle={{ fontSize: 20, color: '#212326' }}
					      />
					    ))
					  }
					</View>
					<Divider style={{ backgroundColor: '#CED2D7' }} />
					<View style={{marginBottom: 80}}>
					  {
					    this.state.navLists.map((navlist, index) => (
					      <ListItem
					        key={index}
					        leftIcon={{name: navlist.icon, type: navlist.type}}
					        title={navlist.name}
					      />
					    ))
					  }
					</View>
				</ScrollView>
			</View>
		)
	}
}

export default NavigationMenu