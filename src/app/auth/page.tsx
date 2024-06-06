'use client'
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";
import Cookies from 'js-cookie';

const schema = z.object({
  email: z.string().email({ message: "Invalid email address." }).nonempty({ message: "Email is required." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." })
});

export const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });
  const router = useRouter();

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "");

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      const { data: signInData, error } = await supabase.auth.signInWithPassword(data);
      if (error) {
        toast(error.message);
        setLoading(false);
        return;
      };

      const expiresAt = new Date(new Date().getTime() + signInData.session.expires_in * 1000);
      
      Cookies.set('auth_token', signInData.session.access_token, { expires: expiresAt, secure: true, sameSite: 'strict' });
      Cookies.set('refresh_token', signInData.session.refresh_token, { expires: 30, secure: true, sameSite: 'strict' });

      toast("Welcome.");
      router.push('/dashboard');
    } catch (error) {
      toast("Failed to sign in.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="mx-auto max-w-sm w-full p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} placeholder="m@example.com" type="email" />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" {...register("password")} type="password" />
              {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </Button>
            <Button type="button" variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don't have an account?
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
