import { ClipboardList } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'

export function EmptyTasksView() {
	return (
		<View className="border-t  border-t-custom-gray-400 items-center py-12 gap-4 ">
			<ClipboardList size={80} strokeWidth={1.2} color="#333333" />
			<View>
				<Text className="text-custom-gray-300 text-xl font-bold text-center">
					Você ainda não tem tarefas cadastradas
				</Text>
				<Text className="text-custom-gray-300 text-lg font-normal text-center">
					Crie tarefas e organize seus itens a fazer
				</Text>
			</View>
		</View>
	)
}
