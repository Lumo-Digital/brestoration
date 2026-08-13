interface LeadEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  zipCode?: string;
  comments?: string;
  servicesOfInterest: string[];
  isHomeOwner?: string;
  hasInsurance?: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function infoRow(label: string, value: string, isFirst: boolean) {
  return `
    <tr>
      <td
        colspan="1"
        rowspan="1"
        style="
          padding: 12px 0;
          font-size: 14px;
          color: #475569;
          font-weight: 600;
          width: 120px;
          vertical-align: top;
          ${isFirst ? "" : "border-top: 1px solid #e2e8f0;"}
        "
      >
        <p style="margin: 0px"><strong>${label}:</strong></p>
      </td>
      <td
        colspan="1"
        rowspan="1"
        style="
          padding: 12px 0;
          font-size: 15px;
          color: #001533;
          font-weight: 500;
          ${isFirst ? "" : "border-top: 1px solid #e2e8f0;"}
        "
      >
        <p style="margin: 0px"><strong>${value}</strong></p>
      </td>
    </tr>`;
}

export function buildLeadEmailHtml(data: LeadEmailData) {
  const firstName = escapeHtml(data.firstName);
  const lastName = escapeHtml(data.lastName);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone || "-");
  const zipCode = escapeHtml(data.zipCode || "-");
  const services = escapeHtml(data.servicesOfInterest.join(", "));
  const comments = data.comments?.trim() ? escapeHtml(data.comments) : "";
  const isHomeOwner = escapeHtml(data.isHomeOwner || "-");
  const hasInsurance = escapeHtml(data.hasInsurance || "-");

  const commentsBlock = comments
    ? `
                  <table
                    style="
                      width: 100%;
                      background: linear-gradient(135deg, #fef3c7 0%, #fefce8 100%);
                      border-left: 4px solid #f1b50e;
                      border-radius: 12px;
                      padding: 24px;
                      margin-bottom: 24px;
                    "
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td colspan="1" rowspan="1">
                          <h3
                            style="
                              font-size: 18px;
                              font-weight: 700;
                              color: #001533;
                              margin: 0 0 12px 0;
                              letter-spacing: -0.01em;
                            "
                          >
                            <strong>Your Comments</strong>
                          </h3>
                          <p
                            style="
                              margin: 0px;
                              text-align: left;
                              line-height: 1.5;
                              font-size: 15px;
                              color: #4d3d00;
                            "
                          >
                            ${comments}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>`
    : "";

  return `
<div style="margin: 0; padding: 30px 0; background-color: #f1f5f9;">
  <table
    style="width: 100%; border-collapse: collapse; background-color: #f1f5f9; padding: 20px;"
    role="presentation"
  >
    <tbody>
      <tr>
        <td colspan="1" rowspan="1" align="center">
          <table
            style="
              max-width: 600px;
              width: 100%;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
            "
            role="presentation"
          >
            <tbody>
              <tr>
                <td
                  colspan="1"
                  rowspan="1"
                  style="
                    background: linear-gradient(135deg, #001533 0%, #003d5c 100%);
                    padding: 48px 40px;
                    text-align: center;
                  "
                >
                  <div style="margin-bottom: 24px">
                    <p style="margin: 0px">
                      <img
                        width="130"
                        height="auto"
                        src="https://brestorations.com/logos/logo-white.png"
                        alt="Blue Restoration Logo"
                        style="display: inline-block"
                      />
                    </p>
                  </div>
                  <h1
                    style="
                      line-height: 1.3;
                      color: #ffffff;
                      font-size: 28px;
                      font-weight: 700;
                      margin: 0 0 8px 0;
                      letter-spacing: -0.02em;
                    "
                  >
                    <strong>Thank you for your request!</strong>
                  </h1>
                </td>
              </tr>
              <tr>
                <td colspan="1" rowspan="1" style="padding: 48px 40px">
                  <p
                    style="
                      margin: 0px;
                      line-height: 1.6;
                      font-size: 16px;
                      color: #475569;
                    "
                  >
                    We've received your request for a free assessment and we're
                    ready to help you restore your property to its pre-damage
                    condition.
                  </p>
                  <p
                    style="
                      margin: 0px;
                      line-height: 1.6;
                      padding-bottom: 30px;
                      font-size: 16px;
                      color: #475569;
                    "
                  >
                    Our team of restoration specialists will review your
                    information and reach out to you within
                    <strong style="color: #001533">24-48 hours</strong> to
                    schedule your assessment and discuss your restoration needs.
                  </p>
                  <table
                    style="
                      width: 100%;
                      background-color: #f8fafc;
                      border-radius: 12px;
                      padding: 32px;
                      margin-bottom: 24px;
                      border: 1px solid #e2e8f0;
                    "
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td colspan="1" rowspan="1">
                          <h2
                            style="
                              font-size: 20px;
                              font-weight: 700;
                              color: #001533;
                              margin: 0 0 20px 0;
                              letter-spacing: -0.02em;
                            "
                          >
                            <strong>Your Information</strong>
                          </h2>
                          <table style="width: 100%" role="presentation">
                            <tbody>
                              ${infoRow("Name", `${firstName} ${lastName}`, true)}
                              ${infoRow("Email", email, false)}
                              ${infoRow("Phone", phone, false)}
                              ${infoRow("Zip Code", zipCode, false)}
                              ${infoRow("Home Owner", isHomeOwner, false)}
                              ${infoRow("Has Insurance", hasInsurance, false)}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    style="
                      width: 100%;
                      background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%);
                      border-left: 4px solid #009fe3;
                      border-radius: 12px;
                      padding: 24px;
                      margin-bottom: 24px;
                    "
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td colspan="1" rowspan="1">
                          <h3
                            style="
                              font-size: 18px;
                              font-weight: 700;
                              color: #001533;
                              margin: 0 0 12px 0;
                              letter-spacing: -0.01em;
                            "
                          >
                            <strong>Services of Interest</strong>
                          </h3>
                          <p
                            style="
                              margin: 0px;
                              line-height: 1.5;
                              font-size: 15px;
                              color: #003d5c;
                              font-weight: 500;
                            "
                          >
                            <strong>${services}</strong>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>${commentsBlock}
                  <table
                    style="
                      width: 100%;
                      background: linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%);
                      border-left: 4px solid #16a34a;
                      border-radius: 12px;
                      padding: 24px;
                      margin-bottom: 32px;
                    "
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td colspan="1" rowspan="1">
                          <h3
                            style="
                              font-size: 18px;
                              font-weight: 700;
                              color: #001533;
                              margin: 0 0 12px 0;
                              letter-spacing: -0.01em;
                            "
                          >
                            <strong>What happens next?</strong>
                          </h3>
                          <p
                            style="
                              margin: 0px;
                              line-height: 1.5;
                              font-size: 15px;
                              color: #065f46;
                            "
                          >
                            One of our restoration specialists will contact you
                            to:
                          </p>
                          <table style="width: 100%" role="presentation">
                            <tbody>
                              <tr>
                                <td
                                  colspan="1"
                                  rowspan="1"
                                  style="padding: 8px 0; font-size: 15px; color: #065f46;"
                                >
                                  <p style="margin: 0px">
                                    <strong
                                      ><span style="color: rgb(22, 163, 74)">✓</span></strong
                                    >
                                    Confirm your restoration service needs
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colspan="1"
                                  rowspan="1"
                                  style="padding: 8px 0; font-size: 15px; color: #065f46;"
                                >
                                  <p style="margin: 0px">
                                    <strong
                                      ><span style="color: rgb(22, 163, 74)">✓</span></strong
                                    >
                                    Schedule a convenient time for your property
                                    assessment
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colspan="1"
                                  rowspan="1"
                                  style="padding: 8px 0; font-size: 15px; color: #065f46;"
                                >
                                  <p style="margin: 0px">
                                    <strong
                                      ><span style="color: rgb(22, 163, 74)">✓</span></strong
                                    >
                                    Answer any questions about our restoration
                                    process
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    style="height: 1px; background-color: #e2e8f0; margin: 32px 0;"
                  ></div>
                  <p
                    style="
                      margin: 0px;
                      line-height: 1.6;
                      font-size: 16px;
                      color: #475569;
                    "
                  >
                    In the meantime, if you have any urgent questions or need
                    emergency restoration services, please don't hesitate to
                    reach out to us:
                  </p>
                  <table
                    style="
                      width: 100%;
                      margin-bottom: 32px;
                      background-color: #f8fafc;
                      border-radius: 8px;
                      padding: 20px;
                    "
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td
                          colspan="1"
                          rowspan="1"
                          style="padding: 10px 0; font-size: 15px; color: #001533;"
                        >
                          <ul style="margin: 0">
                            <li style="margin-bottom: 10px">
                              <p style="margin: 0px">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer nofollow"
                                  href="mailto:intake@brestorations.com"
                                  ><strong>intake@brestorations.com</strong></a
                                >
                              </p>
                            </li>
                            <li style="margin-bottom: 10px">
                              <p style="margin: 0px">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer nofollow"
                                  href="tel:+15613175125"
                                  ><strong>+1 (561) 317-5125</strong></a
                                >
                              </p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p
                    style="
                      margin: 0px;
                      line-height: 1.5;
                      font-size: 15px;
                      color: #475569;
                    "
                  >
                    We look forward to serving you and restoring your property
                    with the professional care and expertise it deserves.
                  </p>
                  <p
                    style="
                      margin: 0px;
                      font-size: 15px;
                      font-weight: 600;
                      color: #001533;
                    "
                  >
                    <strong>Best regards,<br />The Blue Restoration Team</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colspan="1"
                  rowspan="1"
                  style="
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    padding: 40px;
                    text-align: center;
                    border-top: 1px solid #e2e8f0;
                  "
                >
                  <div style="margin-bottom: 20px">
                    <p style="margin: 0px">
                      <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://brestorations.com/"
                        ><strong>Visit Our Website</strong></a
                      >
                      <span style="color: rgb(203, 213, 225)">|</span>
                      <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="mailto:intake@brestorations.com"
                        ><strong>Email Us</strong></a
                      >
                      <span style="color: rgb(203, 213, 225)">|</span>
                      <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="tel:+15613175125"
                        ><strong>Call Us</strong></a
                      >
                    </p>
                  </div>
                  <p
                    style="
                      margin: 0px;
                      line-height: 1.5;
                      font-size: 13px;
                      color: #64748b;
                      text-wrap: balance;
                    "
                  >
                    You're receiving this email because you requested a free
                    assessment from Blue Restoration.
                  </p>
                  <p
                    style="
                      margin: 0px;
                      line-height: 1.5;
                      font-size: 12px;
                      color: #94a3b8;
                    "
                  >
                    Blue Restoration Services | 3625 NW 82nd Ave Suite 111,
                    Doral, FL 33166
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;
}
