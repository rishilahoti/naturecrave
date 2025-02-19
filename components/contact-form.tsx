/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useActionState, useEffect } from 'react';
import { SubmitButton } from './submit-buttton';
import { toast } from '@/components/ui/use-toast';
import { sendEmail } from '../app/actions/send-email';

export function ContactForm() {
	async function handleSubmit(formData: FormData) {
		const result = await sendEmail(formData);

		if (result.success) {
			toast({
				title: 'Success',
				description: result.success,
			});
		} else {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: result.error,
			});
		}
	}

	return (
		<form action={handleSubmit} className="space-y-12">
			<div className="space-y-4">
				<label htmlFor="email" className="block text-xl text-gray-400">
					Email address
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email"
					required
					className="w-full bg-[#111] rounded-xl p-4 text-xl border-0 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-600"
				/>
			</div>

			<div className="space-y-4">
				<label
					htmlFor="message"
					className="block text-xl text-gray-400"
				>
					How can we help?
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="Enter your message"
					required
					rows={6}
					className="w-full bg-[#111] rounded-xl p-4 text-xl border-0 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-600 resize-none"
				/>
			</div>

			<div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
				<SubmitButton />
			</div>
		</form>
	);
}
