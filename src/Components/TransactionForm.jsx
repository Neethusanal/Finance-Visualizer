'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function TransactionForm() {
  const [form, setForm] = useState({
    amount: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ title: ' ',amount: '', date: '', description: '' });
      alert('Transaction added!');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="amount">Title</Label>
            <Input
              id="title"
              name="title"
              type="string"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="text"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Add Transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
