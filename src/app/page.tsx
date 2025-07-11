import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Database, GitBranch } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 p-4 md:p-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Data Analyst & Narrative Architect
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Transforming complex data into actionable insights and compelling
          narratives. Explore my work and see how I can help you make
          data-driven decisions.
        </p>
      </div>
      <Image
        src="/image/home.jpg"
        alt="Data Visualization Hero Image"
        width={800}
        height={400}
        className="rounded-lg shadow-xl w-full h-auto max-w-4xl"
        data-ai-hint="data visualization dashboard"
        priority
      />
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Button asChild size="lg">
          <Link href="/concepts">View Case Studies</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
      <section className="w-full max-w-5xl pt-8">
        <h2 className="text-2xl font-bold mb-6">Core Competencies</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="items-center">
              <BarChart className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Data Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Crafting clear and insightful visualizations with tools like
                Tableau and Power BI.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center">
              <Database className="w-10 h-10 text-primary mb-2" />
              <CardTitle>SQL & Databases</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Proficient in querying and managing large datasets from
                relational databases.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center">
              <GitBranch className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Statistical Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Applying statistical methods using Python (Pandas, Scikit-learn)
                to uncover trends.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
