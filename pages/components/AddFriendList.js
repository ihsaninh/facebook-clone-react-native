import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

class AddFriendList extends Component {
  render() {
    return (
	      <View style={styles.container}>
			<View style={styles.friendlistContainer}>
				<View>
					<View>
						<Image style={styles.friendImg} source={this.props.addFriendImg}></Image>
					</View>
				</View>
				<View style={styles.addFriendList}>
					<Text style={styles.addFriendName}>{this.props.addFriendName}</Text>
					<Text style={styles.addFriendMutual}>{this.props.addFriendMutual} teman yang sama</Text>
					<View style={styles.addFriendButtonContainer}>
						<View style={styles.addFriendButton}>
							 <TouchableOpacity
						          style={styles.ButtonAddStyle}
						          activeOpacity = { .5 }>
						        <Text style={styles.TextStyle}>Tambah</Text>
						      </TouchableOpacity>
						</View>
						<View style={styles.addFriendButton}>
							<TouchableOpacity
						          style={styles.ButtonDeleteStyle}
						          activeOpacity = { .5 }>
						        <Text style={styles.TextStyleDelete}>Hapus</Text>
						      </TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10
	},
	friendlistContainer: {
		flexDirection: 'row', 
		marginTop: 10,
		marginBottom: 5
	},
	friendImg: {
		width: 100, 
		height: 100, 
		borderRadius: 100
	},
	addFriendList: {
		marginLeft: 10,
	},
	addFriendName: {
		fontSize: 18, 
		fontWeight: 'bold', 
		color: '#1C1E21'
	},
	addFriendMutual: {
		fontSize: 16,
		color: '#757A82', 
		fontWeight: 'bold'
	},
	addFriendButtonContainer: {
		flexDirection: 'row', 
		marginTop: 10
	},
	addFriendButton: {
		marginRight: 10, 
		width: 90
	},
	ButtonAddStyle: {
	    paddingTop:10,
	    paddingBottom:10,
	    backgroundColor:'#1877F2',
	    borderRadius:5,
	    borderWidth: 1,
	    borderColor: '#fff',
	    width: 90
	},
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontWeight: '500'
  },
  ButtonDeleteStyle: {
	    paddingTop:10,
	    paddingBottom:10,
	    backgroundColor:'#EBEDF0',
	    borderRadius:5,
	    borderWidth: 1,
	    borderColor: '#fff',
	    width: 90
	},
  TextStyleDelete:{
      color:'#1E2023',
      textAlign:'center',
      fontWeight: '500'
  }
});


export default AddFriendList;