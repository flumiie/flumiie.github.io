/*
    notes:
    - No pages with identical names
    - A page cannot contain 2 tabs with identical names
      (different pages having the same tab name is ok!)
 */

const UserData = {
  title: "flumi's Commission Price List",
  pageData: {
    Home: {
      icon: "house-fill",
      tabs: {
        "My Carrd": {
          icon: "person-fill",
          left: {
            header: "My Carrd",
            text: `Hewwo there! You might've come from my carrd (or not) :3 You can check it out here otherwise:\nhttps://flumi.carrd.co`,
          },
          right: {
            header: "Preview",
            text: "Thumbnail of my carrd",
            image: "carrd-preview.png",
          },
        },
      },
    },

    "Price List": {
      icon: "book-fill",
      tabs: {
        "Head-only Partial": {
          icon: "star-fill",
          left: {
            header: "Head only partial: IDR 1,400,000 ~ IDR 1,700,000",
            text: "A fursuit head only. Great for starting out or you might already have your own tails, handpaws, or feetpaws",
          },
          right: {
            header: "Preview",
            text: "DM me for quotes at my Telegram or Discord",
            image: "",
          },
        },
        "Tail Partial": {
          icon: "star-fill",
          left: {
            header: "Tail Partial: IDR 250,000 ~ IDR 500,000",
            text: "A fursuit tail partial. Pick your own style of tail, either curly tails or a floor-drag tails for example",
          },
          right: {
            header: "Preview",
            text: "DM me for quotes at my Telegram or Discord",
            image: "",
          },
        },
        "Head & Tail Partial": {
          icon: "star-fill",
          left: {
            header: "Head & Tail Partial: IDR 1,500,000 ~ IDR 2,500,000",
            text: "A fursuit head + tail partial. Pick your own style of tail, either curly tails or a floor-drag tails for example",
          },
          right: {
            header: "Preview",
            text: "DM me for quotes at my Telegram or Discord",
            image: "",
          },
        },
        "Hand & Feet Paws Partial": {
          icon: "star-fill",
          left: {
            header: "Hand & Feet Paws Partial: IDR ~",
            text: "Let's say you only need both handpaws & feetpaws",
          },
          right: {
            header: "Preview",
            text: "DM me for quotes at my Telegram or Discord",
            image: "",
          },
        },
        "Full Partial": {
          icon: "star-fill",
          left: {
            header: "Full Partial: IDR 3,500,000 ~ IDR 5,000,000",
            text: "It's almost a full fursuit but it's partial",
          },
          right: {
            header: "Preview",
            text: "DM me for quotes at my Telegram or Discord",
            image: "",
          },
        },
      },
    },

    Timeline: {
      icon: "calendar-range",
      tabs: {
        "#1. Ruxiria": {
          icon: "person-walking",
          left: {
            header: "#1. Ruxiria",
            text: "On the making ...",
            image: "/ref/ruxiria.jpg",
          },
        },
        "#2. Aimie": {
          icon: "person-fill-check",
          left: {
            header: "Preview",
            text: "On the list",
            image: "/ref/aimie.jpg",
          },
        },
        "#3. Bropiy Hands": {
          icon: "person-standing",
          left: {
            header: "Preview",
            text: "On hold",
            image: "/ref/bropiyhands.jpg",
          },
        },
      },
    },
  },
};

export default UserData;
