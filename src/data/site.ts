export const site = {
  name: "JHB Christian Academy",
  shortName: "JHBCA",
  address: "69 Turf Club Road Turffontein, Johannesburg",
  fullAddress: "69 Turf Club Road Turffontein, Johannesburg, 2130",
  email: "info@jhbchristianacademy.co.za",
  phone: "011 025 7333",
  altPhone: "078 112 3137 / 065 512 4003 / 081 583 7908",
  postalAddress: "P.O. BOX 1223 Southdale, Johannesburg, 2135",
  website: "www.jhbchristianacademy.co.za",
  facebook: "https://www.facebook.com/share/18GNkhd4w5/?mibextid=wwXIfr",
};

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Pre-Primary", href: "/academics/pre-primary" },
      { label: "Primary School", href: "/academics/primary" },
      { label: "High School", href: "/academics/high-school" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admissions", href: "/admissions" },
      { label: "Fees", href: "/admissions/fees" },
      { label: "Uniform", href: "/admissions/uniform" },
      { label: "Payments", href: "/admissions/payments" },
    ],
  },
  { label: "Our Gallery", href: "/gallery" },
  { label: "Apply Online", href: "/apply" },
  { label: "Contact Us", href: "/contact" },
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Courses", href: "/academics" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Register Now", href: "/admissions" },
  { label: "Contact Us", href: "/contact" },
];

export const downloads = [
  {
    label: "Enrolment Form",
    href: "https://www.jhb.goonline.co.za/assets/docs/JHBCA-ENROLEMENT-FORM-2024.pdf",
  },
];
