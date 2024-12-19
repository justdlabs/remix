import { Card, Container } from "ui";

interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="py-6 mb-4 border-b sm:py-12 sm:mb-8 lg:mb-12">
      <Container>
        <Card.Header className="p-0 max-w-xl">
          <Card.Title level={1} className="text-xl sm:text-2xl">
            {title}
          </Card.Title>
          <Card.Description className="text-sm sm:text-base">{description}</Card.Description>
        </Card.Header>
      </Container>
    </header>
  );
}
