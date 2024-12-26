import { Card, Container } from "ui"

interface HeaderProps {
	title: string
	description?: string
}

export function Header({ title, description }: HeaderProps) {
	return (
		<header className="mb-4 border-b py-6 sm:mb-8 sm:py-12 lg:mb-12">
			<Container>
				<Card.Header className="max-w-xl p-0">
					<Card.Title level={1} className="text-xl sm:text-2xl">
						{title}
					</Card.Title>
					<Card.Description className="text-sm sm:text-base">{description}</Card.Description>
				</Card.Header>
			</Container>
		</header>
	)
}
