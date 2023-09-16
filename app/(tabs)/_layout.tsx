import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export const unstable_settings = {
    initialRouteName: 'index',
};

export default function Layout() {
	return (
		<Stack initialRouteName='index'>
			<Stack.Screen name='index' />
		</Stack>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 40
	}
})