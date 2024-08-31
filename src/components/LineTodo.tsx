import Checkbox from 'expo-checkbox'
import { Trash2 } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type LineTodoProps = {
	todo: string
	isChecked: boolean
	onRemove: () => void
	onChangeCheck: () => void
}

export const LineTodo = ({
	isChecked,
	onRemove,
	todo,
	onChangeCheck,
}: LineTodoProps) => {
	return (
		<View className="flex-row items-center bg-custom-gray-400 p-4 rounded-lg mb-4 min-h-[60px]">
			<Checkbox
				value={isChecked}
				onValueChange={onChangeCheck}
				className={`w-6 h-6 border-2 rounded-full ${
					isChecked
						? 'border-custom-purple-dark bg-custom-purple-dark'
						: 'border-custom-blue'
				}`}
			/>
			<Text
				className={`text-white flex-1 ml-2 ${
					isChecked ? 'line-through text-custom-gray-300' : ''
				}`}
			>
				{todo}
			</Text>
			<TouchableOpacity onPress={onRemove}>
				<Trash2 color="white" size={18} />
			</TouchableOpacity>
		</View>
	)
}
