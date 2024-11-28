class Book {
	id: number
	title: string
	description: string
	topic: string[]

	constructor(
		id: number,
		title: string,
		description: string,
		topic: string[]
	) {
		this.id = id
		this.title = title
		this.description = description
		this.topic = topic
	}
}

export { Book }
