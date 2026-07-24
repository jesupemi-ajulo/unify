// date format
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
//price format
export const formatPrice = (amount) => {
  return `N${amount.toLocaleString()}`;
};
// truncate long text and make it short
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
// get the time ago
export const timeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (seconds < 60) return "Just Now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
  return formatDate(dateString);
};
// get the deadline status
// export default getDeadlineStatus = (deadline) => {
//   const now = new Date();
//   const deadlineDate = new Date(deadline);
//   const daysLeft = Math.floor(
//     (deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
//   );
//   if (daysLeft < 0) return { label: "Closed", urgent: false };
//   if (daysLeft === 0) return { label: "Closes today", urgent: true };
//   if (daysLeft === 1) return { label: "1 day left", urgent: true };
//   if (daysLeft <= 7) return { label: `${daysLeft} days left`, urgent: true };
//   return { label: `${daysLeft} days left`, urgent: false };
// };
