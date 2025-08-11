"use client";
import { ModeToggle } from "@/components/theme-switch";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/src/app/dashboard/components/layout/header";
import { Main } from "@/src/app/dashboard/components/layout/main";
import { ProfileDropdown } from "@/src/app/dashboard/components/layout/profile-dropdown";
import { useGetPhones } from "@/src/app/dashboard/hooks/phone-hooks";
import { ICreatePhonePayload } from "@/src/models/phone-model";
import { Activity, Phone, Wifi, WifiOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BotManagementSkeletonLoader } from "../../../../bot-management/components/bot-management-loader";
import { BotStatsCard } from "../../../../bot-management/components/bot-management-stats-card";
import { BotManagementAvailableCard } from "../../../../bot-management/components/bot-management-available-card";
import { BotManagementDisabledCard } from "../../../../bot-management/components/bot-management-disabled-card";
import { BotManagementPagination } from "../../../../bot-management/components/bot-management-pagination";
import { useParams } from "next/navigation";

interface PhoneFilters extends ICreatePhonePayload {
  current_page: number;
  last_page?: number;
  server_id?: number;
  total?: number;
  per_page?: number;
  status?: string;
  search?: string;
}

const ServerPhones: React.FC = () => {
  const { slug, id } = useParams();
  const [currentTime] = useState<Date>(new Date());
  const [filters, setFilters] = useState<PhoneFilters>({
    current_page: 1,
    per_page: 10,
    server_id: Number(id),
  });

  const { mutate: getPhones, data, isPending } = useGetPhones();

  useEffect(() => {
    getPhones(filters);
  }, [
    getPhones,
    filters.current_page,
    filters.status,
    filters.search,
    filters,
  ]);

  const phones = data?.data ?? [];
  const pagination = data?.pagination ?? {
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
  };

  const availablePhones = phones.filter(
    (phone) => phone.status === "available"
  );
  const disabledPhones = phones.filter((phone) => phone.status === "disabled");

  return (
    <>
      <Header>
        <div className="ml-auto flex items-center gap-4">
          <ModeToggle />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary rounded-xl">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {`${slug} Bots`}
              </h1>
              <p className="text-muted-foreground">
                Manage your server&apos;s bots and phone extensions
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono font-bold text-foreground">
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="text-sm text-muted-foreground">
              {currentTime.toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="mb-8">
          {/* Filter Controls */}
          <div className="mb-6 flex gap-4">
            <Input
              placeholder="Search by phone name or extension..."
              value={filters.search || ""}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  search: e.target.value,
                  current_page: 1, // Reset to first page on search
                }))
              }
              className="max-w-sm"
            />
            <Select
              value={filters.status || "all"} // Default to "all" when filters.status is undefined
              onValueChange={(value) =>
                setFilters((prev) => ({
                  ...prev,
                  status: value === "all" ? undefined : value, // Convert "all" to undefined
                  current_page: 1, // Reset to first page on filter change
                }))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>{" "}
                {/* Use "all" instead of empty string */}
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="busy">Busy</SelectItem>
                <SelectItem value="ringing">Ringing</SelectItem>
                <SelectItem value="in_call">In Call</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {isPending ? (
          <BotManagementSkeletonLoader />
        ) : (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <BotStatsCard
                icon={
                  <Wifi className="w-4 h-4 text-green-600 dark:text-green-400" />
                }
                value={availablePhones.length}
                label="Available Phones"
                bgColor="bg-green-100 dark:bg-green-900/20"
                change={`${Math.round(
                  (availablePhones.length / phones.length) * 100
                )}% of total`}
              />
              <BotStatsCard
                icon={
                  <WifiOff className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                }
                value={disabledPhones.length}
                label="Disabled Phones"
                bgColor="bg-gray-100 dark:bg-gray-900/20"
                change={`${Math.round(
                  (disabledPhones.length / phones.length) * 100
                )}% of total`}
              />
              <BotStatsCard
                icon={
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                }
                value={phones.length}
                label="Total Extensions"
                bgColor="bg-blue-100 dark:bg-blue-900/20"
                change={`Per page: ${pagination.per_page}`}
              />
              <BotStatsCard
                icon={
                  <Activity className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                }
                value={`${Math.round(
                  (availablePhones.length / phones.length) * 100
                )}%`}
                label="Availability Rate"
                bgColor="bg-purple-100 dark:bg-purple-900/20"
                change="Real-time status"
              />
            </div>
            {/* Available Phones Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h2 className="text-xl font-semibold text-foreground">
                  Available Extensions ({availablePhones.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availablePhones.map((phone) => (
                  <BotManagementAvailableCard
                    phone={phone}
                    key={phone.server_id}
                  />
                ))}
              </div>
            </div>

            {/* Disabled Phones Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <h2 className="text-xl font-semibold text-foreground">
                  Disabled Extensions ({disabledPhones.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {disabledPhones.map((phone) => (
                  <BotManagementDisabledCard
                    phone={phone}
                    key={phone.server_id}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        <BotManagementPagination
          currentPage={pagination.current_page}
          lastPage={pagination.last_page}
          total={pagination.total}
          perPage={pagination.per_page}
          onPageChange={(page: number) =>
            setFilters((prev) => ({
              ...prev,
              current_page: page,
            }))
          }
        />
      </Main>
    </>
  );
};

export default ServerPhones;
