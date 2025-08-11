"use client";
import { ModeToggle } from "@/components/theme-switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DynamicBreadcrumb from "@/src/app/dashboard/components/layout/dynamic-breadcrumb";
import { Header } from "@/src/app/dashboard/components/layout/header";
import { Main } from "@/src/app/dashboard/components/layout/main";
import { ProfileDropdown } from "@/src/app/dashboard/components/layout/profile-dropdown";
import { ArrowLeft, Bot, Pause, Play, Save, Settings } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AudioUploadSection } from "../../../servers/components/audio-upload-section";
import { BotConfiguration } from "../../../servers/components/bot-configuration-section";

const mockBots = [
  {
    id: 1,
    name: "Customer Support Bot",
    status: "active",
    script:
      "Hello! Thank you for calling [Company Name]. I'm here to help you with any questions or concerns you may have. How can I assist you today?",
    quantity: 2,
    rebuttals: [
      {
        question: "I'm not interested",
        answer:
          "I understand, but let me quickly share how this could benefit you...",
      },
      {
        question: "How much does it cost?",
        answer:
          "Our pricing is very competitive. Let me explain the value you'll receive...",
      },
    ],
    audioFiles: [
      {
        id: "1",
        name: "greeting.mp3",
        size: 1024000,
        type: "greeting" as const,
      },
      {
        id: "2",
        name: "hold_music.mp3",
        size: 2048000,
        type: "hold_music" as const,
      },
    ],
    createdAt: "2024-01-15",
    lastUpdated: "2024-01-20",
  },
  {
    id: 2,
    name: "Sales Outreach Bot",
    status: "training",
    script:
      "Hi [Customer Name], this is [Agent Name] from [Company Name]. I'm calling today because we have an exciting opportunity that could help your business save time and increase efficiency. Do you have a few minutes to chat?",
    quantity: 1,
    rebuttals: [
      {
        question: "We're not looking for new solutions",
        answer:
          "I completely understand. Many of our best clients said the same thing initially...",
      },
    ],
    audioFiles: [
      {
        id: "3",
        name: "sales_intro.wav",
        size: 1536000,
        type: "custom" as const,
      },
    ],
    createdAt: "2024-01-18",
    lastUpdated: "2024-01-22",
  },
];

const BotDetails = () => {
  const { slug, id } = useParams();
  const navigate = useRouter();
  const [bot, setBot] = useState<(typeof mockBots)[0] | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTab, setCurrentTab] = useState("overview");
  const [formData, setFormData] = useState({
    botName: "",
    script: "",
    quantity: 1,
    audioFile: null as File | null,
    rebuttals: [] as Array<{ question: string; answer: string }>,
  });
  const [audioFiles, setAudioFiles] = useState<
    Array<{
      id: string;
      name: string;
      size: number;
      duration?: number;
      type: "greeting" | "hold_music" | "custom";
      file?: File;
    }>
  >([]);

  useEffect(() => {
    // Find the bot by ID
    const foundBot = mockBots.find((b) => b.id === Number(id));
    if (foundBot) {
      setBot(foundBot);
      setFormData({
        botName: foundBot.name,
        script: foundBot.script,
        quantity: foundBot.quantity,
        audioFile: null,
        rebuttals: foundBot.rebuttals,
      });
      setAudioFiles(foundBot.audioFiles);
    }
  }, [id, navigate]);

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSave = () => {
    // Here you would typically save to a backend
    toast.success("Bot Updated");
    setIsEditing(false);
  };

  const handleStartTraining = () => {
    toast.success("Training Started");
  };

  if (!bot) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <Bot className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Bot Not Found</h2>
          <p className="text-muted-foreground mb-4">
            The bot you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button onClick={() => navigate.back()} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { id: "1", label: "Dashboard", href: "/dashboard" },
    { id: "2", label: "Trainings", href: "/dashboard/trainings" },
    {
      id: "3",
      label: decodeURIComponent(slug as string),
      href: `/dashboard/trainings/${slug}/${id}`,
    },
  ];

  return (
    <>
      {/* Header */}

      <Header>
        <DynamicBreadcrumb items={breadcrumbItems} maxItems={4} />
        <div className="ml-auto flex items-center gap-4">
          <ModeToggle />
          <ProfileDropdown />
        </div>
      </Header>

      {/* Main Content */}
      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {decodeURIComponent(slug as string)}
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s the content of {decodeURIComponent(slug as string)}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant={bot.status === "active" ? "default" : "secondary"}>
              {bot.status === "active" ? (
                <Play className="h-3 w-3 mr-1" />
              ) : (
                <Pause className="h-3 w-3 mr-1" />
              )}
              {bot.status}
            </Badge>
            {isEditing ? (
              <div className="flex space-x-2">
                <Button
                  onClick={() => setIsEditing(false)}
                  variant="outline"
                  size="sm"
                >
                  Cancel
                </Button>
                <Button onClick={handleSave} size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsEditing(true)} size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Edit Configuration
              </Button>
            )}
          </div>
        </div>
        <Separator className="mt-10 mb-10" />
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="script">Script & Rebuttals</TabsTrigger>
            <TabsTrigger value="audio">Audio Files</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Bot Status</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge
                    variant={bot.status === "active" ? "default" : "secondary"}
                    className="text-sm"
                  >
                    {bot.status === "active" ? (
                      <Play className="h-3 w-3 mr-1" />
                    ) : (
                      <Pause className="h-3 w-3 mr-1" />
                    )}
                    {bot.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    {bot.status === "active"
                      ? "Currently handling calls"
                      : "Training in progress"}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Active Bots</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {bot.quantity}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Concurrent instances
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Audio Files</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {bot.audioFiles.length}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Uploaded files
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Bot Information</CardTitle>
                <CardDescription>Basic details about your bot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Created
                    </label>
                    <p className="text-sm">{bot.createdAt}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Last Updated
                    </label>
                    <p className="text-sm">{bot.lastUpdated}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Rebuttals
                    </label>
                    <p className="text-sm">{bot.rebuttals.length} configured</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Script Length
                    </label>
                    <p className="text-sm">{bot.script.length} characters</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="script" className="space-y-6">
            <BotConfiguration
              configuration={formData}
              onChange={updateFormData}
            />
            {isEditing && (
              <div className="flex justify-end space-x-2">
                <Button onClick={() => setIsEditing(false)} variant="outline">
                  Cancel Changes
                </Button>
                <Button onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Configuration
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <AudioUploadSection
              audioFiles={audioFiles}
              onChange={setAudioFiles}
            />
            {isEditing && (
              <div className="flex justify-end space-x-2">
                <Button onClick={() => setIsEditing(false)} variant="outline">
                  Cancel Changes
                </Button>
                <Button onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Audio Files
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Train Your Bot</CardTitle>
                <CardDescription>
                  Update your bot&apos;s training with the latest configuration
                  changes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Ready to Train</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your bot will be trained with the current script, rebuttals,
                    and audio files. This process typically takes 5-10 minutes.
                  </p>
                  <Button onClick={handleStartTraining} className="w-full">
                    Start Training
                  </Button>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Training History</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                      <span className="text-sm">Initial Training</span>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                      <span className="text-sm">Script Update v1.1</span>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Main>
    </>
  );
};

export default BotDetails;
