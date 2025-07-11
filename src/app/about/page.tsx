import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-col items-center text-center bg-muted/50 p-6">
          <Avatar className="h-24 w-23 mb-4 border-5 border-background shadow-md">
            <AvatarImage src="/image/about.png" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl">David Abadi</CardTitle>
          <p className="text-muted-foreground">
            Data Analytics & Narrative Architect
          </p>
        </CardHeader>
        <CardContent className="space-y-6 text-center max-w-3xl mx-auto p-6 md:p-8">
          <p>
            Hello! I'm a detail-oriented Data Analyst with a passion for
            uncovering the stories hidden within data. My goal is to bridge the
            gap between complex datasets and strategic decision-making through
            clear analysis and compelling visualization.
          </p>
          <p>
            I specialize in statistical analysis, predictive modeling, and
            creating interactive dashboards. My technical toolkit includes
            Python (with Pandas, NumPy, and Scikit-learn), SQL, and
            visualization software like Excel, Tableau and Power BI. I am driven
            by curiosity and a desire to solve real-world problems.
          </p>
          <p>
            I believe that data, when properly understood, is the most powerful
            tool for growth and innovation. This portfolio showcases some of the
            ways I've helped organizations achieve their goals. Thanks for
            stopping by!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
