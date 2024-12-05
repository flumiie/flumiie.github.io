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
          icon: "house-fill",
          left: {
            header: "Check out my Carrd",
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
        One: {
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
        Two: {
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

    // Contact: {
    //   icon: "person-fill",
    //   tabs: {
    //     "Site/Tumblr": {
    //       icon: "globe2",
    //       left: {
    //         header: "Personal Site",
    //         text: `<p>I have a personal site where I have some projects I'm working on! I don't know if I'll remember to update this later, but right now it's just Homestuck-related projects. Anyway, find it <a href="https://lumens.live/">&gt;here&lt;</a>!</p>`,
    //       },
    //       right: {
    //         header: "Coding/Project Tumblr",
    //         text: `<p>I have a Tumblr account where I sometimes post about stuff I'm working on! Check it out <a href="https://lumenscode.tumblr.com/">&gt;here&lt;</a>!</p>`,
    //       },
    //     },

    //     "GitHub/Ko-fi": {
    //       icon: "house-fill",
    //       left: {
    //         header: "GitHub",
    //         text: `<p>My GitHub account is <a href="https://github.com/luminaryFlowers">&gt;luminaryFlowers&lt;</a>! You can see my cool repositories, which I do not have many of, because a lot of them are private.</p>`,
    //       },
    //       right: {
    //         header: "Ko-fi",
    //         text: `<p>If you are thinking "wow this is cool and I have an excess of money for reasons I will not divulge and would like to give some to this guy", my Ko-fi is <a href="https://ko-fi.com/lumens">&gt;lumens&lt;</a>! Don't send me money if you need it or are saving up for a cool Klaus von Reinherz figurine though! I understand!</p>`,
    //       },
    //     },
    //   },
    // },
  },
};

export default UserData;
