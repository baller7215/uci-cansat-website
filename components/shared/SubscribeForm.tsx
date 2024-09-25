"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    // FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Define the form validation schema using Zod
const formSchema = z.object({
    email: z.string().email("Please enter a valid email address."),
})

// Explicitly define the form's data shape
type FormData = z.infer<typeof formSchema>

const SubscribeForm = () => {
    // Initialize the form using useForm from react-hook-form with zodResolver
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    // Simulate form submission logic
    const onSubmit = (data: FormData) => {
        console.log("Submitted data:", data)
        alert("You have successfully signed up for the newsletter!")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormDescription className="text-custom-rhino text-center text-md md:text-xl">
                                Enter your email to keep up with our team and receive updates on the competition, promotions, application openings, and more!
                            </FormDescription>
                            {/* <FormLabel className="text-custom-gray">Email</FormLabel> */}
                            <FormControl className="rounded-full shadow-md text-custom-rhino">
                                <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="text-white bg-custom-orange hover:bg-opacity-80 rounded-full shadow-md flex mx-auto">
                    Sign Up
                </Button>
            </form>
        </Form>
    )
}

export default SubscribeForm
