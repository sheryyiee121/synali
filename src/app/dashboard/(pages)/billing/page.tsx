"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Header } from "../../components/layout/header";
import { TopNav } from "../../components/layout/top-nav";
import { topNav } from "../../components/layout/data/topnav-data";
import { Main } from "../../components/layout/main";

// Balance Overview Component
const BalanceOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Balance: $0.00
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-600">
          <p>Campaign Budget: $500 / month</p>
          <p>Current Campaign Spend: $0.00 / month</p>
        </div>
      </CardContent>
    </Card>
  );
};

// Add Credit Component
const AddCredit = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [25, 50, 100];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Add Credit to Your Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-6">
          {presetAmounts.map((amount) => (
            <Button
              key={amount}
              variant={selectedAmount === amount ? "default" : "outline"}
              onClick={() => setSelectedAmount(amount)}
              className="px-6 py-2 w-20 h-10"
            >
              ${amount}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-lg font-medium">$</span>
          <Input
            type="number"
            placeholder="25"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            className="w-40 h-10"
          />
        </div>

        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
          Pay with Card
        </Button>
      </CardContent>
    </Card>
  );
};

// Auto-Pay Configuration Component
const AutoPayConfiguration = () => {
  const [autoPayEnabled, setAutoPayEnabled] = useState(false);
  const [threshold, setThreshold] = useState("10");
  const [reloadAmount, setReloadAmount] = useState("25");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-semibold">
          Configure Auto-Pay
        </CardTitle>
        <Switch checked={autoPayEnabled} onCheckedChange={setAutoPayEnabled} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-6">
          Configure automatic billing for your influencer campaigns. When
          your balance nears your Auto-Pay threshold, we will automatically
          reload your account by billing your default saved card.
        </p>

        {autoPayEnabled && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Auto-Pay Threshold</label>
              <div className="flex items-center gap-2">
                <span className="text-sm">$</span>
                <Input
                  type="number"
                  value={threshold}
                  onChange={(e) => setThreshold(e.target.value)}
                  className="w-40"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Reload Amount</label>
              <div className="flex items-center gap-2">
                <span className="text-sm">$</span>
                <Input
                  type="number"
                  value={reloadAmount}
                  onChange={(e) => setReloadAmount(e.target.value)}
                  className="w-40"
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Payment Methods Component
const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      last4: "4242",
      brand: "Visa",
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true,
    },
    {
      id: 2,
      last4: "0005",
      brand: "Mastercard",
      expiryMonth: 8,
      expiryYear: 2026,
      isDefault: false,
    },
  ]);

  const handleDeletePayment = (id: number) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className="text-2xl font-semibold">
            My Payment Methods
          </CardTitle>
          <p className="text-sm text-gray-600 mt-1">
            Payment methods associated with your Synli AI account.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">
                      {method.brand} ending in {method.last4}
                    </span>
                    {method.isDefault && (
                      <Badge variant="secondary" className="text-xs">
                        Default
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">
                    Expires {method.expiryMonth}/{method.expiryYear}
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeletePayment(method.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Billing History Component
const BillingHistory = () => {
  const transactions = [
    {
      id: 1,
      date: "2024-01-15",
      description: "Influencer Campaign - Fashion Brand",
      amount: -150.75,
      type: "usage",
    },
    {
      id: 2,
      date: "2024-01-10",
      description: "Credit Added",
      amount: 500.0,
      type: "credit",
    },
    {
      id: 3,
      date: "2024-01-05",
      description: "Auto-Pay Reload",
      amount: 250.0,
      type: "credit",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Billing History
        </CardTitle>
        <p className="text-sm text-gray-600">
          Recent transactions and usage history.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
            >
              <div>
                <p className="font-medium">
                  {transaction.description}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p
                  className={`font-medium ${transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {transaction.amount > 0 ? "+" : ""}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </p>
                <Badge
                  variant={
                    transaction.type === "credit" ? "default" : "secondary"
                  }
                  className="text-xs"
                >
                  {transaction.type}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Main Billing Page Component
export default function BillingPage() {
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
        </div>
      </Header>

      <Main>
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Billing
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your campaign budget, payment methods, and billing settings.
          </p>
        </div>

        <Separator className="mb-8" />

        <div className="space-y-8">
          <BalanceOverview />
          <AddCredit />
          <AutoPayConfiguration />
          <PaymentMethods />
          <BillingHistory />
        </div>
      </Main>
    </>
  );
}
