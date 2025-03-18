import React from "react";
import Image from "next/image";
import img1 from "../../public/images/bahlil.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";

export const NewsSection = () => {
  const dateTime = new Date();
  return (
    <Tabs defaultValue="trending" className="md:container md:mx-auto">
      <div className="grid justify-between gap-3 md:flex md:justify-between">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Berita Terkini
        </h1>
        <TabsList className="h-[40px] md:h-[45px] gap-3 mb-2 bg-gray-200 font-semibold">
          <TabsTrigger value="trending" className="md:text-lg">
            Trending
          </TabsTrigger>
          <TabsTrigger value="pendidikan" className="md:text-lg">
            Pendidikan
          </TabsTrigger>
          <TabsTrigger value="investasi" className="md:text-lg">
            Investasi
          </TabsTrigger>
          <TabsTrigger value="ekonomi" className="md:text-lg">
            Ekonomi
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="trending">
        <Card className="container md:flex md:mx-auto mb-6">
          <Image
            src={img1}
            alt="bahlil"
            className="w-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
          ></Image>
          <div className="flex flex-col justify-between items-center">
            <CardHeader>
              <CardTitle>
                <h2 className="text-3xl font-bold">
                  Global Summit Addresses Climate Change with New Initiatives
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-1 gap-10">
              <div>
                <CardDescription>
                  <p className="text-muted-foreground mb-6">
                    World leaders gathered to announce ambitious new targets for
                    reducing carbon emissions and funding renewable energy
                    projects in developing nations.
                  </p>
                </CardDescription>
                <Button>Read More</Button>
              </div>
              <div className="flex justify-between items-center">
                <p className="border rounded-2xl px-4 py-1 font-semibold shadow ">
                  Politik
                </p>
                <span>
                  {dateTime.toLocaleDateString()} -{" "}
                  {dateTime.toLocaleTimeString()}{" "}
                </span>
              </div>
            </CardContent>
          </div>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: "1",
              category: "Technology",
              title: "New AI Model Breaks Performance Records",
              description:
                "Researchers have developed a new artificial intelligence model that outperforms previous benchmarks by a significant margin.",
              time: "4 hours ago",
            },
            {
              id: "2",
              category: "Business",
              title: "Market Rebounds After Recent Decline",
              description:
                "Global markets showed strong recovery signals today following last week's unexpected downturn.",
              time: "6 hours ago",
            },
            {
              id: "3",
              category: "Politics",
              title: "Senate Passes Infrastructure Bill",
              description:
                "After months of negotiation, the Senate has passed a comprehensive infrastructure bill aimed at rebuilding roads and bridges.",
              time: "8 hours ago",
            },
            {
              id: "4",
              category: "Health",
              title: "New Study Links Exercise to Longevity",
              description:
                "A comprehensive 20-year study has found strong correlations between regular physical activity and increased lifespan.",
              time: "10 hours ago",
            },
            {
              id: "5",
              category: "Science",
              title: "Astronomers Discover Earth-like Planet",
              description:
                "Scientists have identified a potentially habitable planet orbiting a star just 40 light-years from Earth.",
              time: "12 hours ago",
            },
            {
              id: "6",
              category: "Entertainment",
              title: "Award-Winning Film Director Announces New Project",
              description:
                "The acclaimed director revealed plans for an ambitious new film set to begin production next year.",
              time: "1 day ago",
            },
          ].map((article) => (
            <Card key={article.id} className="flex flex-col h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{article.time}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm">
                  {article.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-2 border-t">
                <span className="text-xs font-bold">{article.category}</span>
                <span className="text-xs font-medium">
                  {dateTime.toLocaleDateString()} -{" "}
                  {dateTime.toLocaleTimeString()}{" "}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="pendidikan">
        <div className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">Politics News</h3>
          <p className="text-muted-foreground">
            Switch to the All News tab to see the full demo content.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="investasi">
        <div className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">Technology News</h3>
          <p className="text-muted-foreground">
            Switch to the All News tab to see the full demo content.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="ekonomi">
        <div className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">Business News</h3>
          <p className="text-muted-foreground">
            Switch to the All News tab to see the full demo content.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};
