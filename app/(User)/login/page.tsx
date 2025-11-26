"use client"
import React, { useState } from "react";
export default function UserForm() {
  const [formData, setFormData] = useState({
    // slug: "",
    email: "",
    phone: "",
    // role: "",
    name: "",
    // avatar: "",
    // locale: "",
    email_validated: false,
    phone_validated: false,
    bio: "",
    // company: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value,
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Submitted:", formData);

  //   // Example for API:
  //   /*
  //   await fetch("/api/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   });
  //   */
  //   const res = await fetch("/api/db", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   });
    
  //   const data = await res.json();
  //   console.log(data);
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      console.log("Submitting:", formData);
  
      const res = await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log("Response:", data);
  
      if (!res.ok) {
        alert("Error: " + data.error);
        return;
      }
  
      alert("User created successfully!");
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Create User
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/*<InputField label="Slug" name="slug" value={formData.slug} onChange={handleChange} />*/}
          <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
          {/*<InputField label="Role" name="role" value={formData.role} onChange={handleChange} />*/}
          {/*<InputField label="Avatar URL" name="avatar" value={formData.avatar} onChange={handleChange} />*/}
          {/*<InputField label="Locale" name="locale" value={formData.locale} onChange={handleChange} />*/}
          {/*<InputField label="Company" name="company" value={formData.company} onChange={handleChange} />*/}

        </div>

        {/* Boolean Checkboxes */}
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="email_validated"
              checked={formData.email_validated}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span>Email Validated</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="phone_validated"
              checked={formData.phone_validated}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span>Phone Validated</span>
          </label>
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: any;
}

function InputField({ label, name, type = "text", value, onChange }: InputProps) {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
}
