import type { FormEvent } from "react";

import type { MetaFunction } from "@remix-run/node";
import { toast } from "sonner";
import { Button, Card, Checkbox, Form, Link, TextField } from "ui";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Login | Justd Remix Starter Kit",
    },
  ];
};

export default function LoginForm() {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Login Successful");
  };
  return (
    <Card className="rounded-none border-transparent sm:rounded-xl border-y-border sm:border-border">
      <Card.Header>
        <Card.Title>Login</Card.Title>
        <Card.Description>Login to your account</Card.Description>
      </Card.Header>
      <Card.Content>
        <Form onSubmit={submit} className="space-y-6">
          <TextField label="Email" name="email" type="email" isRequired />
          <TextField label="Password" name="password" type="password" isRequired />
          <div className="flex justify-between items-center">
            <Checkbox>Remember me</Checkbox>
            <Link intent="primary" href="#">
              Forgot password?
            </Link>
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </Card.Content>
    </Card>
  );
}
