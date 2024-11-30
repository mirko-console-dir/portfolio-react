import {
  apple_design,
  bank_design,
  metaverse_design,
  gpt3_design,
  baloon_game,
  magic_memory_game,
  access_app,
  collaborative_mobile_app,
  custom_tshirt,
  minecraft_game,
  restaurant_design,
  sunbuds_app,
} from "@/assets/works";

export const projects = [
  {
    name: {
      en: "Collaborative Event App",
      it: "Collaborative Event App",
      jp: "協力イベントアプリ",
    },
    description: {
      en: "Experience seamless collaboration with this mobile app built using React Native, GraphQL, Node.js, MongoDB, Apollo, WebSocket, and integrated with Amazon AWS. Manage events and todos with friends or colleagues in real-time. The app features a modern and intuitive user interface, ensuring a smooth and efficient user experience.",
      it: "Vivi una collaborazione senza soluzione di continuità con questa app mobile costruita con React Native, GraphQL, Node.js, MongoDB, Apollo, WebSocket e integrata con Amazon AWS. Gestisci eventi e attività da fare con amici o colleghi in tempo reale. L'app presenta un'interfaccia utente moderna e intuitiva, garantendo un'esperienza utente fluida ed efficiente.",
      jp: "このモバイルアプリケーションは、React Native、GraphQL、Node.js、MongoDB、Apollo、WebSocketを使用して構築されており、Amazon AWSと統合されています。友人や同僚とリアルタイムでイベントやToDoを管理します。このアプリケーションは、モダンで直感的なユーザーインターフェースを備えており、スムーズで効率的なユーザーエクスペリエンスを保証します。",
    },
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "apollo",
        color: "orange-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "websocket",
        color: "yellow-text-gradient",
      },
    ],
    image: collaborative_mobile_app,
    source_code_link:
      "https://github.com/mirko-console-dir/react-native-event-app",
  },
  {
    name: {
      en: "Metaverse",
      it: "Metaverse",
      jp: "メタバース",
    },
    description: {
      en: "This cutting-edge app boasts a stunning front end, built using functional components and hooks to ensure efficiency and flexibility. The development journey explores exciting technologies like Vite, Next.js, and Motion, taking interactivity to a whole new level.",
      it: "Quest'app all'avanguardia vanta un'interfaccia utente straordinaria, costruita utilizzando componenti funzionali e hook per garantire efficienza e flessibilità. Il percorso di sviluppo esplora tecnologie interessanti come Vite, Next.js e Motion, portando l'interattività a un livello completamente nuovo.",
      jp: "この先端的なアプリケーションは、機能コンポーネントとフックを使用して効率と柔軟性を確保するために構築された、見事なフロントエンドを誇っています。Vite、Next.js、Motionなどのエキサイティングな技術を探求する開発の旅は、インタラクティブを全く新しいレベルに引き上げます。",
    },
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse_design,
    source_code_link: "https://mirko-console-dir.github.io/metaverse-design/",
  },
  {
    name: {
      en: "Acess app",
      it: "Acess app",
      jp: "アクセスアプリ",
    },
    description: {
      en: "Experience smooth communication and real-time updates with this dynamic web application. Bringing together in one convenient place, streamlining interactions, and fostering better collaboration among all stakeholders.",
      it: "Vivi una comunicazione fluida e aggiornamenti in tempo reale con questa dinamica applicazione web. Riunendo in un unico luogo, semplificando le interazioni e favorendo una migliore collaborazione tra tutte le parti interessate.",
      jp: "このダイナミックなWebアプリケーションでは、流暢なコミュニケーションとリアルタイムの更新を体験できます。便利な場所にまとめ、インタラクションを簡素化し、すべてのステークホルダー間でより良いコラボレーションを促進します。",
    },
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: access_app,
    source_code_link: "",
  },
  {
    name: {
      en: "Sunbuds",
      it: "Sunbuds",
      jp: "サンバッズ",
    },
    description: {
      en: "Discover a comprehensive e-commerce web application for legal CBD products. Perfectly tailored for efficient product management, this app empowers administrators to handle inventory to publishing engaging content, this all-in-one solution.",
      it: "Scopri un'applicazione web e-commerce completa per prodotti CBD legali. Perfettamente progettata per una gestione efficiente dei prodotti, questa app permette agli amministratori di gestire l'inventario fino alla pubblicazione di contenuti accattivanti, offrendo una soluzione completa.",
      jp: "合法的なCBD製品の包括的なeコマースWebアプリケーションを発見してください。効率的な製品管理に完璧に適合し、管理者が在庫を処理して魅力的なコンテンツを公開するのを支援するこのオールインワンソリューション。",
    },
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sunbuds_app,
    source_code_link: "",
  },
  {
    name: {
      en: "Chat GPT3",
      it: "Chat GPT3",
      jp: "チャットGPT3",
    },
    description: {
      en: "Frontend through BEM's naming conventions, each component becomes self-contained and easily reusable, allowing for a smooth collaboration among team members and facilitating future updates and expansions.",
      it: "Il frontend attraverso le convenzioni di denominazione di BEM, ogni componente diventa autonomo e facilmente riutilizzabile, permettendo una collaborazione fluida tra i membri del team e facilitando gli aggiornamenti e le espansioni future.",
      jp: "BEMの命名規則を通じてフロントエンドを行うことで、各コンポーネントは自己完結型で簡単に再利用可能になり、チームメンバー間でのスムーズなコラボレーションを可能にし、将来のアップデートや拡張を容易にします。",
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bem",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3_design,
    source_code_link: "https://mirko-console-dir.github.io/gpt3-modern-design/",
  },
  {
    name: {
      en: "Minecraft",
      it: "Minecraft",
      jp: "マインクラフト",
    },
    description: {
      en: "Using React's dynamic and flexible capabilities, I've recreated the iconic mechanics of Minecraft, allowing you to build and explore to your heart's content. Immerse yourself in a pixelated universe.",
      it: "Utilizzando le capacità dinamiche e flessibili di React, ho ricreato le iconiche meccaniche di Minecraft, permettendoti di costruire ed esplorare senza limiti. Immergiti in un universo pixelato.",
      jp: "Reactの動的かつ柔軟な機能を使用して、Minecraftの象徴的なメカニクスを再現しました。自分の好きなだけ建築や探索を楽しむことができます。ピクセルで表現された宇宙に没入してください。",
    },
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: minecraft_game,
    source_code_link: "https://mirko-console-dir.github.io/minecraft-threejs/",
  },
  {
    name: {
      en: "Custom T-shirt",
      it: "Custom T-shirt",
      jp: "カスタムTシャツ",
    },
    description: {
      en: "Powered by cutting-edge technologies such as Three js and React, this project ensures a seamless and interactive user experience, enabling you to preview your designs in real-time before making the final choice.",
      it: "Grazie alle tecnologie all'avanguardia come Three.js e React, questo progetto garantisce un'esperienza utente fluida e interattiva, consentendoti di visualizzare in anteprima i tuoi design in tempo reale prima di fare la scelta finale.",
      jp: "Three jsやReactなどの先端技術を活用して、このプロジェクトは流暢なでインタラクティブなユーザーエクスペリエンスを確保し、最終的な選択をする前にデザインをリアルタイムでプレビューすることを可能にします。",
    },
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: custom_tshirt,
    source_code_link:
      "https://mirko-console-dir.github.io/threejs-custom-product/",
  },
  {
    name: {
      en: "Apple Shop with React",
      it: "Apple Shop with React",
      jp: "Apple ショップ と React",
    },
    description: {
      en: "A humble first adventure with React, this project showcases Apple products in a simple yet effective manner. The user interface is designed with basic javascript animations to enhance the browsing experience. Despite its simplicity, it serves as a foundational project in learning React.",
      it: "Un umile primo viaggio con React, questo progetto presenta i prodotti Apple in modo semplice ma efficace. L'interfaccia utente è progettata con semplici animazioni in JavaScript per migliorare l'esperienza di navigazione. Nonostante la sua semplicità, serve come progetto fondamentale per imparare React.",
      jp: "Reactでの謙虚な最初の冒険であり、このプロジェクトは、シンプルかつ効果的な方法でApple製品を紹介しています。ユーザーインターフェースは、基本的なJavaScriptアニメーションを使用してブラウジングエクスペリエンスを向上させるように設計されています。そのシンプルさにもかかわらず、Reactを学ぶ上での基本的なプロジェクトとして機能します。",
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-black-text-gradient",
      },
    ],
    image: apple_design,
    source_code_link: "https://mirko-console-dir.github.io/apple-react/ ",
  },
  {
    name: {
      en: "Online Bank WebApp",
      it: "Online Bank WebApp",
      jp: "オンラインバンクWebアプリ",
    },
    description: {
      en: "A modern and sleek design concept for an online bank app, created with Next.js. This project focuses on the user interface and user experience, showcasing a clean and intuitive design. Although it's a design-only project, it demonstrates the potential of Next.js for building modern web applications.",
      it: "Un concetto di design moderno e elegante per un'app di banca online, creata con Next.js. Questo progetto si concentra sull'interfaccia utente e sull'esperienza utente, mostrando un design pulito e intuitivo. Anche se è solo un progetto di design, dimostra il potenziale di Next.js per la creazione di applicazioni web moderne.",
      jp: "Next.jsで作成されたオンラインバンクアプリのためのモダンで洗練されたデザインコンセプト。このプロジェクトはユーザーインターフェースとユーザーエクスペリエンスに焦点を当て、クリーンで直感的なデザインを展示しています。デザイン専用のプロジェクトですが、Next.jsを使用した現代のWebアプリケーションの潜在能力を示しています。",
    },
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: bank_design,
    source_code_link: "https://mirko-console-dir.github.io/hoobank-project/",
  },
  {
    name: {
      en: "Restaurant Design WebApp",
      it: "Restaurant Design WebApp",
      jp: "レストランデザインWebアプリ",
    },
    description: {
      en: "A design app for a restaurant, built with React and Framer Motion. This project offers a visually appealing experience, showcasing the restaurant's menu, ambiance, and services through animations and transitions. It serves as a creative exploration of design concepts using modern web technologies.",
      it: "Un'applicazione di design per un ristorante, costruita con React e Framer Motion. Questo progetto offre un'esperienza visivamente accattivante, mostrando il menu, l'atmosfera e i servizi del ristorante attraverso animazioni e transizioni. Serve come esplorazione creativa dei concetti di design utilizzando tecnologie web moderne.",
      jp: "ReactとFramer Motionで構築されたレストラン用のデザインアプリ。このプロジェクトは、アニメーションやトランジションを通じてレストランのメニューや雰囲気、サービスを視覚的に魅力的に表現します。現代のWeb技術を使用したデザインコンセプトの創造的な探求として機能します。",
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "motion",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant_design,
    source_code_link:
      "https://mirko-console-dir.github.io/react-restaurant-design/",
  },
  {
    name: {
      en: "Balloon Game with 90s-style Animations",
      it: "Balloon Game with 90s-style Animations",
      jp: "90年代風アニメーションのバルーンゲーム",
    },
    description: {
      en: "Travel back to the 90s with this nostalgic balloon game, entirely built in JavaScript. Take aim and shoot at incoming balloons using a central point, all while enjoying charming game animations reminiscent of classic 90s gaming experiences.",
      it: "Torna agli anni '90 con questo nostalgico gioco dei palloncini, interamente costruito in JavaScript. Prendi la mira e spara ai palloncini in arrivo usando un punto centrale, mentre ti godi affascinanti animazioni di gioco che ricordano le classiche esperienze di gioco degli anni '90.",
      jp: "このノスタルジックなバルーンゲームで90年代にタイムトリップしましょう。完全にJavaScriptで構築されており、中心点を使用して飛来するバルーンを狙い撃ちし、クラシックな90年代のゲーム体験を楽しむことができます。",
    },
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: baloon_game,
    source_code_link: "https://mirko-console-dir.github.io/BaloonGame/",
  },
  {
    name: {
      en: "Memory Card Game with React",
      it: "Memory Card Game with React",
      jp: "Reactを使用したメモリーカードゲーム",
    },
    description: {
      en: "Challenge your memory with this engaging card-matching game built using React. Flip cards to reveal hidden images and match pairs to score points. With colorful graphics and smooth animations, this game provides a fun and interactive experience for all ages.",
      it: "Sfida la tua memoria con questo coinvolgente gioco di abbinamento di carte costruito con React. Gira le carte per rivelare immagini nascoste e abbina le coppie per ottenere punti. Con grafica colorata e animazioni fluide, questo gioco offre un'esperienza divertente e interattiva per tutte le età.",
      jp: "Reactを使用して構築された、カードをめくって隠れた画像を表示し、ペアを揃えてポイントを獲得するこの魅力的なカードマッチングゲームで記憶力に挑戦しましょう。カラフルなグラフィックとスムーズなアニメーションで、このゲームは全年齢向けの楽しいインタラクティブな体験を提供します。",
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: magic_memory_game,
    source_code_link: "https://mirko-console-dir.github.io/magic-memory/",
  },
];
