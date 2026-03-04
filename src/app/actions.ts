'use server';

export async function sendContactEmail(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields' };
  }

  // TODO: Implement email sending (e.g. Resend, Nodemailer)
  console.log('Contact form submission:', { name, email, message });

  return { success: true };
}
