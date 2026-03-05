'use server';

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Mock implementation - in production, use Resend or SendGrid
  // await resend.emails.send({
  //   from: 'noreply@w1r3d.dev',
  //   to: 'hi@w1r3d.dev',
  //   replyTo: email as string,
  //   subject: `New message from ${name}`,
  //   html: `<p>${message}</p>`,
  // });

  return { success: true };
}
