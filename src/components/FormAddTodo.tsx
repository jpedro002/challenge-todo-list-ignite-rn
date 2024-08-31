import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

interface FormAddTodoProps {
	onSubmit: (data: FormType) => void
}

interface FormType {
	todo: string
}

export const FormAddTodo = ({ onSubmit }: FormAddTodoProps) => {
	const {
		control,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm<FormType>()

	return (
		<View className="-mt-7">
			<View className="flex-row items-center w-full h-14 ">
				<Controller
					control={control}
					name="todo"
					defaultValue=""
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							className="flex-1 border  focus:border-custom-purple-dark rounded-lg p-4
                             mr-2 bg-[#1F1E25] text-white border-custom-gray-700"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholderTextColor="#6b6b6b"
							placeholder="Digite algo..."
						/>
					)}
				/>

				<TouchableOpacity
					className=" bg-custom-blue-dark size-14  rounded-lg justify-center items-center"
					onPress={handleSubmit((data) => {
						if (data.todo.trim()) {
							onSubmit(data)
							reset()
						} else {
							setError('todo', {
								type: 'manual',
								message: 'O campo é obrigatório',
							})
						}
					})}
				>
					<Text className="text-white text-2xl">+</Text>
				</TouchableOpacity>
			</View>
			{errors.todo && (
				<Text className="text-red-500 mt-4">O campo é obrigatório</Text>
			)}
		</View>
	)
}
