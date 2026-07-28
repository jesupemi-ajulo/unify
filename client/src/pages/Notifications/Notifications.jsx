import {
  BellOff,
  Calendar,
  Clock,
  Package,
  Sparkles,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { notifications as initialNotifications } from "../../lib/dummyData";
const iconMap = {
  calendar: Calendar,
  clock: Clock,
  users: Users,
  package: Package,
  sparkles: Sparkles,
};
const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };
  const hasUnread = notifications.some((n) => !n.read);
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* page header */}
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <h1 className="font-display font-extrabold text-xl md:text-2xl text-[#1a1a2e]">
          Notifications
        </h1>
        {hasUnread && (
          <button
            onClick={markAllAsRead}
            className="text-xs md:text-sm font-semibold text-[#7c6ff7] hover:text-[#6458e8] transition"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* notifications list */}
      {notifications.length > 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
          {notifications.map((notification) => {
            const Icon = iconMap[notification.icon] || Sparkles;
            return (
              <div
                key={notification.id}
                className={`flex items-start gap-3 md:gap-4 p-4 md:p-5 ${
                  !notification.read ? "bg-[#fafaf8]" : ""
                }`}
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#eee9ff] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={16} className="text-[#7c6ff7]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-0.5">
                    {notification.title}
                  </p>
                  <p className="text-xs md:text-sm text-[#6b6b80] leading-relaxed">
                    {notification.body}
                  </p>
                  <p className="text-[11px] md:text-xs text-[#a0a0b0] mt-1">
                    {notification.time}
                  </p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 rounded-full bg-[#7c6ff7] shrink-0 mt-2" />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center py-16 text-[#a0a0b0]">
          <BellOff size={32} className="mb-3" />
          <p className="text-sm">You're all caught up.</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;
