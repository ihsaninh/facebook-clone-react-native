import React, {Component} from 'react';
import {
	StyleSheet, 
	Text, 
	View,
	Image,
	TextInput,
	ScrollView,
	Button,
	StatusBar,
	TouchableOpacity,
	TouchableHighlight,
	Modal 
} from 'react-native';
import styles from '../src/style/loginStyle.js';
import { Navigation } from 'react-native-navigation';
import MarketPlace from './MarketPlace';

class Login extends Component {

	constructor() {
	    super();
	    this.state = {
	      lang: 'English',
	      email: 'Telepon atau Email',
	      password: 'Kata Sandi',
	      login: 'Masuk',
	      forgotPassword: 'LUPA KATA SANDI?',
	      or: 'ATAU',
	      createAccount: 'BUAT AKUN FACEBOOK BARU',
	      modalVisible: false,
	    }
	}

	  setModalVisible(visible) {
	    this.setState({modalVisible: visible});
	  }

	 englishLang = () => {
      this.setState({ 
          lang: 'Indonesia',
       	  email: 'Telephone or Email',
	      password: 'Password',
	      login: 'Login',
	      forgotPassword: 'Forgot Password?',
	      or: 'OR',
	      createAccount: 'Create a New Account'
      })
    }

	login = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Home'
            }
        })
    }

	render() {
		return (
			<ScrollView>
			<StatusBar barStyle = "dark-content" backgroundColor = "#30477C" translucent = {true}/>
			<Modal style={{position: 'relative', height: '100%'}} animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {Alert.alert('Modal has been closed.'); }}>
		          <View style={{marginTop: 22}}>
		            <View>
		              <Text>Hello World!</Text>

		              <View style={{position: 'absolute', bottom: 0, right: 0}}>
		              <TouchableHighlight
		                onPress={() => {
		                  this.setModalVisible(!this.state.modalVisible);
		                }}>
		                <Text>Hide Modal</Text>
		              </TouchableHighlight>
		              </View>
		            </View>
		          </View>
       		</Modal>
			<View style={styles.container}>
				<View style={styles.banner}>
					<Image style={styles.bannerImg} source={require('../src/img/banner.png')} />
				</View>
				<View style={styles.content}>
					<View style={styles.lang}>
					<TouchableOpacity>
						<Text onPress={this.englishLang}>{this.state.lang} •</Text>
					</TouchableOpacity>
						<Text>Bahasa Malaysia • </Text>
						<TouchableHighlight>
				                <TouchableHighlight
							          onPress={() => {
							            this.setModalVisible(true);
							          }}>
							          <Text>Lainnya</Text>
							     </TouchableHighlight>
				        </TouchableHighlight>
					</View>
					<View style={styles.textInput}>
						<TextInput style={styles.formInput} placeholder={this.state.email} />
						<TextInput style={styles.formInput} placeholder={this.state.password} secureTextEntry={true} />
					</View>
					<View style={styles.loginButton}>
						<Button title={this.state.login} color="#4E68A2" onPress={() => this.login()}/>
					</View>
					<Text style={styles.textForgot}>{this.state.forgotPassword}</Text>
				</View>
				<View style={styles.orTextContainer}>
					<View style={styles.orTextLine}></View>
					<Text style={styles.orText}>{this.state.or}</Text>
					<View style={styles.orTextLine}></View>
				</View>
				<View style={styles.signOutButton}>
						<Button style={styles.buttonSignOut} title={this.state.createAccount} color="#07A007"/>
				</View>
		    </View>
		    </ScrollView>
		)
	}
}

export default Login