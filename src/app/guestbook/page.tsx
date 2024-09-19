import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Textarea,
} from "@nextui-org/react";

export default function Guestbook() {
  return (
    <Card className="mx-auto mt-4 max-w-lg">
      <CardHeader>
        <h1 className="text-center text-5xl">Welcome to my guestbook!</h1>
      </CardHeader>
      <CardBody>
        <form className="mt-4 flex flex-col gap-2">
          <Textarea
            label="Message"
            placeholder="Enter your message"
            className="w-full"
          />
          <Button>Create</Button>
        </form>
      </CardBody>
    </Card>
  );
}
