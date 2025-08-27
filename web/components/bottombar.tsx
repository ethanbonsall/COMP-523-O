"use client";

interface Contact {
  name: string;
  email: string;
}

const contacts: Contact[] = [
  { name: "Name 1", email: "email1@example.com" },
  { name: "Name 2", email: "email2@example.com" },
  { name: "Name 3", email: "email3@example.com" },
  { name: "Name 4", email: "email4@example.com" },
];

const BottomBar = () => {
  return (
    <div className="bg-primary text-text pt-16 px-8 pb-16 text-center w-full">
      <h2 className="text-xl font-bold mb-24">Contact Us</h2>
      <div className="flex justify-around mt-4">
        {contacts.map((contact, index) => (
          <div key={index} className="text-left">
            <p className="font-medium">{contact.name}</p>
            <p className="text-sm text-text">{contact.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
