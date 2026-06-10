import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, service, goal, budget, timeline, details } = body

    // Validar campos requeridos
    if (!name || !email || !service || !budget || !timeline) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Mapear servicio a etiqueta legible
    const serviceLabels: Record<string, string> = {
      'web-design': 'Diseño Web',
      automation: 'Automatización de Leads',
      ecommerce: 'E-commerce',
      cortex: 'Cortex Lead Engine',
      fullstack: 'Full Stack + CRM',
      consulting: 'Asesoría & Marketing',
    }

    const serviceLabel = serviceLabels[service] || service

    // Configurar transporter de Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Enviar email
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_EMAIL}>`,
      to: 'cortexenterpriseve@gmail.com',
      subject: `Nuevo lead: ${name} — ${serviceLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
            .container { max-width: 560px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .header { background: #2563eb; padding: 24px 32px; }
            .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; }
            .header p { color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px; }
            .body { padding: 32px; }
            .field { margin-bottom: 20px; }
            .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #111827; font-weight: 500; }
            .divider { height: 1px; background: #e5e7eb; margin: 24px 0; }
            .whatsapp-cta { display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔥 Nuevo lead desde la web</h1>
              <p>Recibido el ${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="field-label">Nombre</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${company ? `<div class="field"><div class="field-label">Empresa</div><div class="field-value">${company}</div></div>` : ''}
              <div class="divider"></div>
              <div class="field">
                <div class="field-label">Servicio solicitado</div>
                <div class="field-value" style="color: #2563eb;">${serviceLabel}</div>
              </div>
              ${goal ? `<div class="field"><div class="field-label">Objetivo</div><div class="field-value">${goal}</div></div>` : ''}
              <div class="divider"></div>
              <div class="field">
                <div class="field-label">Presupuesto</div>
                <div class="field-value">${budget}</div>
              </div>
              <div class="field">
                <div class="field-label">Timeline</div>
                <div class="field-value">${timeline}</div>
              </div>
              ${details ? `<div class="field"><div class="field-label">Detalles adicionales</div><div class="field-value">${details}</div></div>` : ''}
              <div class="divider"></div>
              <p style="color: #6b7280; font-size: 13px;">
                ⏱ Responde en máximo 24 horas para maximizar la conversión.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    )
  }
}
