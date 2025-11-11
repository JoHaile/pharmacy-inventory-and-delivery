"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import signinAction from "@/app/(auth)/_actions/signinAction";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const initialState = {
    phone: "",
    errorMessage: "",
  };

  const [state, formAction, isPending] = useActionState(
    signinAction,
    initialState
  );

  useEffect(() => {
    state?.errorMessage && toast.error(state.errorMessage);
    state?.successMessage && toast.success(state.successMessage);
  }, [state]);

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      action={formAction}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input
            id="phone"
            type="text"
            placeholder="+1234567890"
            // defaultValue={state?.phone || ""}
            required
            name="phone"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          {/* <div className="flex items-center"> */}
          {/* <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div> */}
          <Input
            id="password"
            // type="text"
            placeholder="password"
            required
            name="password"
          />
        </Field>
        <Field>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Logging..." : "Login"}
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
