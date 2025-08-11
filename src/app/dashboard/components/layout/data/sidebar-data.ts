import {
  IconLayoutDashboard,
  IconMenuOrder,
  IconMessages,
  IconNotification,
  IconPalette,
  IconSettings,
  IconUser,
  IconUserCog,
} from "@tabler/icons-react";
import {
  AudioWaveform,
  BotIcon,
  Command,
  GalleryVerticalEnd,
  Receipt,
  RotateCcwIcon,
  Server,
} from "lucide-react";
import { type SidebarData } from "../types";

export const sidebarData: SidebarData = {
  user: {
    name: "Sarmad Khalid",
    email: "sarmadkhalid36@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Shadcn Admin",
      logo: Command,
      plan: "Vite + ShadcnUI",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: IconLayoutDashboard,
        },
        {
          title: "Billing",
          url: "/dashboard/billing",
          icon: Receipt,
        },
        {
          title: "Trainings",
          url: "/dashboard/trainings",
          icon: RotateCcwIcon,
        },
        {
          title: "Bot Management",
          url: "/dashboard/bot-management",
          icon: Server,
        },
        {
          title: "Servers",
          url: "/dashboard/servers",
          icon: Server,
        },
        {
          title: "Bots",
          url: "/dashboard/buy-bots",
          icon: BotIcon,
        },
        {
          title: "Notifications",
          url: "/dashboard/notifications",
          icon: IconNotification,
        },
        // {
        //   title: "Chats",
        //   url: "/chats",
        //   badge: "3",
        //   icon: IconMessages,
        // },
        // {
        //   title: "Users",
        //   url: "/users",
        //   icon: IconUsers,
        // },
      ],
    },
    // {
    //   title: "Pages",
    //   items: [
    //     {
    //       title: "Auth",
    //       icon: IconLockAccess,
    //       items: [
    //         {
    //           title: "Sign In",
    //           url: "/sign-in",
    //         },
    //         {
    //           title: "Sign In (2 Col)",
    //           url: "/sign-in-2",
    //         },
    //         {
    //           title: "Sign Up",
    //           url: "/sign-up",
    //         },
    //         {
    //           title: "Forgot Password",
    //           url: "/forgot-password",
    //         },
    //         {
    //           title: "OTP",
    //           url: "/otp",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Errors",
    //       icon: IconBug,
    //       items: [
    //         {
    //           title: "Unauthorized",
    //           url: "/401",
    //           icon: IconLock,
    //         },
    //         {
    //           title: "Forbidden",
    //           url: "/403",
    //           icon: IconUserOff,
    //         },
    //         {
    //           title: "Not Found",
    //           url: "/404",
    //           icon: IconError404,
    //         },
    //         {
    //           title: "Internal Server Error",
    //           url: "/500",
    //           icon: IconServerOff,
    //         },
    //         {
    //           title: "Maintenance Error",
    //           url: "/503",
    //           icon: IconBarrierBlock,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: IconSettings,
          items: [
            {
              title: "Company Details",
              url: "/dashboard/settings/details",
              icon: IconUserCog,
            },
            {
              title: "Team",
              url: "/dashboard/settings/team",
              icon: IconPalette,
            },
            {
              title: "Integrations",
              url: "/dashboard/settings/integrations",
              icon: IconNotification,
            },
            {
              title: "Orders",
              url: "/dashboard/settings/orders",
              icon: IconMenuOrder,
            },
            // {
            //   title: "Display",
            //   url: "/settings/display",
            //   icon: IconBrowserCheck,
            // },
          ],
        },
        // {
        //   title: "Help Center",
        //   url: "/help-center",
        //   icon: IconHelp,
        // },
      ],
    },
  ],
};

export const candidateSidebarData: SidebarData = {
  user: {
    name: "Sarmad Khalid",
    email: "sarmadkhalid36@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Shadcn Admin",
      logo: Command,
      plan: "Vite + ShadcnUI",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/candidate",
          icon: IconLayoutDashboard,
        },
        {
          title: "Messages",
          url: "/candidate/messages",
          icon: IconMessages,
        },
        {
          title: "Profile",
          url: "/candidate/profile",
          icon: IconUser,
        },
        {
          title: "Settings",
          url: "/candidate/settings",
          icon: IconSettings,
        },
      ],
    },
  ],
};
