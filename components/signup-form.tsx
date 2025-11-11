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
import { useActionState, useEffect } from "react";
import signupAction from "@/app/(auth)/_actions/signupAction";
import { toast } from "sonner";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const initialState = {
    name: "",
    password: "",
    errorMessage: "",
    phoneNumber: NaN,
  };
  const [state, formAction, isPending] = useActionState(
    signupAction,
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
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="+1234567890"
            required
          />
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your phone
            number with anyone else.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" name="password" required />
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Account"}
          </Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <FieldDescription className="px-6 text-center">
            Already have an account? <a href="#">Sign in</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
