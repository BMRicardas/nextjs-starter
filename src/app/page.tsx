import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <CardHeader>
          <h1 className="text-4xl">Next.js Starter</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-center text-xl">A simple starter for Next.js</p>
        </CardBody>
      </CardBody>
    </Card>
  );
}
