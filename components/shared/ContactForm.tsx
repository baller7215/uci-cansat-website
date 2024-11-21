"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


// Define the form validation schema using Zod
const formSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Please enter a valid email address."),
    organization: z.string().optional(),
    website: z.string().optional(),
    subject: z.string().nonempty("Subject is required"),
    message: z.string().nonempty("Message cannot be empty"),
})

// Explicitly define the form's data shape
type FormData = z.infer<typeof formSchema>

const ContactForm = () => {
    // Initialize the form using useForm from react-hook-form with zodResolver
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    // Handle form submission and call the backend API to send email
    const onSubmit = async (data: FormData) => {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            alert("Message sent successfully!")
        } else {
            alert("Failed to send message. Please try again.")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                {/* row 1 */}
                <div className="flex flex-col md:flex-row gap-5 ">
                    {/* Name Field */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input className="text-lg font-medium p-5 rounded-full border-custom-white/20" placeholder="Your name*" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Email Field */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input className="text-lg font-medium p-5 rounded-full border-custom-white/20" placeholder="Your email*" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                </div>

                {/* row 2 */}
                <div className="flex flex-col md:flex-row gap-5">
                    {/* Organization Field */}
                    <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input className="text-lg font-medium p-5 rounded-full border-custom-white/20" placeholder="Organization Name (Optional)" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {/* Website Field */}
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input className="text-lg font-medium p-5 rounded-full border-custom-white/20" placeholder="Website (Optional)" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                {/* Subject Field */}
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input className="text-lg font-medium p-5 rounded-full border-custom-white/20" placeholder="Subject*" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />    
                
                
                {/* Message Field */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea className="text-lg font-medium p-5 rounded-lg h-[200px] border-custom-white/20" placeholder="Your message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Submit Button */}
                <Button type="submit" className="text-white bg-custom-orange hover:bg-opacity-80 rounded-full shadow-md flex mx-auto">
                    Send a Message
                </Button>
            </form>
        </Form>
    )
}

export default ContactForm;
