"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full h-screen bg-green-50 flex items-center justify-center">
      <div>
        <Image
          priority
          alt="Agrotech background"
          className="object-contain rounded-l-xl"
          src="/agrotech.jpeg"
          height={600}
          width={600}
        />
      </div>
      <div className="w-[600px] h-[600px] px-8 bg-white rounded-r-xl shadow-md flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white mt-24 mb-10">
          AgroTech SignUp
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-1 flex flex-col gap-4 min-w-64"
          >
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Create Password</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Individual Type</FormLabel>
                    <FormControl>
                      <Select onValueChange={(value) => field.onChange(value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select" {...field} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="farmer">Farmer</SelectItem>
                            <SelectItem value="cold_storage_owner">Cold Storage Owner</SelectItem>
                            <SelectItem value="distributor">
                              Distributor
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="hover:bg-[#4a7b84] bg-[#62a3ae]">
              Submit
            </Button>
          </form>
        </Form>
        <p className="mb-auto mt-4 text-center">
          ALready have an account?{" "}
          <Link className="text-[#62a3ae] hover:text-green-600" href="/">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
}
