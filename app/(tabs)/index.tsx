import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { styles } from '../../components/index.style';
import { data } from '../../constants/data';

export default function Index() {
	const [inputValue, setInputValue] = useState('');
	const [result, setResult] = useState<number | undefined>(undefined);
	const textInputRef = React.createRef<TextInput>();

	const handleButtonClick = (value: string) => {
		if (value === '=') {
			try {
				const parsedValue = eval(inputValue);
				setResult(parsedValue);
			} catch (error) {
				setResult(undefined);
			}
		} else if (value === 'C') {
			setInputValue('');
			setResult(undefined);
		} else {
			setInputValue((prevValue) => prevValue + value);
		}
	};

	const handleTextInputFocus = () => {
		if (textInputRef.current) {
			textInputRef.current.blur();
		}
	};

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
					ref={textInputRef}
					style={styles.valueDisplay}
					value={inputValue}
					onChangeText={(text) => setInputValue(text)}
					keyboardType='numeric'
					placeholder='Enter expression'
					onFocus={handleTextInputFocus}
				/>
				<View style={styles.resultContainer}>
					{result !== undefined && (
						<Text style={styles.resultText}>{result.toLocaleString()}</Text>
					)}
				</View>
			</View>


			<View style={styles.container}>
				{data.map((d, val) => (
					<TouchableOpacity
						style={styles.containerItem}
						onPress={() => handleButtonClick(d)}
						key={val}>
						<Text style={styles.value}>{d}</Text>
					</TouchableOpacity>
				))}
			</View>
		</SafeAreaView>
	);
}
