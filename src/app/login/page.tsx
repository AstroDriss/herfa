import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  return (
    <section className="section">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter you credentials to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="mb-4">
            <label>Email</label>
            <Input type="email" />
          </div>

          <label>Password</label>
          <Input type="password" />
        </CardContent>

        <CardFooter>
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default LoginPage;
