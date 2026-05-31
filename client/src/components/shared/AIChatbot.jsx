import { useMemo, useState } from "react";
import {
  Bot,
  CreditCard,
  HelpCircle,
  MessageCircle,
  RefreshCw,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const quickPrompts = [
  "How do I book a workspace?",
  "How do I pay my invoice?",
  "When will seats be allocated?",
  "How do I renew my plan?",
];

const getBotReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes("book") || text.includes("workspace")) {
    return "You can book a workspace from Client > Locations. Choose a branch, pick the workspace type, enter seats, then generate the invoice. Seats are allocated after payment is received.";
  }

  if (text.includes("pay") || text.includes("invoice") || text.includes("billing")) {
    return "Open Client > Billing to view pending invoices. Once payment is recorded, the invoice is marked paid and the workspace allocation becomes active.";
  }

  if (text.includes("seat") || text.includes("allocat")) {
    return "Seats are not consumed at invoice generation. They update only after successful payment, so branch capacity and the floor map stay aligned with paid allocations.";
  }

  if (text.includes("renew") || text.includes("contract")) {
    return "For renewals, check the renewal alerts on your dashboard. If your contract is near expiry, contact branch admin or use the renewal action shown beside your company.";
  }

  if (text.includes("login") || text.includes("password") || text.includes("access")) {
    return "If you cannot access your account, confirm you are using the correct client email. If the email is not found, contact support@coworkerp.com.";
  }

  if (text.includes("branch") || text.includes("floor")) {
    return "Branch admins can use Floor Map to see live capacity. The map updates from workspace and payment-backed allocation data.";
  }

  return "I can help with workspace bookings, invoices, payment status, seat allocation, renewals, login access, and branch floor map questions. Try asking about one of those.";
};

function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I am your AI customer support assistant. Ask me about bookings, payments, renewals, or seat allocation.",
    },
  ]);

  const visiblePrompts = useMemo(
    () => quickPrompts.filter((prompt) => prompt !== messages.at(-1)?.text),
    [messages]
  );

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "bot", text: getBotReply(trimmed) },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50">
      {open && (
        <div className="mb-4 w-[calc(100vw-2rem)] max-w-[380px] overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] text-white shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#020617] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                <Bot size={21} />
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  AI Customer Support
                </h3>
                <p className="text-xs text-slate-400">
                  Booking, billing and renewal help
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white"
              aria-label="Close customer support chatbot"
            >
              <X size={17} />
            </button>
          </div>

          <div className="max-h-[380px] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-cyan-500 text-white"
                      : "border border-white/10 bg-white/5 text-slate-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {visiblePrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:border-cyan-500/30 hover:text-cyan-300"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask customer support..."
                className="h-11 min-w-0 flex-1 rounded-xl border border-white/10 bg-[#020617] px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500/40"
              />
              <button
                type="submit"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-white hover:bg-cyan-400"
                aria-label="Send support message"
              >
                <Send size={17} />
              </button>
            </form>

            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1">
                <CreditCard size={12} />
                Billing
              </div>
              <div className="flex items-center gap-1">
                <RefreshCw size={12} />
                Renewals
              </div>
              <div className="flex items-center gap-1">
                <HelpCircle size={12} />
                Support
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500 text-white shadow-xl shadow-cyan-950/40 hover:bg-cyan-400"
        aria-label="Open AI customer support chatbot"
      >
        {open ? <X size={23} /> : <MessageCircle size={24} />}
      </button>

      {!open && (
        <div className="absolute bottom-16 right-0 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#0F172A] px-3 py-2 text-xs text-slate-300 shadow-lg sm:flex">
          <Sparkles size={14} className="text-cyan-300" />
          AI support
        </div>
      )}
    </div>
  );
}

export default AIChatbot;
