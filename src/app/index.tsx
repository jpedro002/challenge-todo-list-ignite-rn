import constants from 'expo-constants'
import { Camera, Trash2 } from 'lucide-react-native'
import { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import LogoRocket from '../assets/images/LogoRocket.png'
import { FormAddTodo } from '../components/FormAddTodo'
import { LineTodo } from '../components/LineTodo'

const { statusBarHeight } = constants

interface todo {
	todo: string
	isChecked: boolean
	id: number
}

export default function HomeScreen() {
	const [todos, setTodos] = useState<todo[]>([])

	const handleAddTodo = ({ todo }: { todo: string }) => {
		setTodos((prev) => [
			...prev,
			{ todo, isChecked: false, id: Math.random() * 1000 },
		])
	}
	const handleChangeCheck = (id: number) => {
		const newTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
		)
		setTodos(newTodos)
	}
	const handleRemove = (id: number) => {
		const newTodos = todos.filter((todo) => todo.id !== id)
		setTodos(newTodos)
	}

	return (
		<SafeAreaView className="flex-1">
			<View
				className=" px-6 bg-custom-gray-700 h-[170] items-center justify-center"
				style={{
					paddingTop: 24 + statusBarHeight,
				}}
			>
				<Image source={LogoRocket} />
			</View>
			<View className="flex-1  bg-custom-gray-600 p-6 pt-0 ">
				<FormAddTodo onSubmit={handleAddTodo} />

				<ScrollView className=" flex-1 mt-6">
					{todos.map(({ id, isChecked, todo }) => (
						<LineTodo
							key={id}
							isChecked={isChecked}
							todo={todo}
							onChangeCheck={() => handleChangeCheck(id)}
							onRemove={() => handleRemove(id)}
						/>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}
