import { contacts } from "@/lib/data";

const lines = [
  { num: 1, content: "# Let's Build Something Together", className: "text-secondary" },
  {
    num: 2,
    content: "I'm currently open to architectural consulting and high-impact frontend roles.",
    className: "",
  },
  { num: 3, content: "", className: "" },
  { num: 4, content: "## Outreach Channels", className: "text-primary" },
];

export default function Contact() {
  return (
    <div className="space-y-4" id="contact">
      <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
        README.md / Contact
      </h2>
      <div className="bg-surface-container border border-outline-variant rounded-sm overflow-hidden">
        <div className="bg-surface-high px-4 py-2 border-b border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-on-surface-variant">
              description
            </span>
            <span className="font-mono text-code-sm text-on-surface">
              CONTACT.md
            </span>
          </div>
          <span className="material-symbols-outlined text-sm text-on-surface-variant">
            edit
          </span>
        </div>
        <div className="p-6 font-mono text-code-md text-on-surface space-y-4">
          {lines.map((line) => (
            <div key={line.num} className="flex gap-4">
              <span className="text-outline-variant select-none">
                {line.num}
              </span>
              <span className={line.className}>{line.content}</span>
            </div>
          ))}
          {contacts.map((contact, i) => (
            <div key={contact.label} className="flex gap-4">
              <span className="text-outline-variant select-none">
                {i + 5}
              </span>
              <span>
                - {contact.label}:{" "}
                <a
                  href={contact.href}
                  className="text-secondary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
