"use client";

import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Eye,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import Image from "next/image";
import { format } from "date-fns";
import { useGetOrders } from "../../../hooks/purchase-bot-hooks";
import { Main } from "../../../components/layout/main";
import { Header } from "../../../components/layout/header";
import { ModeToggle } from "@/components/theme-switch";
import { ProfileDropdown } from "../../../components/layout/profile-dropdown";
import { TopNav } from "../../../components/layout/top-nav";
import { topNav } from "../../../components/layout/data/topnav-data";

interface Order {
  id: number;
  number_of_bots: number;
  price: number;
  total_price: number;
  status: string;
  reciept_url: string | null;
  created_at: string;
  updated_at: string;
  user_id: number;
}

export default function OrdersTable() {
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data: orders_data, isLoading: loading } = useGetOrders(rowsPerPage);

  const filteredOrders = useMemo(() => {
    if (!orders_data?.data) return [];

    return orders_data.data.filter((order: Order) => {
      const matchesId = order.id.toString().includes(filter);
      const matchesStatus = statusFilter ? order.status === statusFilter : true;
      return matchesId && matchesStatus;
    });
  }, [orders_data, filter, statusFilter]);

  // Pagination logic using API data
  const totalRows = orders_data?.pagination.total || 0;
  const totalPages = orders_data?.pagination.last_page || 1;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  // Handle viewing an order
  const handleViewOrder = (order: Order) => {
    console.log("Viewing order:", order);
    toast.success("View order", {
      description: `Viewing details for Order ID ${order.id}.`,
    });
  };

  // Unique status values for filter
  const uniqueStatuses =
    Array.from(
      new Set(orders_data?.data.map((order: Order) => order.status))
    ) || [];

  return (
    <div>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Orders</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all your orders!
            </p>
          </div>
        </div>
        <div className="space-y-4 w-full">
          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <Input
              placeholder="Filter by Order ID..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="max-w-full sm:max-w-sm bg-background border-border m-2"
            />
            <Select
              onValueChange={(value) =>
                setStatusFilter(value === "All" ? null : value)
              }
            >
              <SelectTrigger className="w-[180px] bg-background border-border">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {uniqueStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-border w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold text-foreground">
                    Order ID
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Number of Bots
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Price per Bot
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Total Price
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Status
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Receipt
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Order Date
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : paginatedOrders.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      className="text-center text-muted-foreground"
                    >
                      No orders found
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedOrders.map((order: Order) => (
                    <TableRow
                      key={order.id}
                      className="hover:bg-muted/50 transition-colors border-b border-border"
                    >
                      <TableCell className="text-foreground">
                        {order.id}
                      </TableCell>
                      <TableCell className="text-foreground">
                        {order.number_of_bots}
                      </TableCell>
                      <TableCell className="text-foreground">
                        ${order.price}
                      </TableCell>
                      <TableCell className="text-foreground">
                        ${order.total_price}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center max-w-28 overflow-hidden px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === "pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mr-1 ${
                              order.status === "pending"
                                ? "bg-yellow-400"
                                : "bg-green-400"
                            }`}
                          />
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        {order.reciept_url ? (
                          <Image
                            src={order.reciept_url}
                            alt="Receipt"
                            width={50}
                            height={50}
                            className="rounded-md object-cover"
                          />
                        ) : (
                          <span className="text-muted-foreground">
                            No receipt
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-foreground">
                        {format(new Date(order.created_at), "PPP")}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => handleViewOrder(order)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 text-sm text-muted-foreground">
            <div>{totalRows} row(s) total.</div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <span>Rows per page</span>
                <Select
                  value={rowsPerPage.toString()}
                  onValueChange={(value) => {
                    setRowsPerPage(Number(value));
                    setCurrentPage(1); // Reset to first page
                  }}
                >
                  <SelectTrigger className="w-[70px] bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex space-x-1">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="border-border"
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="border-border"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="border-border"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="border-border"
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}
