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
import { Clock, Users, Zap, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export interface Rebuttal {
  question: string;
  answer: string;
}

interface BotConfiguration {
  quantity?: number;
  totalPrice: number;
  reciept_image: File | null;
}

interface BotConfigurationFormProps {
  configuration: BotConfiguration;
  onChange: (config: BotConfiguration) => void;
}

export const BotAddWidget: React.FC<BotConfigurationFormProps> = ({
  configuration,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(configuration.quantity || 1);
  const [reciept_image, setImage] = useState<File | null>(
    configuration.reciept_image || null
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
    onChange({
      quantity: value,
      totalPrice: 0,
      reciept_image,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024) {
        setImage(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        onChange({
          quantity,
          totalPrice: 0,
          reciept_image: file,
        });
      } else {
        alert("Please upload a valid image file (max 5MB)");
      }
    }
  };

  const handleRemoveImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setImage(null);
    setPreviewUrl(null);
    onChange({
      quantity,
      totalPrice: 0,
      reciept_image: null,
    });
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
              className="border-1 border-border hover:shadow-md hover:shadow-primary/10 transition-all duration-300 ease-in-out hover:bg-muted/50 bg-sidebar"
            >
              <CardContent className="p-4 text-center">
                <div className="bot-studio-gradient p-2 rounded-lg w-fit mx-auto mb-2">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sm">{feature.title}</h3>
                <p className="text-xs mt-1">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quantity Selection */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-purple-600" />
            <span>Number of Bots</span>
          </CardTitle>
          <CardDescription>
            How many calling bots do you need? Each bot can handle multiple
            concurrent calls.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Label htmlFor="quantity" className="text-sm font-medium min-w-0">
                Quantity:
              </Label>
              <div className="flex items-center space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleQuantityChange(Math.max(1, quantity - 1))
                  }
                  className="h-8 w-8 p-0"
                >
                  -
                </Button>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(parseInt(e.target.value) || 1)
                  }
                  className="w-20 text-center"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  +
                </Button>
              </div>
              <span className="text-sm">
                × $40 each ={" "}
                <span className="font-semibold text-purple-600">
                  ${quantity * 40}
                </span>
              </span>
            </div>

            {/* Quantity Benefits */}
            <div className="bg-accent rounded-lg p-4">
              <h4 className="text-sm font-semibold mb-2">
                What you get per bot:
              </h4>
              <ul className="text-xs space-y-1">
                <li>• Up to 50 concurrent calls</li>
                <li>• Custom script and audio files</li>
                <li>• Real-time analytics dashboard</li>
                <li>• 24/7 support and monitoring</li>
              </ul>
            </div>

            {/* Image Upload */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Label
                  htmlFor="bot-image"
                  className="text-sm font-medium min-w-0"
                >
                  Upload reciept image:
                </Label>
                <Input
                  id="reciept-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full max-w-xs"
                />
                {reciept_image && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={handleRemoveImage}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              {previewUrl && (
                <div className="mt-4">
                  <Image
                    src={previewUrl}
                    width={600}
                    height={600}
                    alt="Bot preview"
                    className="max-w-xs rounded-lg border border-border"
                  />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
