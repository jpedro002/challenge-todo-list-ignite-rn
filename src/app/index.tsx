import constants from 'expo-constants'
import { ClipboardList } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import LogoRocket from '../assets/images/LogoRocket.png'
import { EmptyTasksView } from '../components/EmptyTasksView'
import { FormAddTodo } from '../components/FormAddTodo'
import { LineTodo } from '../components/LineTodo'
import { TodoStats } from '../components/TodoStats'

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

	const hasTodos = todos.length !== 0

	const todosChecked = useMemo(
		() => todos.filter((todo) => todo.isChecked),
		[todos],
	)

	return (
		<ScrollView className="flex-1" scrollEnabled={hasTodos}>
			<View
				className=" px-6 bg-custom-gray-700 h-[170] items-center justify-center"
				style={{
					paddingTop: 24 + statusBarHeight,
				}}
			>
				<Image source={LogoRocket} />
			</View>
			<View className="flex-1  bg-custom-gray-600 p-6 pt-0 h-full min-h-screen ">
				<FormAddTodo onSubmit={handleAddTodo} />

				<TodoStats
					TodosCheckedCount={todosChecked.length}
					TodosCreatedCount={todos.length}
				/>

				<View className=" flex-1 mt-6 ">
					{todos.map(({ id, isChecked, todo }) => (
						<LineTodo
							key={id}
							isChecked={isChecked}
							todo={todo}
							onChangeCheck={() => handleChangeCheck(id)}
							onRemove={() => handleRemove(id)}
						/>
					))}

					{todos.length === 0 && <EmptyTasksView />}
				</View>
			</View>
		</ScrollView>
	)
}
