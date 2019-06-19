import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import StatusHeader from './StatusHeader'
import Content from './Content'
import Comment from './Comment'
import FooterPost from './FooterPost'

export default class Status extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	status: require('../../data/status.json')
	  };
	}
	render() {
		return(
			<View>
				<View style={styles.lineBorder}></View>
				{
					this.state.status.map((item, index) => {
						return(
							<View key={index}>
								<View style={styles.peopleStatusContainer}>
									<StatusHeader name={item.name} postTime={item.posted} peopleImg={{uri: item.profilepic}}/>
									<Content fill={item.fill} />
									<Comment likeCount={item.likecount} commentCount={item.commentcount}/>
									<FooterPost />
								</View>
								<View style={styles.lineBorder}></View>
							</View>
						)
					})
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	peopleStatusContainer: {
		flex: 6, 
		alignItems: 'center', 
		justifyContent: 'center',
	},
	lineBorder: {
		borderColor: '#DDDDE4', 
		borderWidth: 2,
	},
})