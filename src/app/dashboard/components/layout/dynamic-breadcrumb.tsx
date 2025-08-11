import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

interface IBreadcrumbItem {
  id: string;
  label: string;
  href: string;
}

interface IDynamicBreadcrumb {
  items: IBreadcrumbItem[];
  maxItems: number;
}

const DynamicBreadcrumb: React.FC<IDynamicBreadcrumb> = ({
  items,
  maxItems = 4,
}) => {
  if (!items || items.length === 0) {
    return <Breadcrumb />;
  }

  const visibleItems = items.slice(0, maxItems - 1);
  const dropdownItems = items.slice(maxItems - 2, -1);
  const lastItem = items[items.length - 1];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {visibleItems.map((item, index) => (
          <div key={item.id || index} className="flex items-center gap-4">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={item.href}>{item.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </div>
        ))}

        {dropdownItems.length > 0 && (
          <>
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="size-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {dropdownItems.map((item) => (
                    <DropdownMenuItem key={item.id || item.label} asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}

        <BreadcrumbItem>
          <BreadcrumbPage>{lastItem.label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
