"use client";
import { ModeToggle } from "@/components/theme-switch";
import { Header } from "../../../components/layout/header";
import { TopNav } from "../../../components/layout/top-nav";
import { topNav } from "../../../components/layout/data/topnav-data";
import { Main } from "../../../components/layout/main";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface IIntegrations {
  title: string;
  description: string;
  status: string;
  logo: string;
}

export default function Integrations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [selectedIntegration, setSelectedIntegration] =
    useState<IIntegrations | null>(null);

  const integrations: IIntegrations[] = [
    {
      title: "LinkedIn",
      description:
        "LinkedIn is a social network that focuses on professional networking and career development.",
      status: "Connected",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    {
      title: "Xing",
      description:
        "XING is the biggest german social network for business professionals.",
      status: "Add Profile",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    {
      title: "Kununu",
      description:
        "Connect your kununu profile to include its rating widget in the ads posted on SCOUTIN.",
      status: "Add Profile",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    {
      title: "Welcome to the Jungle",
      description:
        "Welcome to the Jungle builds Employer Branding solutions that make companies attractive to workers.",
      status: "Add Profile",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    {
      title: "Apec",
      description:
        "French job board for executives, offering jobs and career advice.",
      status: "Add Profile",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    {
      title: "Hellowork",
      description:
        "Hellowork is a leading French job platform that connects your job postings with thousands of active candidates daily.",
      status: "Add Profile",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
  ];

  const handleAddProfile = (integration: IIntegrations) => {
    setSelectedIntegration(integration);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle URL submission logic here (e.g., API call to save the URL)
    console.log(`Submitted URL for ${selectedIntegration?.title}: ${url}`);
    setIsModalOpen(false);
    setUrl("");
    setSelectedIntegration(null);
  };

  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </Header>

      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Integrations</h2>
            <p className="text-muted-foreground">
              Connect your profiles to manage integrations.
            </p>
          </div>
        </div>
        <Separator className="mb-10" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="rounded-lg border hover:shadow-md transition-all duration-300 ease-in-out"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Image
                    src={integration.logo}
                    height={40}
                    width={40}
                    alt={`${integration.title} logo`}
                  />
                  <CardTitle className="text-lg">{integration.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm">
                  {integration.description}
                </p>
              </CardContent>
              <CardFooter>
                {integration.status === "Connected" ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>{integration.status}</span>
                  </div>
                ) : (
                  <Button
                    variant="link"
                    className="text-blue-600 p-0"
                    onClick={() => handleAddProfile(integration)}
                  >
                    + {integration.status}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Main>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Add {selectedIntegration?.title} Profile
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="url" className="block text-sm font-medium mb-4">
                Profile URL
              </label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={`Enter your ${selectedIntegration?.title} profile URL`}
                className="mt-1"
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
