"use server"

import { Resend } from "resend"

const resend = new Resend("re_HZfHBPKd_8Zg8Ue7sXv4kXU7kH6Dzdkx8")

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  message: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["adrian241619@gmail.com"],
      replyTo: formData.email,
      subject: `Nuevo mensaje de contacto de ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5b1f00;">Nuevo mensaje de contacto - Balam-Nah</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Teléfono:</strong> ${formData.phone || "No proporcionado"}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #5b1f00;">Mensaje:</h3>
            <p style="line-height: 1.6;">${formData.message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de Balam-Nah
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return { success: false, error: "Error al enviar el mensaje" }
  }
}
