export const showContact = () => {
    const contactPage = document.createElement("div");
    contactPage.classList.add("contact-page");
    contactPage.style.display = "flex";
    contactPage.style.flexDirection = "column";
    contactPage.style.justifyContent = "center";
    contactPage.style.gap = "50px";
    contactPage.style.flex = "1";
    contactPage.style.paddingBottom = "50px";

    const phonesSection = document.createElement("div");
    phonesSection.classList.add("phones-section");

    const phonesSectionTitle = document.createElement("h2");
    phonesSectionTitle.textContent = "Phones";
    phonesSectionTitle.style.paddingBottom = "20px";

    const phoneNumberOne = document.createElement("p");
    phoneNumberOne.textContent = "879-879-666 6"

    const phoneNumberTwo = document.createElement("p");
    phoneNumberTwo.textContent = "978-879-696 9"

    phonesSection.append(phonesSectionTitle);
    phonesSection.append(phoneNumberOne);
    phonesSection.append(phoneNumberTwo);

    const addressSection = document.createElement("div");
    addressSection.classList.add("address-section");

    const addressSectionTitle = document.createElement("h2");
    addressSectionTitle.textContent = "Address";
    addressSectionTitle.style.paddingBottom = "20px";

    const addressSectionPara = document.createElement("p");
    addressSectionPara.textContent = "Chez Tony, somewhere in Italy, surrounded of Spaghetties";

    addressSection.append(addressSectionTitle);
    addressSection.append(addressSectionPara);

    contactPage.append(phonesSection);
    contactPage.append(addressSection);

    const templateP = document.createElement("p");
    templateP.textContent = "That's another thing to fill the empty space";

    return contactPage;
};
