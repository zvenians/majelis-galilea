# Contributing Guidelines

Thank you for your interest in contributing to **Majelis Galilea**.

## Development & Clasp Workflow

1. **Local Clasp Configuration:**
   Copy the provided template to create your local configuration:
   ``bash
   cp .clasp.json.example .clasp.json
   ``
   Configure your Google Apps Script project ID in `.clasp.json`. Note: `.clasp.json` is strictly ignored by Git to prevent credential leaks.

2. **Validation Suite:**
   Before pushing changes or submitting a pull request, run the pre-deployment validator:
   ``bash
   node scripts/validate-gas.js
   ``
   This performs:
   - AST syntax parsing across all 24,000+ lines of `apps-script/Code.gs`.
   - UTF-8 BOM and JSON validation of `appsscript.json` and `.clasp.json`.

3. **Commit Standards:**
   Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `ci:`, `chore:`).

4. **Pull Requests:**
   - Target the `main` branch.
   - Describe administrative workflows affected (e.g., Notulen, RAPBJ, Surat Keluar, RBAC).
   - Ensure automated GitHub Actions CI passes.
