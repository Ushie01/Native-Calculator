import {
	FlatList,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useState } from 'react';

const data = [
	'7',
	'8',
	'9',
	'/',
	'4',
	'5',
	'6',
	'*',
	'1',
	'2',
	'3',
	'-',
	'0',
	'C',
	'=',
	'+',
];

export default function Index() {
	const [value, setValue] = useState<number | undefined>();

	console.log(value);


	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<Stack.Screen
				options={{
					headerShadowVisible: true,
					headerTitle: 'Calculator',
				}}
			/>

			<View style={styles.screen}>
				<TextInput
					style={styles.valueDisplay}
					keyboardType='numeric'
					placeholder='767*67'
				/>
			</View>
			<View style={styles.container}>
				{data.map((d, val) => (
					<TouchableOpacity
						style={styles.containerItem}
						onPress={() => setValue(parseInt(d, 10))}
						key={val}>
						<Text style={styles.value}>{d}</Text>
					</TouchableOpacity>
				))}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	containerItem: {
		alignItems: 'center',
		width: '25%',
		height: '20%',
		borderColor: 'gray',
		borderWidth: 0.5,
	},
	value: {
		fontSize: 30,
		marginTop: 30,
		fontWeight: '300',
	},
	screen: {
		height: 50,
		width: '100%',
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	valueDisplay: {
		fontSize: 35,
		textAlign: 'right',
	},
});
