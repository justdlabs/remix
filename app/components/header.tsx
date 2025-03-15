import { Card, CardDescription, CardHeader, Container, Heading } from "ui"

interface HeaderProps {
	title: string
	description?: string
}

export function Header({ title, description }: HeaderProps) {
	return (
		<header className="mb-4 border-b py-6 sm:mb-8 sm:py-12 lg:mb-12">
			<Container>
				<CardHeader className="max-w-xl p-0">
					<Heading className="text-xl sm:text-2xl">{title}</Heading>
					<CardDescription className="text-sm sm:text-base">{description}</CardDescription>
				</CardHeader>
			</Container>
		</header>
	)
}
