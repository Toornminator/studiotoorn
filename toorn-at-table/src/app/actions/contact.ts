// Server action stub — kept around for git history only.
//
// The booking form moved to a pure client-side submit straight to
// Netlify Forms. See src/components/contact/BookingForm.tsx for the
// new flow:
//   browser → fetch POST `/` with form-name=contact → Netlify CDN
//   intercepts the submission and writes it to the Forms dashboard.
//
// Nothing imports this file. Safe to delete in a follow-up cleanup
// if you want to keep the actions/ folder tidy.

export {};
