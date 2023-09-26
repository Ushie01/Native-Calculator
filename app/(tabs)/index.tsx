import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { styles } from '../../components/index.style';
import { data } from '../../constants/data';
import {
	TouchableWithoutFeedback,
} from 'react-native';

export default function Index() {
	const [inputValue, setInputValue] = useState('');
	const [result, setResult] = useState<number | undefined | string>(undefined);
	const textInputRef = React.createRef<TextInput>();

	console.log(inputValue);

	const handleButtonClick = (value: string) => {
		if (value === '=') {
			try {
				const sanitizedInput = inputValue.replace(
					/(\d+)%/g,
					(_, percentage) => {
						const decimal = parseFloat(percentage) / 100;
						return decimal.toString();
					}
				);
				const parsedValue = eval(sanitizedInput);
				setResult(parsedValue);
			} catch (error) {
				setResult('input value is incorrect');
			}
		} else if (value === 'AC') {
			setInputValue('');
			setResult(undefined);
		} else if (value === '%') {
			setInputValue((prevValue) => (parseFloat(prevValue) / 100).toString());
		} else if (value === 'C') {
			setInputValue((prevValue) => prevValue.slice(0, -1));
		} else {
			setInputValue((prevValue) => prevValue + value);
		}
	};

	// const handleDelete = () => {
	// 	setInputValue((prevValue) => prevValue.slice(0, -1));
	// };

	// const handleTextInputFocus = () => {
	// 	if (textInputRef.current) {
	// 		textInputRef.current.blur();
	// 	}
	// };

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<Stack.Screen
				options={{
					headerShadowVisible: true,
					headerTitle: 'Calculator',
				}}
			/>

    

			<View style={styles.screen}>
				<TouchableWithoutFeedback>
					<TextInput
						ref={textInputRef}
						style={styles.valueDisplay}
						value={inputValue}
						onChangeText={(text) => setInputValue(text)}
						keyboardType='numeric'
						placeholder='Enter expression'
						// editable={false}
					/>
				</TouchableWithoutFeedback>

				<View style={styles.resultContainer}>
					{result !== undefined && (
						<Text style={styles.resultText}>{result.toLocaleString()}</Text>
					)}
				</View>
			</View>

			<View style={styles.container}>
				{data.map((d, val) => (
					<TouchableOpacity
						style={[
							styles.containerItem,
							d === 'AC' && styles.containerItemAC,
							d === '=' && styles.containerItemEqual,
							['( )', '% ', '+', '*', '-', '/'].includes(d) &&
								styles.containerItemSign,
						]}
						onPress={() => {
							handleButtonClick(d);
						}}
						key={val}>
						{d === 'C' ? (
							<MaterialIcons
								name='cancel-presentation'
								size={24}
								color='white'
							/>
						) : (
							<Text style={styles.value}>{d}</Text>
						)}
					</TouchableOpacity>
				))}
			</View>
		</SafeAreaView>
	);
}
