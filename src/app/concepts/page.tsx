import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Customer Segmentation Analysis",
    description:
      "Analyzed customer data to identify key segments, informing targeted marketing strategies and increasing engagement by 15%.",
    image: "/image/segmentation.png",
    imageHint: "python logo",
    tags: ["Python", "Pandas", "Tableau"],
    link: "#",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Developed an interactive dashboard to track real-time sales metrics, enabling data-driven decisions for the sales team.",
    image: "/image/sales.jpeg",
    imageHint: "powerbi logo",
    tags: ["SQL", "Tableau", "Power BI", "Looker Data Studio"],
    link: "#",
  },
  {
    title: "Market Share Analytics",
    description:
      "Built a process of measuring and analyzing a company's portion of the market to understand its position, identify trends, and make strategic decisions.",
    image: "/image/facing.png",
    imageHint: "analytics dashboard",
    tags: ["Python", "TensorFlow", "SQL", "Data Visualization"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link
              href={project.link}
              className="block hover:opacity-90 transition-opacity"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-48"
                data-ai-hint={project.imageHint}
              />
            </Link>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
