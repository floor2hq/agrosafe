import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon, TractorIcon, Wheat } from "lucide-react";
import Link from "next/link";

export default function FarmerHeader() {
  return (
    <header className="sticky flex items-center justify-between px-6 py-4 bg-white shadow dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <svg
          className="h-8 w-8 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          AgroTech
        </h1>
      </div>
      <nav className="flex-1 flex gap-3 justify-center space-x-4">
        <Link
          className="flex items-center px-4 py-4 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:rounded-lg dark:text-gray-200"
          href="/farmer/dashboard"
        >
          <LayoutDashboardIcon className="h-5 w-5 text-primary" />
          <span className="mx-4">Dashboard</span>
        </Link>
        <Link
          className="flex items-center px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:rounded-lg"
          href="/farmer/farms"
        >
          <TractorIcon className="h-5 w-5 text-primary" />
          <span className="mx-4">Farms</span>
        </Link>
        <Link
          className="flex items-center px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:rounded-lg"
          href="/farmer/surplus"
        >
          <Wheat className="h-5 w-5 text-primary" />
          <span className="mx-4">Surplus</span>
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Button className="hidden md:flex bg-red-600" variant="destructive">
          Log Out
        </Button>
      </div>
    </header>
  );
}
