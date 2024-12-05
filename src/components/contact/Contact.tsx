import { useLanguage } from "@/hooks/useLanguage";
import { useRef, useState } from "react";
import BounceBottomInDiv from "../motion/div/BounceBottomInDiv";
import { styles } from "@/css/theme/styles";
import emailjs from "@emailjs/browser";
import Separator from "@/components/shared-components/separator/Separator";

const Contact = () => {
  const { translate } = useLanguage();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    /* extract the target */
    const { target } = e;
    /* extract name and value from target (event) */
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mirko",
          from_email: form.email,
          to_email: "mirko777.au@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: Error) => {
          if(error) setLoading(false);
          setLoading(false);
          alert(
            "Ahh, something went wrong. Please try again. or send an email to mirko777.au@gmail.com"
          );
        }
      );
  };

  return (
    <div className={`${styles.paddingX}`}>
      <Separator sectionTitle={"contact"}/>

      <BounceBottomInDiv>
        <p className={styles.sectionSubText}>{translate("contact.title")}</p>
        <h3 className={styles.sectionHeadText}>
          {translate("contact.subTitle")}
        </h3>
      </BounceBottomInDiv>
        <div className="flex items-center justify-center pt-5 pb-12">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full md:w-2/3 xl:w-2/5 flex flex-col gap-8 self-center bg-black-200 p-5 rounded-2xl neumorphism__out__form"
            >
                <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                    {translate("contact.form.enterName")}
                </span>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={translate("contact.form.namePH")}
                    className="neumorphism__in__button py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                </label>
                <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                    {translate("contact.form.enterEmail")}
                </span>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={translate("contact.form.emailPH")}
                    className="neumorphism__in__button py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                </label>
                <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                    {translate("contact.form.enterMessage")}
                </span>
                <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={translate("contact.form.messagePH")}
                    className="neumorphism__in__button py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                </label>

                <button
                type="submit"
                className="neumorphism__out py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                >
                {loading ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    </div>
  );
};

export default Contact;
