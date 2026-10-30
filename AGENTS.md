# AI handoff — Minute to Action

Read README.md and `.env.example`. This is a standalone product, not the portfolio homepage.

- Use Node24, `npm ci`, `npm test`, `npm run build`. Start with `lib/product.ts`, `lib/domain.ts`, `lib/server.ts`, `lib/auth.ts`, `app/api/records/route.ts` and `app/workspace/workspace.tsx`.
- Preserve the working-journal design: ivory, navy, muted yellow and restrained serif headings. Keep the meeting document and cross-meeting action board distinct.
- Never invent owners, deadlines or decisions absent from source notes. Preserve explicit Unassigned fields and editable AI output.
- Real Groq generation stays server-side, bounded and Zod-validated. Provider failures retain input and never return fake generated results.
- Supabase is shared with Reply Desk, the portfolio and an unrelated food tracker. Never reset tables, weaken RLS or touch food_entries.
- Preserve guest-cookie isolation, fixed product kind, same-origin mutations and auth.uid ownership. Guest/account work never silently merges.
- Registration is disabled until production confirmation-email delivery is verified. Existing-account login has not been tested with account credentials.
- Shared quotas are8/workspace,10/IP,100global attempts per rolling day; failures count. Guest access expires after30days.
- Verify generation, edit/reload, action board status/owner filters, Markdown/CSV export, failure recovery, keyboard and360/390px phones. Physical-device testing remains outstanding.
- Source main auto-deploys the existing Vercel minute-to-action project in noel-perlands-projects. Secrets stay in Production settings. No service-role key. Current standalone Groq key expires28January2027.
- No meeting recording, calendar access, outbound messages or payments are implemented; do not imply otherwise.
