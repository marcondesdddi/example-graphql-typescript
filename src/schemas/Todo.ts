import { Field, ObjectType, InputType, ID } from 'type-graphql'

@ObjectType()
export class Todo {
	@Field(type => ID)
	id: number

	@Field()
	title: string

	@Field({ nullable: true })
	description?: string

	@Field()
	status: boolean
}

@InputType()
export class TodoInput implements Partial<Todo> {
	@Field()
	title: string

	@Field()
	description: string
}