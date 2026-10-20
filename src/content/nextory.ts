// Source: user's official-site recording, 20261020-0748-36.7554001.mp4.
// Confirm current commercial terms with A3i before activating a subscription.
export const nextoryPlans = [
  { name: 'Free', price: '$0', period: '/ month', hours: '5 meeting hours / month', points: ['Summaries and action items', 'Ask across your meetings', 'Missed-meeting uploads'] },
  { name: 'Pro', price: '$29', period: '/ month', hours: '40 meeting hours / month', points: ['Everything in Free', 'Topic tagging', 'Priority processing'] },
  { name: 'Business', price: '$49', period: '/ month', hours: '60 meeting hours / month', points: ['Everything in Pro', '50% more monthly hours'] },
  { name: 'Enterprise', price: 'Custom', period: '', hours: 'Unlimited meeting hours', points: ['Everything in Business', 'Team meetings, shared Ask and management', 'Custom retention policy', 'Dedicated support'] },
] as const;

export const nextoryComparison = [
  ['A transcript to read through', 'A summary, decisions, owners and dates to act on'],
  ['Paying per seat, whether or not someone meets', 'A subscription metered by meeting hours'],
  ['Recordings without a clear retention routine', 'Uploaded media deleted after transcription; bot recordings default to five days'],
  ['A missed call with no notes', 'Upload the recording for the same summary, actions and searchable history'],
] as const;
