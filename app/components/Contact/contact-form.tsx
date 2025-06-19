"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Loader2Icon } from "lucide-react"
import { send } from "@/lib/send"

 export const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(3)
})


export function ContactForm() {


    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    },
  })
 
// Handle form submission with async Server Action
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await send(values)
      toast.success("Message sent successfully!")
      form.reset() // Reset form after successful submission
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
      console.error("Form submission error:", error)
    }
  }


  return (
       <>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Complete Name" {...field} />
              </FormControl>
         
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your E-mail" {...field} />
              </FormControl>
        
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                id="message"
                placeholder="How can I help you with ?"
                className="min-h-[120px]"
                { ...field}
                />
              </FormControl>
        
              <FormMessage />
            </FormItem>
          )}
        />
       <Button type="submit" disabled={form.formState.isSubmitting} className="w-full cursor-pointer">
          {form.formState.isSubmitting ? (
            <>
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
       </>
   
   
  )
}
