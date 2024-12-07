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
            text: "Hewwo there! You might've come from my carrd (or not) :3 You can check it out here otherwise:\nhttps://flumi.carrd.co\n(If you're on mobile, you can use the arrow above to open the menu)",
          },
          right: {
            header: "Carrd Ku",
            text: "Hewwo! Kamu mungkin ketemu link ini dari carrd ku (atau engga) :3 Kamu bisa cek disini yaa:\nhttps://flumi.carrd.co\n(Kalo kamu buka di mobile, bisa pencet panah diatas buat buka menu nya ya)",
          },
        },
        "My Socials": {
          icon: "chat-dots-fill",
          left: {
            header: "My Socials",
            text: "Twitter: https://twitter.com/flumi_husky\nTelegram: https://t.me/flumiie\nInstagram: https://www.instagram.com/flumiie\nDiscord: @flumiie",
          },
        },
      },
    },

    ToS: {
      icon: "file-text-fill",
      tabs: {
        "Terms of Service": {
          icon: "check-circle-fill",
          left: {
            header: "Do's and Don'ts",
            text: "Do:\n* Fursuit\n* Any gender\n\nDon'ts:\n* Humanoid characters\n* Fanarts\n* Mecha\n* NSFW\n* Realism",
          },
          right: {
            header: "Ya dan Tidak",
            text: "Ya:\n* Fursuit\n* Gender apapun\n\nTidak:\n* Karakter manusia\n* Fanarts\n* Mecha\n* NSFW\n* Realisme",
          },
        },
        Rules: {
          icon: "check-circle-fill",
          left: {
            header: "Rules",
            text: "* Payments can be paid upfront 100%. If you can't pay upfront, you are allowed to do installments\n\n* Refunds only given depending on the situation, which can be discussed. 50% refunding will be given if I could not continue or other problems (discussion is the key).\n\n* I’m always open, don’t be shy to ask me about the availability in Tele or IG!\n\n* Discuss always if the price subject to change, whether by condition or adding something to the commission!\n\n* Process will be: PAYMENT -> MAKING -> APPROVAL -> CONTINUATION -> FINISHING -> DELIVERY\n\n* I have RIGHTS to reject or decline a commission, please be understand.",
          },
          right: {
            header: "Aturan",
            text: "* Pembayaran bisa dibayar didepan muka 100%. Kalau nggak bisa boleh dibayar cicilan\n\n* Pengembalian dana hanya bisa diberikan tergantung situasi yang bisa didiskusikan. 50% uang kembali jika saya tidak bisa melanjutkan atau ada masalah lainnya (diskusi adalah kunci).\n\n* Jangan malu untuk bertanya, boleh tanyakan saya di Tele atau IG!\n\n* Selalu diskusi jika harga nya berubah, tergantung dari kondisi atau ada tambahan dalam komisi!\n\n* Prosesnya adalah: PEMBAYARAN -> PEMBUATAN -> PERSETUJUAN -> PELANJUTAN -> PENYELESAIAN -> PENGIRIMAN\n\n* Saya mempunyai HAK untuk menolak atau tidak menerima komisi, mohon pengertiannya.",
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
            text: "A fursuit head only. Great for starting out or you might already have your own tails, handpaws, or feetpaws\n\nDM me for quotes at my Telegram or Instagram",
          },
          right: {
            header: "Parsial Kepala: IDR 1,400,000 ~ IDR 1,700,000",
            text: "Parsial Kepala Fursuit aja. Bagus untuk mulai atau kamu mungkin sudah punya tail, handpaws, atau feetpaws\n\nDM saya untuk quote harga di Telegram atau Instagram",
          },
        },
        "Tail Partial": {
          icon: "star-fill",
          left: {
            header: "Tail Partial: IDR 250,000 ~ IDR 500,000",
            text: "A fursuit tail partial. Pick your own style of tail, either curly tails or a floor-drag tails for example\n\nDM me for quotes at my Telegram or Instagram",
          },
          right: {
            header: "Parsial Ekor: IDR 250,000 ~ IDR 500,000",
            text: "Parsial Ekor Fursuit aja. Pilih style tailmu sendiri, curly tails atau yang nyentuh lantai\n\nDM saya untuk quote harga di Telegram atau Instagram",
          },
        },
        "Head & Tail Partial": {
          icon: "star-fill",
          left: {
            header: "Head & Tail Partial: IDR 1,500,000 ~ IDR 2,500,000",
            text: "A fursuit head + tail partial. Pick your own style of tail, either curly tails or a floor-drag tails for example\n\nDM me for quotes at my Telegram or Instagram",
          },
          right: {
            header: "Parsial Kepala & Ekor: IDR 1,500,000 ~ IDR 2,500,000",
            text: "Parsial Kepala & Ekor Fursuit. Pilih style ekormu sendiri, curly tails atau yang nyentuh lantai\n\nDM saya untuk quote harga di Telegram atau Instagram",
          },
        },
        "Hand & Feet Paws Partial": {
          icon: "star-fill",
          left: {
            header: "Hand & Feet Paws Partial: IDR ~",
            text: "Let's say you only need both handpaws & feetpaws\n\nDM me for quotes at my Telegram or Instagram",
          },
          right: {
            header: "Parsial Paw Tangan & Kaki: IDR ~",
            text: "Mungkin aja kamu cuma butuh paw tangan & kaki\n\nDM saya untuk quote harga di Telegram atau Instagram",
          },
        },
        "Full Partial": {
          icon: "star-fill",
          left: {
            header: "Full Partial: IDR 3,500,000 ~ IDR 5,000,000",
            text: "It's almost a full fursuit but it's partial\n\nDM me for quotes at my Telegram or Instagram",
          },
          right: {
            header: "Parsial Penuh: IDR 3,500,000 ~ IDR 5,000,000",
            text: "Hampir full fursuit tapi ini partial\n\nDM saya untuk quote harga di Telegram atau Instagram",
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
            text: "On the making ...\n\nSedang dibuat ...",
            image: "ref/ruxiria.jpg",
          },
        },
        "#2. Aimie": {
          icon: "person-fill-check",
          left: {
            header: "#2. Aimie",
            text: "On the list\n\nDalam daftar",
            image: "ref/aimie.jpg",
          },
        },
        "#3. Bropiy Hands": {
          icon: "person-standing",
          left: {
            header: "#3. Bropiy Hands",
            text: "On hold\n\nJeda",
            image: "ref/bropiyhands.jpg",
          },
        },
      },
    },
  },
};

export default UserData;
