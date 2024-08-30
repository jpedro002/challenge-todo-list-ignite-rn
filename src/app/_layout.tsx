import { Slot } from 'expo-router'
import '../global.css'
import { useFonts } from 'expo-font'
import { ActivityIndicator, View } from 'react-native'

export default function LayoutMain() {
	// Carregar fontes personalizadas usando expo-font
	const [fontsLoaded] = useFonts({
		Inter: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
	})

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" />
			</View>
		)
	}

	return <Slot />
}
