import React from "react";
import { contacts } from "../lib/data/contacts";

const Contacts = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
            {contacts.map((contact, index) => (
                <div key={index}>
                    <div className="flex items-center gap-4">
                        <contact.icon
                            className="text-primary"
                            size={24}
                        />
                        <p className="font-semibold">{contact.label}</p>
                    </div>
                    <div className="ms-9">
                        <p>{contact.value}</p>
                        <p className="text-sm text-gray-500">
                            {contact.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contacts;
