"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

type UserDetailsModalProps = {
  onClose: () => void;
};

export function UserDetailsModal({ onClose }: UserDetailsModalProps) {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    country: "",
  });
  const [submissionStatus, setSubmissionStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("loading");
    setResponseMessage("");

    try {
      const form = e.currentTarget as HTMLFormElement;
      const data = new FormData(form);

      const response = await fetch("https://formspree.io/f/mzzvonyp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setResponseMessage("Thank you! We'll contact you soon.");
        setFormData({
          parentName: "",
          childName: "",
          childAge: "",
          email: "",
          phone: "",
          country: "",
        });
        setTimeout(onClose, 3000); // Close after success
      } else {
        const errorData = await response.json();
        setSubmissionStatus("error");
        setResponseMessage(
          errorData.errors
            ? errorData.errors.map((err: any) => err.message).join(", ")
            : "Error submitting form."
        );
      }
    } catch {
      setSubmissionStatus("error");
      setResponseMessage("Network error. Please try again.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "#0c1118",
          border: "1px solid rgba(212,175,55,0.4)",
          padding: "25px",
          borderRadius: "14px",
          maxWidth: "500px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 0 30px rgba(212,175,55,0.4)",
          color: "#f2e79b",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            color: "#d4af37",
            fontSize: "1.8rem",
            cursor: "pointer",
          }}
        >
          <IoClose />
        </button>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: "bold",
            background: "linear-gradient(to right, #bd853c, #e0b86d)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "8px",
          }}
        >
          Welcome To ChessPrix Academy!
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#ebcc88",
            fontSize: "0.95rem",
          }}
        >
          Please share a few details so we can personalize your chess journey.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
          {[ 
            { label: "Parent's Name *", name: "parentName", type: "text" },
            { label: "Child's Name *", name: "childName", type: "text" },
            { label: "Email *", name: "email", type: "email" },
            { label: "Phone Number *", name: "phone", type: "tel" },
          ].map((field) => (
            <div key={field.name} style={{ marginBottom: "10px" }}>
              <label style={{ color: "#f3c47a" }}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={(formData as any)[field.name]}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "4px",
                  background: "#121820",
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: "6px",
                  color: "#fff",
                }}
              />
            </div>
          ))}

          {/* Child Age */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ color: "#f3c47a" }}>Child's Age *</label>
            <select
              name="childAge"
              value={formData.childAge}
              onChange={(e) => handleInputChange("childAge", e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
                background: "#121820",
                border: "1px solid rgba(212,175,55,0.3)",
                borderRadius: "6px",
                color: "#fff",
              }}
            >
              <option value="">Select age</option>
              {Array.from({ length: 13 }, (_, i) => i + 4).map((age) => (
                <option key={age} value={age}>
                  {age} years
                </option>
              ))}
            </select>
          </div>

          {/* Country */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ color: "#f3c47a" }}>Country *</label>
            <select
              name="country"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
                background: "#121820",
                border: "1px solid rgba(212,175,55,0.3)",
                borderRadius: "6px",
                color: "#fff",
              }}
            >
              <option value="">Select country</option>
              {[
                "Afghanistan", "Australia","Nigeria", "Bangladesh", "Brazil", "Canada", "China",
                "Egypt", "France", "Germany", "India", "Indonesia", "Italy", "Japan",
                "Malaysia", "Mexico", "Nepal", "New Zealand", "Pakistan", "Philippines",
                "Russia", "Saudi Arabia", "Singapore", "South Africa", "Sri Lanka",
                "Thailand", "United Arab Emirates", "United Kingdom", "United States",
                "Vietnam", "Other",
              ].map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          {submissionStatus === "loading" && (
            <p style={{ color: "#ebcc88" }}>Submitting...</p>
          )}
          {submissionStatus === "success" && (
            <p style={{ color: "green" }}>{responseMessage}</p>
          )}
          {submissionStatus === "error" && (
            <p style={{ color: "red" }}>{responseMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submissionStatus === "loading"}
            style={{
              width: "100%",
              background: "linear-gradient(to right, #bd853c, #e0b86d)",
              color: "#000",
              padding: "10px",
              border: "none",
              borderRadius: "8px",
              marginTop: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {submissionStatus === "loading"
              ? "Submitting..."
              : "Get Personalized Recommendations"}
          </button>
        </form>

        <p
          style={{
            fontSize: "12px",
            textAlign: "center",
            marginTop: "10px",
            color: "#9a885c",
          }}
        >
          We respect your privacy. Your information will only be used for your
          chess learning experience.
        </p>
      </motion.div>
    </div>
  );
}
