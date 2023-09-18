import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 90,
		margin: 'auto',
		padding: 14,
		backgroundColor: '#212733'
	},
	containerItem: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '23%',
		height: '18%',
		borderRadius: 30,
		backgroundColor: '#323843',
        margin: '1%',
	},
	containerItemAC: {
		backgroundColor: 'darkgreen'
	},
	containerItemEqual: {
		backgroundColor: '#002351'
	},
	containerItemSign: {
		backgroundColor: '#012'
	},
	value: {
		fontSize: 30,
		color: 'white'
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
	resultContainer: {
		alignItems: 'flex-end',
		paddingHorizontal: 10,
		marginTop: 10,
	},
	resultText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
