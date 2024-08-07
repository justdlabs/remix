import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Grid, GridItem } from "@/components/ui/grid";
import { Link } from "@/components/ui/link";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Just D. Starter Kit with Remix'
    },
    { name: "description", content: "Remix Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Justd Components, Framer Motion, and more." },
  ];
};

export default function Index() {
  return (
    <>
      <Nav />
      <div className="py-6">
        <Header
          title="Just D. Starter Kit"
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
            <GridItem>
              <Link target="_blank" href="https://justd.co" aria-label="Justd" />
              <Card>
                <CardHeader>
                  <CardTitle>Just D.</CardTitle>
                  <CardDescription>
                    Just D. is a chill set of React components, built on top of React Aria Components, all about keeping
                    the web accessible.
                  </CardDescription>
                </CardHeader>
              </Card>
            </GridItem>

            <GridItem>
              <Link target="_blank" href="https://justd.co/colors" aria-label="Colors" />
              <Card>
                <CardHeader>
                  <CardTitle>Colors</CardTitle>
                  <CardDescription>
                    A stash of over 154 colors blending TailwindCSS vibes with HTML color names, served up in 8 slick
                    formats.
                  </CardDescription>
                </CardHeader>
              </Card>
            </GridItem>

            <GridItem>
              <Link target="_blank" href="https://paranoid.irsyad.co" aria-label="Paranoid" />
              <Card>
                <CardHeader>
                  <CardTitle>Paranoid</CardTitle>
                  <CardDescription>
                    A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user
                    experience of your web applications.
                  </CardDescription>
                </CardHeader>
              </Card>
            </GridItem>
          </Grid>
        </Container>
      </div>
    </>
  );
}
