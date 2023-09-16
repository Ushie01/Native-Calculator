import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		width: '100%',
		flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50
	},
	containerItem: {
		alignItems: 'center',
		width: '25%',
		height: '20%',
		borderColor: 'gray',
		borderWidth: 0.5,
	},
	value: {
		fontSize: 25,
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
