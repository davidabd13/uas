import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Contact Me</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Let's Connect</CardTitle>
            <CardDescription>
              Have a project in mind or want to discuss data? I'd love to hear
              from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              You can also find me on these platforms.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-muted-foreground" />
              <p>davidabadi13@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="h-6 w-6 text-muted-foreground" />
              <a href="#" className="text-primary hover:underline">
                linkedin.com/in/david-abadi-270803245/
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github className="h-6 w-6 text-muted-foreground" />
              <a href="#" className="text-primary hover:underline">
                github.com/davidabd13
              </a>
            </div>
            <div className="pt-4">
              <img
                src="/image/cardname.png"
                alt="Map"
                className="rounded-lg"
                data-ai-hint="data analytics office"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
