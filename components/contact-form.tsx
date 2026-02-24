"use client";

import { useState, type FormEvent } from "react";

import { LoadingSpinner } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";

type ContactStatus = "idle" | "loading" | "success" | "error";

const initialData = {
  name: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const body = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(body.message ?? "Submission failed");
      }

      setStatus("success");
      setFeedback(body.message ?? "Message sent successfully.");
      setData(initialData);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Could not send message. Please try again."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm text-slate-700">
        Name
        <input
          required
          value={data.name}
          onChange={(event) => setData({ ...data, name: event.target.value })}
          className="h-11 border border-slate-300 bg-white px-3 text-slate-900 outline-none focus:border-sky-900"
          autoComplete="name"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-slate-700">
        Email
        <input
          required
          type="email"
          value={data.email}
          onChange={(event) => setData({ ...data, email: event.target.value })}
          className="h-11 border border-slate-300 bg-white px-3 text-slate-900 outline-none focus:border-sky-900"
          autoComplete="email"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-slate-700">
        Message
        <textarea
          required
          rows={5}
          value={data.message}
          onChange={(event) =>
            setData({ ...data, message: event.target.value })
          }
          className="border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-sky-900"
        />
      </label>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 w-fit bg-slate-900 text-white hover:bg-slate-800"
      >
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <LoadingSpinner />
            Sending
          </span>
        ) : (
          "Send message"
        )}
      </Button>

      {feedback ? (
        <p
          className={
            status === "error" ? "text-sm text-red-700" : "text-sm text-emerald-700"
          }
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
