"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Loader2 } from "lucide-react";

import { ContactMeSchema } from "@/lib/validation";

import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { sendRequestFormAction } from "@/actions/mail";

const ContactForm = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ContactMeSchema>>({
    resolver: zodResolver(ContactMeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactMeSchema>) => {
    startTransition(async () => {
      const { errorMessage } = await sendRequestFormAction(values);
      if (!errorMessage) {
        toast({
          title: "Sikeres küldés!",
          description: "Az ajánlat kérés sikeresen továbbítva lett!",
        });
        form.reset();
      }
    });
  };

  return (
    <div className="w-full mx-auto h-full space-y-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 pb-5 md:space-y-8"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              name="lastName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel className="text-xs font-semibold uppercase">
                    Vezetéknév
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/60"
                      disabled={isPending}
                      {...field}
                      autoComplete="off"
                      value={field.value || ""}
                      autoFocus={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel className="text-xs font-semibold uppercase">
                    Keresztnév
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/60"
                      disabled={isPending}
                      {...field}
                      autoComplete="off"
                      value={field.value || ""}
                      autoFocus={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel className="text-xs font-semibold uppercase">
                    Email cím
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/60"
                      disabled={isPending}
                      {...field}
                      autoComplete="off"
                      value={field.value || ""}
                      autoFocus={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel className="text-xs font-semibold uppercase">
                    Telefonszám
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/60"
                      disabled={isPending}
                      {...field}
                      autoComplete="off"
                      value={field.value || ""}
                      autoFocus={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-xs font-semibold uppercase">
                    Üzenet
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-40 bg-white/60"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center md:justify-end items-center pb-1 pt-4 md:pt-8">
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="uppercase w-full md:w-2/12"
            >
              {isPending ? (
                <Loader2 className="h-5 w-5 animate-spin transition" />
              ) : (
                <>Üzenet küldése</>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
