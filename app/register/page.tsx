"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Plus,
  Trash2,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ChevronDown,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormType = "cs" | "mkf";

interface Teammate {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  level: string;
  skill: string;
}

interface LeaderForm {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  level: string;
  leaderSkill: string;
  solo: boolean;
  teammates: Teammate[];
  motivation: string;
  expectations: string;
  agreeInfo: boolean;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const LEVELS = [
  "L1 / 1CP",
  "L2 / 2CP",
  "L3 / 1CS",
  "M1 / 2CS",
  "M2 / 3CS",
  "Doctorat / Post-grad",
];

const CS_SKILLS = [
  "Développement Backend",
  "Développement Frontend",
  "Designer UI/UX",
  "DevOps / CI/CD",
  "DevSecOps",
  "IA / Machine Learning",
  "Data Engineering",
];

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "";

const emptyTeammate = (): Teammate => ({
  fullName: "",
  email: "",
  phone: "",
  school: "",
  level: "",
  skill: "",
});

const emptyLeader = (): LeaderForm => ({
  fullName: "",
  email: "",
  phone: "",
  school: "",
  level: "",
  leaderSkill: "",
  solo: false,
  teammates: [emptyTeammate()],
  motivation: "",
  expectations: "",
  agreeInfo: false,
});

// ─── Nav links ────────────────────────────────────────────────────────────────

const navLinks = [
  { href: "#about", label: "À Propos" },
  { href: "#agenda", label: "Agenda" },
  { href: "#clubs", label: "Les Clubs" },
  { href: "#register", label: "S&apos;inscrire" },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1e0f05]/95 backdrop-blur-md shadow-lg border-b border-[#C4824A]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            style={{ fontFamily: "&apos;Cinzel&apos;, serif" }}
            className="text-[#E8D5B0] text-base tracking-widest"
          >
            EL7EL
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: "&apos;Cinzel&apos;, serif" }}
              className="text-[10px] tracking-widest text-[#E8D5B0]/75 hover:text-[#C8973C] transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            style={{ fontFamily: "&apos;Cinzel&apos;, serif" }}
            className="text-[10px] tracking-widest bg-[#C4824A] hover:bg-[#A0612E] text-[#FAF3E0] px-5 py-2 uppercase transition-colors border border-[#C8973C]/30 rounded-sm"
          >
            Participer
          </a>
        </div>

        <button
          className="md:hidden text-[#E8D5B0] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1e0f05]/98 backdrop-blur-md border-t border-[#C4824A]/20">
          <div className="px-4 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ fontFamily: "&apos;Cinzel&apos;, serif" }}
                className="text-[10px] tracking-widest text-[#E8D5B0]/80 hover:text-[#C8973C] uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              style={{ fontFamily: "&apos;Cinzel&apos;, serif" }}
              className="text-[10px] tracking-widest bg-[#C4824A] text-[#FAF3E0] px-4 py-3 uppercase text-center mt-2 rounded-sm"
            >
              Participer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Field primitives ─────────────────────────────────────────────────────────

const inputCls =
  "w-full px-4 py-3 rounded-lg text-sm bg-[#FAF3E0] border-2 border-[#E8D5B0] focus:border-[#C4824A] focus:ring-2 focus:ring-[#C4824A]/15 outline-none transition-all text-[#2E1A10] placeholder-[#A0826D] font-sans shadow-sm";
const labelCls =
  "block text-[11px] tracking-widest uppercase text-[#5C3A1E] font-semibold mb-2";

function Field({
  label,
  req,
  children,
}: {
  label: string;
  req?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls}>
        {label}
        {req && <span className="text-[#C4824A] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function FInput({
  label,
  req,
  ...p
}: {
  label: string;
  req?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Field label={label} req={req}>
      <input {...p} className={inputCls} />
    </Field>
  );
}

function FSelect({
  label,
  req,
  children,
  ...p
}: {
  label: string;
  req?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Field label={label} req={req}>
      <div className="relative">
        <select {...p} className={`${inputCls} appearance-none pr-8`}>
          {children}
        </select>
        <ChevronDown
          size={13}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C4824A] pointer-events-none"
        />
      </div>
    </Field>
  );
}

function FTextarea({
  label,
  req,
  ...p
}: {
  label: string;
  req?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Field label={label} req={req}>
      <textarea {...p} className={`${inputCls} resize-none`} rows={3} />
    </Field>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 h-px bg-linear-to-r from-[#E8D5B0] via-[#C4824A] to-[#E8D5B0]" />
      <span className="text-[10px] tracking-widest uppercase text-[#C4824A] font-bold whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-linear-to-r from-[#E8D5B0] via-[#C4824A] to-[#E8D5B0]" />
    </div>
  );
}

// ─── Teammate card ────────────────────────────────────────────────────────────

function TeammateCard({
  index,
  data,
  onChange,
  onRemove,
  isCS,
}: {
  index: number;
  data: Teammate;
  onChange: (t: Teammate) => void;
  onRemove: () => void;
  isCS: boolean;
}) {
  const s = (k: keyof Teammate, v: string) => onChange({ ...data, [k]: v });
  return (
    <div className="rounded-xl border-2 border-[#E8D5B0] bg-linear-to-br from-[#FAF3E0] to-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] tracking-widest uppercase text-[#C4824A] font-bold">
          👥 Coéquipier {index + 1}
        </span>
        <button
          type="button"
          onClick={onRemove}
          className="p-1.5 rounded-lg hover:bg-red-100 text-[#A0826D] hover:text-red-600 transition-colors"
          aria-label="Supprimer"
        >
          <Trash2 size={14} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FInput
          label="Nom complet"
          req
          placeholder="Nom complet"
          value={data.fullName}
          onChange={(e) => s("fullName", e.target.value)}
        />
        <FInput
          label="Email"
          req
          type="email"
          placeholder="email@example.com"
          value={data.email}
          onChange={(e) => s("email", e.target.value)}
        />
        <FInput
          label="Téléphone"
          req
          type="tel"
          placeholder="+213 XXX XXX XXX"
          value={data.phone}
          onChange={(e) => s("phone", e.target.value)}
        />
        <FInput
          label="École / Université"
          req
          placeholder="ESTIN, USTHB..."
          value={data.school}
          onChange={(e) => s("school", e.target.value)}
        />
        <FSelect
          label="Niveau"
          req
          value={data.level}
          onChange={(e) => s("level", e.target.value)}
        >
          <option value="">Sélectionner</option>
          {LEVELS.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </FSelect>
        {isCS && (
          <FSelect
            label="Compétence"
            req
            value={data.skill}
            onChange={(e) => s("skill", e.target.value)}
          >
            <option value="">Sélectionner</option>
            {CS_SKILLS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </FSelect>
        )}
      </div>
    </div>
  );
}

// ─── Success screen ───────────────────────────────────────────────────────────

function Success({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center py-16 gap-6 text-center">
      <div className="w-20 h-20 rounded-full bg-linear-to-br from-emerald-100 to-emerald-50 border-2 border-emerald-300 flex items-center justify-center shadow-md">
        <CheckCircle2 size={40} className="text-emerald-600" />
      </div>
      <div>
        <h3
          style={{ fontFamily: "&apos;Cinzel&apos;, serif" }}
          className="text-2xl font-bold text-[#2E1A10] mb-3"
        >
          ✨ Inscription reçue !
        </h3>
        <p className="text-[#5C3A1E] text-sm max-w-md leading-relaxed mb-2">
          Votre demande a bien été enregistrée. Vous recevrez une confirmation
          par email sous 48h.
        </p>
        <p className="text-[#A0826D] text-xs">
          À très bientôt pour l&apos;aventure EL7EL ! 🚀
        </p>
      </div>
      <p
        style={{ fontFamily: "&apos;Amiri&apos;, serif", direction: "rtl" }}
        className="text-lg text-[#C4824A] font-bold"
      >
        يد وحدة ما تسفق
      </p>
      <button
        onClick={onReset}
        className="text-[11px] tracking-widest uppercase px-8 py-3 rounded-lg border-2 border-[#C4824A] text-[#C4824A] hover:bg-[#C4824A]/5 transition-all font-semibold"
      >
        Nouvelle inscription
      </button>
    </div>
  );
}

// ─── Main form ────────────────────────────────────────────────────────────────

function RegisterForm({ formType }: { formType: FormType }) {
  const [form, setForm] = useState<LeaderForm>(emptyLeader());
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const isCS = formType === "cs";
  const MAX = 3;

  const set = <K extends keyof LeaderForm>(k: K, v: LeaderForm[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const updateTm = (i: number, t: Teammate) => {
    const arr = [...form.teammates];
    arr[i] = t;
    set("teammates", arr);
  };
  const addTm = () => {
    if (form.teammates.length < MAX)
      set("teammates", [...form.teammates, emptyTeammate()]);
  };
  const removeTm = (i: number) =>
    set(
      "teammates",
      form.teammates.filter((_, idx) => idx !== i),
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreeInfo) {
      setErrorMsg("Veuillez accepter la loi sur la protection des données.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");
    const payload = {
      formType: isCS ? "Informatique (CS)" : "Marketing & Finance",
      timestamp: new Date().toISOString(),
      leaderName: form.fullName,
      leaderEmail: form.email,
      leaderPhone: form.phone,
      leaderSchool: form.school,
      leaderLevel: form.level,
      leaderSkill: isCS ? form.leaderSkill : "—",
      solo: form.solo ? "Oui (sera assigné)" : "Non",
      teammates: form.solo ? [] : form.teammates,
      motivation: form.motivation,
      expectations: form.expectations,
    };
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Erreur de connexion. Veuillez réessayer.");
    }
  };

  if (status === "success")
    return (
      <Success
        onReset={() => {
          setForm(emptyLeader());
          setStatus("idle");
        }}
      />
    );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Leader */}
      <Divider label="👤 Chef d'équipe — vous" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FInput
          label="Nom complet"
          req
          placeholder="Votre nom complet"
          value={form.fullName}
          onChange={(e) => set("fullName", e.target.value)}
        />
        <FInput
          label="Email"
          req
          type="email"
          placeholder="votre@email.com"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
        />
        <FInput
          label="Téléphone"
          req
          type="tel"
          placeholder="+213 XXX XXX XXX"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
        <FInput
          label="École / Université"
          req
          placeholder="ESTIN, USTHB, IFAG..."
          value={form.school}
          onChange={(e) => set("school", e.target.value)}
        />
        <FSelect
          label="Niveau"
          req
          value={form.level}
          onChange={(e) => set("level", e.target.value)}
        >
          <option value="">Sélectionner votre niveau</option>
          {LEVELS.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </FSelect>
        {isCS && (
          <FSelect
            label="Votre compétence principale"
            req
            value={form.leaderSkill}
            onChange={(e) => set("leaderSkill", e.target.value)}
          >
            <option value="">Sélectionner</option>
            {CS_SKILLS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </FSelect>
        )}
      </div>

      {/* Team or solo */}
      <Divider label="🤝 Composition de l'équipe" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => {
            set("solo", false);
            if (form.teammates.length === 0)
              set("teammates", [emptyTeammate()]);
          }}
          className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
            !form.solo
              ? "border-[#C4824A] bg-[#C4824A]/8 ring-1 ring-[#C4824A]/30 shadow-sm"
              : "border-[#E8D5B0] bg-white hover:border-[#C4824A] hover:shadow-sm"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg ${!form.solo ? "bg-[#C4824A]/15" : "bg-[#E8D5B0]"}`}
          >
            👥
          </div>
          <div>
            <p className="text-sm font-bold text-[#2E1A10]">
              J&apos;ai des coéquipiers
            </p>
            <p className="text-xs text-[#A0826D] mt-0.5">1 à 3 membres</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => set("solo", true)}
          className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
            form.solo
              ? "border-emerald-400 bg-emerald-50 ring-1 ring-emerald-200 shadow-sm"
              : "border-[#E8D5B0] bg-white hover:border-emerald-400 hover:shadow-sm"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg ${form.solo ? "bg-emerald-100" : "bg-[#E8D5B0]"}`}
          >
            🎯
          </div>
          <div>
            <p className="text-sm font-bold text-[#2E1A10]">
              Je participe seul(e)
            </p>
            <p className="text-xs text-[#A0826D] mt-0.5">
              Assigné(e) à une équipe
            </p>
          </div>
        </button>
      </div>

      {/* Solo note */}
      {form.solo && (
        <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 flex gap-3">
          <span className="text-2xl shrink-0">🌱</span>
          <p className="text-emerald-800 text-sm leading-relaxed font-medium">
            Pas de problème ! Vous serez assigné(e) à une équipe lors du
            check-in le <strong>23 Avril</strong>. Une belle occasion de faire
            de nouvelles rencontres et de collaborer avec d&apos;autres profils.
          </p>
        </div>
      )}

      {/* Teammates */}
      {!form.solo && (
        <>
          {/* Notice box */}
          <div className="p-4 rounded-xl bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-300 flex gap-3">
            <span className="text-2xl shrink-0">💡</span>
            <div className="text-amber-900 text-sm leading-relaxed font-medium">
              {isCS ? (
                <>
                  Votre équipe peut avoir <strong>1 à 3 coéquipiers</strong> —
                  pas besoin d&apos;être au complet pour s&apos;inscrire. Si
                  vous n&apos;avez qu&apos;un ou deux coéquipiers, c&apos;est
                  tout à fait valide.✨
                </>
              ) : (
                <>
                  Votre équipe peut avoir <strong>1 à 3 coéquipiers</strong>.
                  Pas besoin d&apos;être au complet — un ou deux coéquipiers
                  suffisent. Pour une équipe équilibrée, essayez d&apos;inclure
                  au moins <strong>un profil Finance</strong> et{" "}
                  <strong>un profil Marketing</strong>. 🎯
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {form.teammates.map((t, i) => (
              <TeammateCard
                key={i}
                index={i}
                data={t}
                onChange={(tm) => updateTm(i, tm)}
                onRemove={() => removeTm(i)}
                isCS={isCS}
              />
            ))}
          </div>

          {form.teammates.length < MAX && (
            <button
              type="button"
              onClick={addTm}
              className="flex items-center gap-2 self-start text-[11px] tracking-widest uppercase px-5 py-3 rounded-lg border-2 border-dashed border-[#C4824A] bg-white text-[#C4824A] hover:bg-[#C4824A]/5 transition-all font-semibold"
            >
              <Plus size={14} />
              Ajouter un coéquipier
              <span className="text-[#C4824A]/60 normal-case tracking-normal font-normal text-xs">
                ({form.teammates.length}/{MAX})
              </span>
            </button>
          )}
        </>
      )}

      {/* Motivation */}
      <Divider label="💭 Motivation" />
      <FTextarea
        label="Pourquoi souhaitez-vous participer ?"
        req
        placeholder="Décrivez votre motivation, vos ambitions pour cet hackathon..."
        value={form.motivation}
        onChange={(e) => set("motivation", e.target.value)}
      />
      <FTextarea
        label="Qu'attendez-vous de cet événement ?"
        req
        placeholder="Apprentissages, rencontres, compétences, visibilité..."
        value={form.expectations}
        onChange={(e) => set("expectations", e.target.value)}
      />

      {/* Consent */}
      <Divider label="🔒 Protection des données" />
      <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-[#C4824A]/3 transition-colors">
        <button
          type="button"
          onClick={() => set("agreeInfo", !form.agreeInfo)}
          className={`shrink-0 mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all font-bold text-sm ${
            form.agreeInfo
              ? "bg-[#C4824A] border-[#C4824A] text-white"
              : "bg-white border-[#E8D5B0]"
          }`}
        >
          {form.agreeInfo && "✓"}
        </button>
        <span className="text-xs text-[#5C3A1E] leading-relaxed">
          J&apos;ai lu et j&apos;accepte la{" "}
          <strong className="text-[#C4824A] font-bold">
            loi algérienne n° 18-07 du 10 juin 2018
          </strong>{" "}
          relative à la protection des données à caractère personnel. Je consens
          à ce que mes informations soient utilisées uniquement dans le cadre de
          l&apos;hackathon EL7EL.
          <span className="text-[#C4824A] ml-0.5">*</span>
        </span>
      </label>

      {/* Error */}
      {errorMsg && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border-2 border-red-300">
          <AlertCircle size={16} className="text-red-600 shrink-0" />
          <p className="text-red-700 text-xs font-medium">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-xl text-[12px] tracking-widest uppercase font-bold transition-all flex items-center justify-center gap-2 mt-2 shadow-md hover:shadow-lg transform hover:scale-105"
        style={{
          background:
            status === "loading"
              ? "rgba(196,130,74,0.6)"
              : "linear-gradient(135deg, #C4824A 0%, #A0612E 100%)",
          color: "#FAF3E0",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          fontFamily: "&apos;Cinzel&apos;, serif",
          opacity: status === "loading" ? 0.8 : 1,
        }}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Envoi en cours...
          </>
        ) : (
          "🚀 Envoyer l&apos;inscription"
        )}
      </button>
    </form>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Register() {
  const [activeForm, setActiveForm] = useState<FormType>("cs");

  return (
    <>
      <Navbar />

      {/* Page with zelij background */}
      <div
        className="min-h-screen relative"
        style={{
          background:
            "linear-gradient(135deg, #F7F2EA 0%, #FAF3E0 50%, #F7F2EA 100%)",
        }}
      >
        {/* Fixed zelij pattern background - multiple layers */}
        <div
          className="fixed inset-0 overflow-hidden pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {/* Layer 1 - Top left */}
          <div className="absolute -top-20 -left-20 w-96 h-96 opacity-12">
            <Image
              src="/zelij-pattern.png"
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(100%)", pointerEvents: "none" }}
            />
          </div>

          {/* Layer 2 - Top right */}
          <div className="absolute -top-40 -right-32 w-96 h-96 opacity-10">
            <Image
              src="/zelij-pattern.png"
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(100%)", pointerEvents: "none" }}
            />
          </div>

          {/* Layer 3 - Bottom left */}
          <div className="absolute -bottom-40 -left-40 w-96 h-96 opacity-8">
            <Image
              src="/zelij-pattern.png"
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(100%)", pointerEvents: "none" }}
            />
          </div>

          {/* Layer 4 - Bottom right */}
          <div className="absolute -bottom-20 -right-24 w-96 h-96 opacity-11">
            <Image
              src="/zelij-pattern.png"
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(100%)", pointerEvents: "none" }}
            />
          </div>

          {/* Layer 5 - Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-9">
            <Image
              src="/zelij-pattern.png"
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(100%)", pointerEvents: "none" }}
            />
          </div>
        </div>

        {/* Content */}
        <div
          className="relative z-10"
          style={{ position: "relative", zIndex: 10 }}
        >
          {/* Hero section */}
          <div className="pt-32 pb-16 px-4 text-center flex flex-col items-center gap-3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#C4824A]/10 border border-[#C4824A]/30 mb-2">
              <span className="text-[11px] tracking-widest uppercase text-[#C4824A] font-bold">
                🎯 S&apos;inscrire à l&apos;aventure
              </span>
            </div>
            <h1
              style={{ fontFamily: "&apos;Cinzel&apos;, serif" }}
              className="text-5xl sm:text-6xl font-bold text-[#2E1A10] tracking-wide leading-tight"
            >
              S&apos;inscrire
            </h1>
            <p
              style={{
                fontFamily: "&apos;Amiri&apos;, serif",
                direction: "rtl",
              }}
              className="text-3xl text-[#C4824A] font-bold"
            >
              يد وحدة ما تسفق
            </p>
            <p className="text-[#5C3A1E] text-base max-w-xl leading-relaxed">
              Les équipes sont <strong>mixtes</strong> — 3 informaticiens + 3
              marketing/finance. Chaque profil s&apos;inscrit séparément, nous
              composons les équipes lors du check-in.
            </p>
          </div>

          {/* Form area */}
          <div className="max-w-3xl mx-auto px-4 pb-16">
            {/* Tab switcher */}
            <div
              className="flex gap-3 p-1.5 rounded-xl mb-8 backdrop-blur-md"
              style={{
                background: "rgba(250,243,224,0.8)",
                border: "2px solid rgba(196,130,74,0.3)",
              }}
            >
              {[
                {
                  id: "cs" as FormType,
                  emoji: "💻",
                  label: "Informatique",
                  sub: "CS · Cloud · DevOps · IA",
                },
                {
                  id: "mkf" as FormType,
                  emoji: "📊",
                  label: "Marketing & Finance",
                  sub: "Mktg · Finance · Compta",
                },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveForm(t.id)}
                  className="flex-1 py-3 px-4 rounded-lg transition-all duration-300 text-center font-semibold shadow-sm hover:shadow-md"
                  style={
                    activeForm === t.id
                      ? {
                          background:
                            "linear-gradient(135deg, #C4824A 0%, #A0612E 100%)",
                          boxShadow: "0 4px 16px rgba(196,130,74,0.4)",
                        }
                      : { background: "rgba(255,255,255,0.7)" }
                  }
                >
                  <div
                    className="text-xs font-bold"
                    style={{
                      fontFamily: "&apos;Cinzel&apos;, serif",
                      color: activeForm === t.id ? "#FAF3E0" : "#5C3A1E",
                    }}
                  >
                    {t.emoji} {t.label}
                  </div>
                  <div
                    className="text-[10px] mt-0.5 hidden sm:block font-medium"
                    style={{
                      color:
                        activeForm === t.id
                          ? "rgba(250,243,224,0.75)"
                          : "#5C3A1E80",
                    }}
                  >
                    {t.sub}
                  </div>
                </button>
              ))}
            </div>

            {/* Form card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-[#E8D5B0] backdrop-blur-md">
              {/* Top accent gradient */}
              <div
                className="h-1.5"
                style={{
                  background:
                    "linear-gradient(90deg, #C4824A 0%, #E8995F 33%, #A0612E 66%, #2E7D6B 100%)",
                }}
              />

              {/* Card header */}
              <div className="px-6 sm:px-8 pt-6 pb-5 border-b-2 border-[#E8D5B0] bg-linear-to-r from-white to-[#FAF3E0]/30">
                <div>
                  <h2
                    className="text-lg font-bold text-[#2E1A10]"
                    style={{ fontFamily: "&apos;Cinzel&apos;, serif" }}
                  >
                    {activeForm === "cs"
                      ? "💻 Formulaire — Équipe Informatique"
                      : "📊 Formulaire — Équipe Marketing & Finance"}
                  </h2>
                  <p className="text-xs text-[#A0826D] mt-1.5 font-medium">
                    Le chef d&apos;équipe remplit le formulaire pour toute
                    l&apos;équipe
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-7">
                <RegisterForm key={activeForm} formType={activeForm} />
              </div>
            </div>

            <p className="text-center text-[#A0826D] text-[12px] mt-6 leading-relaxed font-medium">
              * Champs obligatoires · Le nom d&apos;équipe sera choisi ensemble
              lors du check-in 🎉
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
