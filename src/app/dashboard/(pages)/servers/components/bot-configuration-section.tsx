import { Badge } from "@/components/ui/badge";
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
import {
  Bot,
  Clock,
  MessageSquare,
  Plus,
  Trash2,
  Users,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { useGetServer } from "../../../hooks/server-hooks";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Rebuttal {
  question: string;
  answer: string;
}

interface BotConfiguration {
  script?: string;
  quantity?: number;
  server_id?: number;
  rebuttals?: Rebuttal[];
}

interface BotConfigurationProps {
  configuration: BotConfiguration;
  onChange: (config: BotConfiguration) => void;
}

export const BotConfiguration: React.FC<BotConfigurationProps> = ({
  configuration,
  onChange,
}) => {
  const [script, setScript] = useState(configuration.script || "");
  const [serverId, setServerId] = useState(configuration.server_id);
  const [rebuttals, setRebuttals] = useState<Rebuttal[]>(
    configuration.rebuttals || []
  );

  console.log("SErver id : ", serverId);

  const { data: servers } = useGetServer();

  const handleScriptChange = (value: string) => {
    setScript(value);
    onChange({ script: value });
  };

  const handleServerChange = (value: number) => {
    setServerId(value);
    onChange({ script, server_id: value });
  };

  const handleRebuttalsChange = (newRebuttals: Rebuttal[]) => {
    setRebuttals(newRebuttals);
    onChange({ script, rebuttals: newRebuttals });
  };

  const addRebuttal = () => {
    const newRebuttals = [...rebuttals, { question: "", answer: "" }];
    handleRebuttalsChange(newRebuttals);
  };

  const removeRebuttal = (index: number) => {
    const newRebuttals = rebuttals.filter((_, i) => i !== index);
    handleRebuttalsChange(newRebuttals);
  };

  const updateRebuttal = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const newRebuttals = rebuttals.map((rebuttal, i) =>
      i === index ? { ...rebuttal, [field]: value } : rebuttal
    );
    handleRebuttalsChange(newRebuttals);
  };

  const botFeatures = [
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Advanced natural language processing",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Round-the-clock operation capability",
    },
    {
      icon: Users,
      title: "Multi-Language",
      description: "Support for multiple languages",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Bot Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {botFeatures.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card
              key={index}
              className="border-1 border-border hover:shadow-md hover:shadow-primary/10  transition-all duration-300 ease-in-out hover:bg-muted/50 bg-sidebar"
            >
              <CardContent className="p-4 text-center">
                <div className="bot-studio-gradient p-2 rounded-lg w-fit mx-auto mb-2">
                  <IconComponent className="h-5 w-5 " />
                </div>
                <h3 className="font-semibold text-sm">{feature.title}</h3>
                <p className="text-xs  mt-1">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bot server configuratio */}

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-purple-600" />
            <span>
              Select a server where you&apos;d like to deploy your bot
            </span>
          </CardTitle>
          <CardDescription>
            Choose the server where your bot will be deployed. Each server may
            have different pricing, capacity, or regional targeting.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Custom Script Input */}
          <div>
            <Label htmlFor="variable-select" className="text-sm font-medium">
              Insert Variable
            </Label>
            <Select
              onValueChange={(value) => handleServerChange(Number(value))}
            >
              <SelectTrigger id="variable-select" className="w-full mt-2">
                <SelectValue placeholder="Select a variable" />
              </SelectTrigger>
              <SelectContent>
                {servers?.map((item) => (
                  <SelectItem key={item.id} value={item.id.toString()}>
                    {item.vicidial_url}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs  mt-5">
              Tip: Use variables in square brackets like [Customer Name] for
              dynamic content
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Script Configuration */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-purple-600" />
            <span>Bot Script Configuration</span>
          </CardTitle>
          <CardDescription>
            Define what your bot will say to customers. Use templates or write
            your own script.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Custom Script Input */}
          <div>
            <Label htmlFor="script" className="text-sm font-medium ">
              Custom Script
            </Label>
            <Textarea
              id="script"
              placeholder="Enter your custom bot script here... Use variables like [Customer Name], [Company Name], [Agent Name] for personalization."
              value={script}
              onChange={(e) => handleScriptChange(e.target.value)}
              className="mt-2 min-h-32 resize-none"
            />
            <p className="text-xs  mt-2">
              Tip: Use variables in square brackets like [Customer Name] for
              dynamic content
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-purple-600" />
            <span>Rebuttals & Objection Handling</span>
          </CardTitle>
          <CardDescription>
            Define common objections and how your bot should respond to them.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Existing Rebuttals */}
          {rebuttals.length > 0 && (
            <div className="space-y-4">
              {rebuttals.map((rebuttal, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        Rebuttal #{index + 1}
                      </Badge>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeRebuttal(index)}
                        className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm font-medium mb-2">
                          Customer Objection/Question
                        </Label>
                        <Input
                          placeholder="e.g., 'I'm not interested' or 'How much does it cost?'"
                          value={rebuttal.question}
                          onChange={(e) =>
                            updateRebuttal(index, "question", e.target.value)
                          }
                          className="mt-1 text-sm "
                        />
                      </div>

                      <div>
                        <Label className="text-sm font-medium mb-2">
                          Bot Response
                        </Label>
                        <Textarea
                          placeholder="How should the bot respond to this objection?"
                          value={rebuttal.answer}
                          onChange={(e) =>
                            updateRebuttal(index, "answer", e.target.value)
                          }
                          className="mt-1 min-h-20 resize-none text-sm"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Add New Rebuttal Button */}
          <Button
            type="button"
            variant="outline"
            onClick={addRebuttal}
            className="w-full border-dashed "
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Rebuttal
          </Button>

          {/* Rebuttals Tips */}
          <div className="bg-accent rounded-lg p-4">
            <h4 className="text-sm font-semibold mb-3 ">💡 Rebuttal Tips:</h4>
            <ul className="text-xs  space-y-2">
              <li>• Keep responses concise and friendly</li>
              <li>• Address the specific concern raised</li>
              <li>• Always redirect back to the value proposition</li>
              <li>• Use empathy and understanding in responses</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
