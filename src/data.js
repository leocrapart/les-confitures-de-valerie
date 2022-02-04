import { readable } from "svelte/store";

export const data = readable({
  products: [
    {
      fullName: "Confiture d'Abricot",
      shortName: "Abricot",
      url: "abricot",
      imgUrl: "/confiture-abricot.jpeg",
      price: "5,50€",
      season: "spring",
      description: "Confiture extra de fraises, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Fraise, sucre, pectine végétale",

    },
    {
      fullName: "Confiture de Cerise",
      shortName: "Cerise",
      url: "cerise",
      imgUrl: "/confiture-cerise.jpeg",
      price: "5,90€",
      season: "spring",
      description: "Confiture extra de cerise, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Cerise, sucre, pectine végétale",
    },
    {
      fullName: "Confiture de Coing",
      shortName: "Coing",
      url: "coing",
      imgUrl: "/confiture-coing.jpeg",
      price: "5,90€",
      season: "autumn",
      description: "Confiture extra de coing, artisanale, cuite au chaudron en cuivre avec des coings venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Coing, sucre",
    },
    {
      fullName: "Confiture de Framboise",
      shortName: "Framboise",
      url: "framboise",
      imgUrl: "/confiture-framboise.jpeg",
      price: "5,90€",
      season: "spring",
      description: "Confiture extra de framboise, artisanale, cuite au chaudron en cuivre avec des framboises venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Framboise, sucre, pectine végétale",
    },
    {
      fullName: "Confiture de pomme-coing",
      shortName: "Pomme-coing",
      url: "pomme-coing",
      imgUrl: "/confiture-framboise.jpeg",
      price: "5,50€",
      season: "autumn",
      description: "Confiture extra de pomme-coing, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Pomme, coing, sucre, citron",
    },
    {
      fullName: "Confiture de Melon",
      shortName: "Melon",
      url: "melon",
      imgUrl: "/confiture-melon.jpeg",
      price: "5,90€",
      season: "autumn",
      description: "Confiture de melon, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Melon, sucre, citron",
    },
    {
      fullName: "Confiture de Melon à la vanille",
      shortName: "Melon à la vanille",
      url: "melon-vanille",
      imgUrl: "/confiture-melon-vanille.jpeg",
      price: "5,90€",
      season: "autumn",
      description: "Confiture de melon à la vanille, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Melon, sucre, citron, extrait de vanille",
    },
    {
      fullName: "Confiture de Tomate à la vanille",
      shortName: "Tomate à la vanille",
      url: "tomate-vanille",
      imgUrl: "/confiture-tomate-vanille.jpeg",
      price: "5,50€",
      season: "autumn",
      description: "Confiture de tomate à la vanille, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Tomate, sucre, citron, extrait de vanille",
    },
    {
      fullName: "Confiture de Kiwi à la vanille",
      shortName: "Kiwi à la vanille",
      url: "kiwi-vanille",
      imgUrl: "/confiture-kiwi-vanille.jpeg",
      price: "5,50€",
      season: "autumn",
      description: "Confiture extra de kiwi à la vanille, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Kiwi, sucre, citron, extrait de vanille",
    },

    {
      fullName: "Confiture de Figue blanche",
      shortName: "Figue blanche",
      url: "figue-blanche",
      imgUrl: "/confiture-figue-blanche.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture de figue blanche, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Figue blanche, sucre, citron",
    },
    {
      fullName: "Confiture de Figue noire",
      shortName: "Figue noire",
      url: "figue-noire",
      imgUrl: "/confiture-figue-noire.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture de figue noire, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Figue noire, sucre, citron",
    },
    {
      fullName: "Confiture de Figue à la vanille",
      shortName: "Figue à la vanille",
      url: "figue-vanille",
      imgUrl: "/confiture-figue-vanille.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture de figue à la vanille, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Figue, sucre, citron, extrait de vanille",
    },
    {
      fullName: "Confiture de Fraise",
      shortName: "Fraise",
      url: "fraise",
      imgUrl: "/confiture-fraise.jpeg",
      price: "5,50€",
      season: "spring",
      description: "Confiture extra de fraise, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Fraise, sucre, pectine végétale",
    },

    {
      fullName: "Confiture de Kiwi",
      shortName: "Kiwi",
      url: "kiwi",
      imgUrl: "/confiture-kiwi.jpeg",
      price: "5,50€",
      season: "winter",
      description: "Confiture extra de kiwi, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Kiwi, sucre, citron",
    },
    {
      fullName: "Confiture de Mirabelle-Abricot",
      shortName: "Mirabelle-Abricot",
      url: "mirabelle-abricot",
      imgUrl: "/confiture-mirabelle-abricot.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture extra de mirabelle-abricot, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Mirabelle, abricot, sucre",
    },
    {
      fullName: "Confiture de Mirabelle",
      shortName: "Mirabelle",
      url: "mirabelle",
      imgUrl: "/confiture-mirabelle.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture extra de mirabelle, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Mirabelle, sucre, pectine végétale",
    },
    {
      fullName: "Confiture Nectarine-Abricot",
      shortName: "Nectarine-abricot",
      url: "nectarine-abricot",
      imgUrl: "/confiture-nectarine-abricot.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture extra de nectarine-abricot, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Nectarine, abricot, sucre, pectine végétale",
    },
    {
      fullName: "Confiture de Nectarine blanche",
      shortName: "Nectarine blanche",
      url: "nectarine-blanche",
      imgUrl: "/confiture-nectarine-blanche.jpeg",
      price: "5,60€",
      season: "summer",
      description: "Confiture extra de nectarine blanche, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Nectarine blanche, sucre, pectine végétale",
    },
    {
      fullName: "Confiture de Nectarine",
      shortName: "Nectarine",
      url: "nectarine",
      imgUrl: "/confiture-nectarine.jpeg",
      price: "5,60€",
      season: "summer",
      description: "Confiture extra de nectarine, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Nectarine, sucre, pectine végétale",
    },
    {
      fullName: "Confiture de pêche-abricot",
      shortName: "Pêche",
      url: "peche-abricot",
      imgUrl: "/confiture-peche.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture extra de pêche-abricot, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Cerise, sucre, pectine végétale",
    },
    {
      fullName: "Confiture de Poire à la vanille",
      shortName: "Poire à la vanille",
      url: "poire-vanille",
      imgUrl: "/confiture-poire-vanille.jpeg",
      price: "5,90€",
      season: "autumn",
      description: "",
      composition: "",
    },
    {
      fullName: "Confiture de Poire",
      shortName: "Poire",
      url: "poire",
      imgUrl: "/confiture-poire.jpeg",
      price: "5,90€",
      season: "autumn",
      description: "Confiture extra de poire, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Poire, sucre",
    },
    {
      fullName: "Confiture de Prune d'Ente",
      shortName: "Prune d'Ente",
      url: "prune-d-ente",
      imgUrl: "/confiture-prune-d-ente.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture extra de Prune d'Ente, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Prune d'Ente, sucre, citron",
    },
    {
      fullName: "Confiture de Prune d'Ente au Rhum",
      shortName: "Prune d'Ente au Rhum",
      url: "prune-d-ente-au-rhum",
      imgUrl: "/confiture-prune-d-ente-au-rhum.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture extra de Prunes d’Ente au Rhum, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Prune d'Ente, sucre, rhum, citron",
    },
    {
      fullName: "Confiture de Reine-Claude",
      shortName: "Reine-Claude",
      url: "reine-claude",
      imgUrl: "/confiture-reine-claude.jpeg",
      price: "5,50€",
      season: "summer",
      description: "Confiture extra de reine claude, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Reine-Claude, sucre",
    },
    {
      fullName: "Confiture Rhubarbe-Abricot",
      shortName: "Rhubarbe-Abricot",
      url: "rhubarbe-abricot",
      imgUrl: "/confiture-rhubarbe-abricot.jpeg",
      price: "5,50€",
      season: "summer",
      description: "",
      composition: "",
    },
    {
      fullName: "Confiture de Rhubarbe",
      shortName: "Rhubarbe",
      url: "rhubarbe",
      imgUrl: "/confiture-rhubarbe.jpeg",
      price: "5,50€",
      season: "summer",
      description: "",
      composition: "",
    },
    {
      fullName: "Confiture de Tomate verte",
      shortName: "Tomate verte",
      url: "tomate-verte",
      imgUrl: "/confiture-tomate-verte.jpeg",
      price: "5,50€",
      season: "autumn",
      description: "Confiture de tomate verte, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "tomate verte, sucre, citron",
    },
    {
      fullName: "Gelée de Coing",
      shortName: "Gelée de Coing",
      url: "gelee-coing",
      imgUrl: "/gelee-coing.jpeg",
      price: "5,90€",
      season: "autumn",
      description: "Gelée de coing, artisanale, cuite au chaudron en cuivre avec des fruits frais venant directement de producteurs locaux du Lot et Garonne.",
      composition: "Coing, sucre",
    },

  ]
})
