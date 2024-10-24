import { Header } from "@/components/header"
import type { MetaFunction } from "@remix-run/node"
import { Card, Container, Grid, Link } from "ui"

export const meta: MetaFunction = () => {
  return [
    {
      title: "Justd Starter Kit with Remix"
    },
    {
      name: "description",
      content:
        "Remix Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Justd Components, Framer Motion, and more."
    }
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
        <Grid
          gap={6}
          columns={{
            initial: 1,
            sm: 2,
            lg: 3
          }}
          className="[&_a]:cursor-pointer [&_a]:inset-0 [&_a]:absolute [&_a]:size-full [&_.grid-cell]:relative"
        >
          <Grid.Item>
            <Link target="_blank" href="https://getjustd.com" aria-label="Justd" />
            <Card>
              <Card.Header>
                <Card.Title>Justd</Card.Title>
                <Card.Description>
                  Justd is a chill set of React components, built on top of React Aria Components, all about keeping the
                  web accessible.
                </Card.Description>
              </Card.Header>
            </Card>
          </Grid.Item>

          <Grid.Item>
            <Link target="_blank" href="https://getjustd.com/colors" aria-label="Colors" />
            <Card>
              <Card.Header>
                <Card.Title>Colors</Card.Title>
                <Card.Description>
                  A stash of over 154 colors blending TailwindCSS vibes with HTML color names, served up in 8 slick
                  formats.
                </Card.Description>
              </Card.Header>
            </Card>
          </Grid.Item>

          <Grid.Item>
            <Link target="_blank" href="https://getjustd.com/icons" aria-label="Icons" />
            <Card>
              <Card.Header>
                <Card.Title>Icons</Card.Title>
                <Card.Description>
                  A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user
                  experience of your web applications.
                </Card.Description>
              </Card.Header>
            </Card>
          </Grid.Item>
        </Grid>
      </Container>
    </>
  )
}
