import React from 'react'
import { Text, View } from 'react-native'

interface TodoStatsProps {
	TodosCreatedCount: number
	TodosCheckedCount: number
}

export const TodoStats = ({
	TodosCheckedCount,
	TodosCreatedCount,
}: TodoStatsProps) => {
	return (
		<View className="mt-[33] mb-5 justify-between items-center flex-row">
			<View className="flex-row gap-2">
				<Text className="text-lg font-bold font-inter text-custom-blue">
					Criadas
				</Text>
				<Text className="bg-custom-gray-400 py-[1] px-4 text-custom-gray-200 text-lg rounded-full   ">
					{TodosCreatedCount}
				</Text>
			</View>
			<View className="flex-row gap-2">
				<Text className="text-lg font-bold font-inter text-custom-purple">
					Criadas
				</Text>
				<Text className="bg-custom-gray-400 py-[1] px-4 text-custom-gray-200 text-lg rounded-full   ">
					{TodosCheckedCount}
				</Text>
			</View>
		</View>
	)
}
