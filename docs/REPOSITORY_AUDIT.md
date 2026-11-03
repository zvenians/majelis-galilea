# Majelis Galilea — repository review

Inspected 2026-11-03. The repository contains `apps-script/`, `api/`, `admin/`, `viewer/`, `scripts/`, and `docs/`. Its README describes Google Apps Script, a Vercel proxy, and a Google Sheets-backed administrative workflow.

## High-priority review gates

- Verify roles and permissions in the backend, not only by hiding UI controls.
- Review proxy authentication, method restrictions, sensitive logging, and secrets handling.
- Protect meeting minutes, finance records, membership information, and document exports.
- Test failure states for missing data, unauthorized access, expired sessions, and unavailable upstream services.
- Check mobile tables, form validation, focus, accessible labels, and print/PDF layouts.
- Preserve historical records and existing data schemas during changes.
- Identify actual validation commands from `scripts/` and CI before claiming checks passed.

## Communication standards

Do not imply independently audited security, guaranteed data integrity, or production readiness based only on a README badge. Explain deployment prerequisites and known operational limitations.

**Verification status:** Source tree and README inspected; no runtime tests executed. No behavior changed.

© Kevin Oloan Simatupang.
