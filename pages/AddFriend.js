import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Header from './components/Header';
import AddFriendList from './components/AddFriendList'

class AddFriend extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list: require('../data/addfriends.json')
	  };
	}
	render() {
		return(
				<View style={styles.addfriendContainer}>
					<Header componentId={this.props.componentId}/>
					<ScrollView>
						<View style={styles.addfriendWrapper}>
						<View style={styles.topWrapper}>
							<View style={styles.friendlist}>
								<TouchableOpacity style={styles.friendlistRequest}>
									<Text style={styles.friendlistRequestText}>Requests</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.friendlistRequest} activeOpacity = { .5 }>
									<Text style={styles.friendlistRequestText}>All Request</Text>
								</TouchableOpacity>
							</View>
						</View>
						<Text style={styles.title}>People You May Know</Text>
							{
								this.state.list.map((item, index) => {
									return(
										<View key={index}>
										<AddFriendList addFriendImg={{uri: item.photo}} addFriendName={item.name} addFriendMutual={item.mutualfriends}/>
										</View>
									)
								})
							}
						</View>
					</ScrollView>
				</View>
		)
	}
}

export default AddFriend;

const styles = StyleSheet.create({
	addfriendContainer: {
			flex: 1,
    },
    addfriendWrapper: {
    	marginHorizontal: 10
    },
    topWrapper: {
    	height: 60, 
    	borderBottomWidth: 1,
    	borderBottomColor: '#CED2D7',
	},
	title: {
		fontSize: 20, 
		fontWeight: 'bold', 
		color: '#1C1E21',
		paddingTop: 5,
	},
	friendlist: {
		flexDirection: 'row'
	},
	friendlistRequest: {
		marginTop: 10,
		marginRight: 5,
	    paddingTop:10,
	    paddingBottom:10,
	    backgroundColor:'#EBEDF0',
	    borderRadius:25,
	    borderWidth: 1,
	    borderColor: '#fff',
	    width: 90
	},
  friendlistRequestText:{
      color:'#1C1E21',
      textAlign:'center',
      fontWeight: '500'
  },
})