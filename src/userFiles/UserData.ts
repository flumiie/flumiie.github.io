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
        "Under Development": {
          icon: "cone-striped",
          left: {
            header: "Under Development",
            text: `Hi, this site is currently under development. I'm currently working on it. Stay tuned!`,
          },
        },
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
        "Context one: $100": {
          icon: "star-fill",
          left: {
            header: "Context one: $100",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          right: {
            header: "Preview",
            text: "",
            image: "carrd-preview.png",
          },
        },
        "Context two: $200": {
          icon: "star-fill",
          left: {
            header: "Context two: $200",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          right: {
            header: "Preview",
            text: "",
            image: "carrd-preview.png",
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
