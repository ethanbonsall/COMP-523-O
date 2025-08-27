"use client";

interface Contact {
  name: string;
  email: string;
}

const contacts: Contact[] = [
  { name: "Lindsay Collette Bean", email: "lcbean@ad.unc.edu" },
  { name: "Ethan Bonsall", email: "ebonsall@unc.edu" },
  { name: "Archana Goli", email: "archgoli@ad.unc.edu" },
  { name: "Aditi Pandey", email: "apandey@ad.unc.edu" },
];

const BottomBar = () => {
  return (
    <div className="flex flex-row bg-primary text-text w-full justify-between py-16 px-8">
      <h2 className="text-2xl font-bold ">Contact Us</h2>
      <div className="flex gap-12 ">
        {contacts.map((contact, index) => (
          <div key={index} className="text-left">
            <p className="text-lg font-bold">{contact.name}</p>
            <button
              className="text-md text-text underline lowercase"
              onClick={() => navigator.clipboard.writeText(contact.email)}
            >
              {contact.email}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
