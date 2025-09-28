import ContactForm from "./ContactForm";

export function Contact() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="flex justify-evenly flex-wrap gap-10 p-5 pb-20 pt-[150px]"
          id="Contact">
      <ContactForm />
    </section>
  );
}
