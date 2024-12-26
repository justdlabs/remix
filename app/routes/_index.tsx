import type { MetaFunction } from "@remix-run/node"
import { Card, Container, Link } from "ui"
import { Header } from "~/components/header"

export const meta: MetaFunction = () => {
	return [
		{
			title: "Justd Starter Kit with Remix",
		},
		{
			name: "description",
			content:
				"Remix Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Justd Components, Framer Motion, and more.",
		},
	]
}

export default function Index() {
	return (
		<>
			<Header
				title="Justd Starter Kit"
				description="Remix Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Justd Components, Framer Motion, and more."
			/>
			<Container>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 [&_a]:absolute [&_a]:inset-0 [&_a]:size-full [&_a]:cursor-pointer *:[div]:relative *:[div]:*:[div]:min-h-32">
					<div>
						<Link target="_blank" href="https://getjustd.com" aria-label="Justd" rel="noreferrer" />
						<Card>
							<Card.Header>
								<Card.Title>Justd</Card.Title>
								<Card.Description>
									Justd is a chill set of React components, built on top of React Aria Components, all
									about keeping the web accessible.
								</Card.Description>
							</Card.Header>
						</Card>
					</div>

					<div>
						<Link target="_blank" href="https://getjustd.com/colors" aria-label="Colors" rel="noreferrer" />
						<Card>
							<Card.Header>
								<Card.Title>Colors</Card.Title>
								<Card.Description>
									A stash of over 154 colors blending TailwindCSS vibes with HTML color names, served
									up in 8 slick formats.
								</Card.Description>
							</Card.Header>
						</Card>
					</div>

					<div>
						<Link target="_blank" href="https://getjustd.com/icons" aria-label="Icons" rel="noreferrer" />
						<Card>
							<Card.Header>
								<Card.Title>Icons</Card.Title>
								<Card.Description>
									A library of beautifully crafted react icons, perfect for enhancing the visual
									appeal and user experience of your web applications.
								</Card.Description>
							</Card.Header>
						</Card>
					</div>
				</div>
			</Container>
		</>
	)
}
