// Server action stub — kept around for git history only.
//
// Newsletter signups moved to a pure client-side submit straight to
// Netlify Forms. See src/components/layout/NewsletterForm.tsx for the
// new flow:
//   browser → fetch POST `/__forms.html` with form-name=newsletter →
//   Netlify CDN intercepts the submission and writes it to the Forms
//   dashboard under the "newsletter" form.
//
// Nothing imports this file. Safe to delete in a follow-up cleanup
// if you want to keep the actions/ folder tidy.

export {};
