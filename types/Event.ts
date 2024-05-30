import { Audits } from './Audits'

export interface Event {
	id: number
	title: string
	sub_title: string
	banner: string
	audits: Audits
	description: string
	aboutMe: string
}
