"use client";

import emailJs from "@emailjs/browser";
import { Div, slideIn } from "@/utils/motion";
import EarthCanvas from "../canvas/EarthCanvas";
import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";

interface IForm {
  name: string;
  email: string;
  message: string;
}

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => (
  <label className="flex flex-col">
    <span className="text-white/85 font-medium mb-2">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-sky-300/10 py-4 px-6 placeholder:text-white/30 text-white/70 rounded-md outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const ref: any = useRef();
  const [form, setForm] = useState<IForm>({ name: "", email: "", message: "" });
  const [isLoading, setLoading] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailJs
      .send(
        "service_lbdt9wa" as string,
        "template_racn3xb" as string,
        {
          from_name: form.name,
          to_name: "Mehedi Hasan",
          from_email: form.email,
          to_email: "thisismehedihasan0.1@gmail.com",
          message: form.message,
        },
        "wlYXkmlY-bkCToUpv" as string
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will back to you ASAP!");
          setForm({ name: "", email: "", message: "" });
        },
        (err) => {
          setLoading(false);
          console.log("Error From Contact On Submit --> ", err);
          alert("Something went wrong !!");
        }
      );
  };

  return (
    <section id="contact">
      <h3 className="text-2xl font-bold">Contact</h3>
      <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <Div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] p-8 rounded-md bg-sky-300/5"
        >
          <form ref={ref} onSubmit={onSubmit} className="flex flex-col gap-8">
            <Input
              label="Your Name"
              name="name"
              onChange={onChange}
              placeholder="Ex. John Doe"
              type="text"
              value={form.name}
            />
            <Input
              label="Your Email"
              name="email"
              onChange={onChange}
              placeholder="Ex. john@doe.com"
              type="email"
              value={form.email}
            />
            <label className="flex flex-col">
              <span className="text-white/85 font-medium mb-2">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Write your message here!"
                className="bg-sky-300/10 py-4 px-6 placeholder:text-white/30 text-white/70 rounded-md outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="button-primary py-2 outline-none w-full text-white font-bold shadow-md rounded-md"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </Div>
        <Div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </Div>
      </div>
    </section>
  );
};

export default Contact;
