"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  BellOff,
  Mail,
  MessageSquare,
  CreditCard,
  Bot,
  Check,
  Trash2,
  Settings,
} from "lucide-react";
import { toast } from "sonner";
import { Header } from "../../components/layout/header";
import { TopNav } from "../../components/layout/top-nav";
import { topNav } from "../../components/layout/data/topnav-data";
import { ModeToggle } from "@/components/theme-switch";
import { Main } from "../../components/layout/main";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "success" | "warning" | "error" | "info";
  timestamp: Date;
  read: boolean;
  category: "bot" | "billing" | "system" | "general";
}

interface NotificationPreference {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

const Notifications = () => {
  // Mock notification data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Bot Configuration Complete",
      message:
        "Your call center bot 'Customer Support Bot' has been successfully configured and is ready for deployment.",
      type: "success",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      read: false,
      category: "bot",
    },
    {
      id: "2",
      title: "Payment Processed",
      message:
        "Your payment of $299.99 for 100 bot instances has been successfully processed.",
      type: "success",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      read: true,
      category: "billing",
    },
    {
      id: "3",
      title: "Audio Upload Failed",
      message:
        "The audio file upload for 'greeting.mp3' failed. Please check the file format and try again.",
      type: "error",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      read: false,
      category: "bot",
    },
    {
      id: "4",
      title: "System Maintenance Scheduled",
      message:
        "Scheduled maintenance will occur on Sunday, 3:00 AM - 5:00 AM UTC. Bot services may be temporarily unavailable.",
      type: "warning",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      read: true,
      category: "system",
    },
  ]);

  const [preferences, setPreferences] = useState<NotificationPreference[]>([
    {
      id: "email_bot",
      title: "Bot Status Updates",
      description:
        "Receive email notifications when your bots are deployed, updated, or encounter issues",
      enabled: true,
      category: "Email Notifications",
      icon: Bot,
    },
    {
      id: "email_billing",
      title: "Billing & Payments",
      description:
        "Get notified about payment confirmations, billing issues, and subscription changes",
      enabled: true,
      category: "Email Notifications",
      icon: CreditCard,
    },
    {
      id: "email_system",
      title: "System Announcements",
      description:
        "Important updates about system maintenance, new features, and service changes",
      enabled: false,
      category: "Email Notifications",
      icon: Settings,
    },
    {
      id: "push_messages",
      title: "In-App Messages",
      description:
        "Show notifications within the application for real-time updates",
      enabled: true,
      category: "In-App Notifications",
      icon: MessageSquare,
    },
    {
      id: "push_alerts",
      title: "Critical Alerts",
      description:
        "Immediate notifications for critical issues that require your attention",
      enabled: true,
      category: "In-App Notifications",
      icon: Bell,
    },
  ]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "warning":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "error":
        return "bg-red-500/10 text-red-700 border-red-200";
      default:
        return "bg-blue-500/10 text-blue-700 border-blue-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "bot":
        return <Bot className="h-4 w-4" />;
      case "billing":
        return <CreditCard className="h-4 w-4" />;
      case "system":
        return <Settings className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
    toast.success("All notifications marked as read");
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    toast.success("Notification deleted");
  };

  const togglePreference = (id: string) => {
    setPreferences((prev) =>
      prev.map((pref) =>
        pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
      )
    );
    toast.success("Preference updated");
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Docs
          </Button>
          <Button variant="ghost" size="sm">
            Referrals
          </Button>
          <ModeToggle />
        </div>
      </Header>
      <Main></Main>
      <div className="min-h-screen bg-background p-6">
        <div className=" mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">
                Notifications
              </h1>
              <p className="text-muted-foreground">
                Manage your notifications and preferences
              </p>
            </div>

            {unreadCount > 0 && (
              <Badge variant="secondary" className="text-sm">
                {unreadCount} unread
              </Badge>
            )}
          </div>
          <Separator />
          <Tabs defaultValue="notifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="notifications"
                className="flex items-center gap-2"
              >
                <Bell className="h-4 w-4" />
                Notifications
                {unreadCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="ml-1 h-5 w-5 p-0 text-xs"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="preferences"
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Preferences
              </TabsTrigger>
            </TabsList>

            <TabsContent value="notifications" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Notifications</h2>
                {unreadCount > 0 && (
                  <Button onClick={markAllAsRead} variant="outline" size="sm">
                    <Check className="h-4 w-4 mr-2" />
                    Mark all as read
                  </Button>
                )}
              </div>

              <Card>
                <CardContent className="p-0">
                  <ScrollArea className="h-[600px]">
                    {notifications.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <BellOff className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">
                          No notifications
                        </h3>
                        <p className="text-muted-foreground">
                          You&apos;re all caught up! Check back later for
                          updates.
                        </p>
                      </div>
                    ) : (
                      <div className="divide-y">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 hover:bg-muted/50 transition-colors ${
                              !notification.read
                                ? "bg-accent border-l-4 border-l-primary"
                                : ""
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-3 flex-1">
                                <div className="mt-1">
                                  {getCategoryIcon(notification.category)}
                                </div>
                                <div className="flex-1 space-y-1">
                                  <div className="flex items-center gap-2">
                                    <h4
                                      className={`font-medium ${
                                        !notification.read
                                          ? "text-foreground"
                                          : "text-muted-foreground"
                                      }`}
                                    >
                                      {notification.title}
                                    </h4>
                                    <Badge
                                      variant="outline"
                                      className={getTypeColor(
                                        notification.type
                                      )}
                                    >
                                      {notification.type}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {notification.timestamp.toLocaleDateString()}{" "}
                                    at{" "}
                                    {notification.timestamp.toLocaleTimeString(
                                      [],
                                      {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      }
                                    )}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {!notification.read && (
                                  <Button
                                    onClick={() => markAsRead(notification.id)}
                                    variant="ghost"
                                    size="sm"
                                  >
                                    <Check className="h-4 w-4" />
                                  </Button>
                                )}
                                <Button
                                  onClick={() =>
                                    deleteNotification(notification.id)
                                  }
                                  variant="ghost"
                                  size="sm"
                                  className="text-muted-foreground hover:text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Notification Preferences
                </h2>
                <p className="text-muted-foreground">
                  Customize how and when you receive notifications
                </p>
              </div>

              <div className="space-y-6">
                {Object.entries(
                  preferences.reduce((acc, pref) => {
                    if (!acc[pref.category]) acc[pref.category] = [];
                    acc[pref.category].push(pref);
                    return acc;
                  }, {} as Record<string, typeof preferences>)
                ).map(([category, prefs]) => (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category === "Email Notifications" ? (
                          <Mail className="h-5 w-5" />
                        ) : (
                          <Bell className="h-5 w-5" />
                        )}
                        {category}
                      </CardTitle>
                      <CardDescription>
                        {category === "Email Notifications"
                          ? "Control which notifications are sent to your email"
                          : "Manage in-app notification settings"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {prefs.map((preference) => (
                        <div
                          key={preference.id}
                          className="flex items-start justify-between space-x-4"
                        >
                          <div className="flex items-start space-x-3">
                            <preference.icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                            <div className="space-y-0.5">
                              <Label
                                htmlFor={preference.id}
                                className="text-sm font-medium cursor-pointer"
                              >
                                {preference.title}
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                {preference.description}
                              </p>
                            </div>
                          </div>
                          <Switch
                            id={preference.id}
                            checked={preference.enabled}
                            onCheckedChange={() =>
                              togglePreference(preference.id)
                            }
                          />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Frequency</CardTitle>
                  <CardDescription>
                    Control how often you receive summary notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-sm font-medium">
                          Daily Summary
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive a daily digest of your bot activities
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-sm font-medium">
                          Weekly Report
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Get weekly performance reports for your bots
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Notifications;
