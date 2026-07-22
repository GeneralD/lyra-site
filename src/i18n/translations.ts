// Every user-facing string on the site, per locale. Values ending in
// `Html` may carry minimal inline markup (span/br with class only) and
// are rendered with `set:html`; everything else is plain text.
export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const asLocale = (value: string | undefined): Locale =>
  locales.find((l) => l === value) ?? defaultLocale;

export type FeatureKey =
  | "lyrics"
  | "video"
  | "ripple"
  | "decode"
  | "ai"
  | "cli"
  | "spectrum";

export type EcosystemKey = "desktop" | "screensaver" | "lockscreen";

type Card = { readonly title: string; readonly body: string };
type CliEntry = { readonly cmd: string; readonly note: string };
type EcoCard = { readonly surface: string; readonly body: string };

type Copy = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly hero: {
    readonly badge: string;
    readonly titleHtml: string;
    readonly leadHtml: string;
    readonly ctaInstall: string;
    readonly ctaGithub: string;
    readonly subNote: string;
  };
  readonly demo: {
    readonly headingHtml: string;
    readonly lead: string;
    readonly windowLabel: string;
    readonly imgAlt: string;
  };
  readonly features: {
    readonly headingHtml: string;
    readonly lead: string;
    readonly cards: Readonly<Record<FeatureKey, Card>>;
  };
  readonly install: {
    readonly headingHtml: string;
    readonly lead: string;
    readonly installHeading: string;
    readonly readme: { readonly pre: string; readonly label: string; readonly post: string };
    readonly cliHeading: string;
    readonly cli: readonly CliEntry[];
  };
  readonly ecosystem: {
    readonly headingHtml: string;
    readonly lead: string;
    readonly cards: Readonly<Record<EcosystemKey, EcoCard>>;
    readonly recommend: { readonly heading: string; readonly body: string; readonly note: string };
  };
  readonly footer: {
    readonly tagline: string;
    readonly docs: string;
    readonly license: string;
    readonly madeWith: string;
  };
  readonly langSwitcher: { readonly label: string };
  readonly notFound: {
    readonly title: string;
    readonly description: string;
    readonly message: string;
    readonly back: string;
  };
};

export const copy = {
  en: {
    meta: {
      title: "Lyra — Desktop lyrics overlay & video wallpaper for macOS",
      description:
        "Lyra turns your macOS desktop into a living, lyric-synced backdrop: synced lyrics overlay, video wallpaper, mouse-reactive ripples, a matrix-style decode animation, and a real-time audio spectrum.",
    },
    hero: {
      badge: "for macOS 14+",
      titleHtml: 'Your desktop,<br /> <span class="text-lyric">set to music.</span>',
      leadHtml:
        'Lyra paints your macOS desktop with a living video wallpaper, floats <span class="text-ink">synced lyrics</span> right over it — decoded line by line, matrix-style — and sets a <span class="text-ink">real-time spectrum</span> dancing to your sound.',
      ctaInstall: "brew install lyra",
      ctaGithub: "View on GitHub",
      subNote: "Free & open source · Homebrew, Mint, or build from source",
    },
    demo: {
      headingHtml: 'See it <span class="text-decode">in motion</span>',
      lead: "Lyrics decode into place over a video wallpaper that ripples as your cursor passes. This is the real thing — not a mockup.",
      windowLabel: "lyra · desktop overlay",
      imgAlt: "Lyra running on macOS: synced lyrics decoding over a rippling video wallpaper",
    },
    features: {
      headingHtml: 'Built for the <span class="text-lyric">moment</span>',
      lead: "Seven things Lyra does that turn a static desktop into a soundtrack.",
      cards: {
        lyrics: {
          title: "Every word, on cue",
          body: "Time-synced lyrics from LRCLIB float over your desktop and highlight line by line in a warm gold gradient.",
        },
        video: {
          title: "A desktop that moves",
          body: "Set any local file, HTTP stream, or YouTube video as a living wallpaper playing behind everything you do.",
        },
        ripple: {
          title: "Reacts to your touch",
          body: "Mouse-reactive ripples distort the wallpaper as your cursor sweeps across the screen.",
        },
        decode: {
          title: "Matrix-style reveal",
          body: "Each lyric decodes into place with a cascading green animation, straight out of the terminal.",
        },
        ai: {
          title: "Knows what's playing",
          body: "OpenAI-compatible AI extracts title and artist from anything — even untagged tracks — so lyrics just appear.",
        },
        cli: {
          title: "Runs from your terminal",
          body: "A clean CLI (start, stop, config, track) and brew-services daemon keep Lyra exactly where you want it.",
        },
        spectrum: {
          title: "Sound you can see",
          body: "A cava-inspired spectrum analyzer taps the now-playing audio and dances along any edge of your screen — stereo, gradient-tinted, fully tunable. macOS 14.4+.",
        },
      },
    },
    install: {
      headingHtml: 'Up and running in <span class="text-decode">30 seconds</span>',
      lead: "One tap, one install, one command. Requires macOS 14+.",
      installHeading: "Install with Homebrew",
      readme: { pre: "Prefer Mint or source? See the ", label: "README", post: "." },
      cliHeading: "The CLI",
      cli: [
        { cmd: "lyra start", note: "launch the overlay" },
        { cmd: "lyra stop", note: "tear it down" },
        { cmd: "lyra config", note: "edit settings" },
        { cmd: "lyra track", note: "set the current song" },
        { cmd: "lyra daemon", note: "run in the background" },
      ],
    },
    ecosystem: {
      headingHtml: 'One world, <span class="text-lyric">every screen</span>',
      lead: "Lyra has two companions that carry its world beyond the desktop — onto the screen saver, and even the lock screen.",
      cards: {
        desktop: {
          surface: "While you work",
          body: "The heart of it all. A living wallpaper, synced lyrics and a dancing spectrum behind everything you do.",
        },
        screensaver: {
          surface: "While you're away",
          body: "Your idle screen keeps playing the very same wallpaper videos — same framing, same zoom. It reads Lyra's config, so there is nothing to set up.",
        }
        lockscreen: {
          surface: "Even when locked",
          body: "No third-party code can run on the lock screen — so this one bakes your videos into a time-of-day Dynamic Desktop that macOS itself displays, dawn clips to midnight.",
        },
      },
      recommend: {
        heading: "Get the full set",
        body: "Want Lyra's world to follow you past the screen saver and onto the lock screen? Install all three. The companions piggyback on Lyra's own config and cache — zero extra setup.",
        note: "Both companions pull in lyra automatically. Then pick LyraScreenSaver in System Settings, and let --apply paint the lock screen.",
      }
      },
    },
    footer: {
      tagline: "Desktop lyrics overlay & video wallpaper for macOS.",
      docs: "Docs",
      license: "License",
      madeWith: "Made with Swift 6 for macOS",
    },
    langSwitcher: { label: "Language" },
    notFound: {
      title: "404 — Lyra",
      description: "That page decoded into nothing.",
      message: "This page decoded into nothing.",
      back: "← back to Lyra",
    },
  },
  ja: {
    meta: {
      title: "Lyra — 歌詞オーバーレイと動く壁紙で、macOS デスクトップを音楽に染める",
      description:
        "再生中の曲に合わせて、デスクトップそのものが動き出す。壁紙が揺れ、歌詞が浮かび、音がスペクトラムになって踊る。Lyra は macOS のデスクトップを「音楽が見える場所」に変える、無料・オープンソースのアプリです。",
    },
    hero: {
      badge: "macOS 14+ 対応",
      titleHtml: 'デスクトップが、<br /> <span class="text-lyric">音楽に染まる。</span>',
      leadHtml:
        '再生中の曲に合わせて、壁紙が動き出す。その上を<span class="text-ink">歌詞</span>がマトリックスのように流れ、<span class="text-ink">スペクトラム</span>が音そのものを描き出す。',
      ctaInstall: "brew install lyra",
      ctaGithub: "GitHub で見る",
      subNote: "無料 & オープンソース · Homebrew / Mint / ソースからビルド",
    },
    demo: {
      headingHtml: '<span class="text-decode">実際の動き</span>を見る',
      lead: "カーソルを走らせると、壁紙が水面のように波打つ。歌詞は一行ずつ解けて現れる。作り込んだモックではなく、そのまま撮った実際の画面です。",
      windowLabel: "lyra · desktop overlay",
      imgAlt: "macOS で動作する Lyra: 波打つ動画壁紙の上で同期歌詞がデコードされる様子",
    },
    features: {
      headingHtml: 'その<span class="text-lyric">瞬間</span>のために',
      lead: "いつものデスクトップを、音楽が主役の場所に変える7つの仕掛け。",
      cards: {
        lyrics: {
          title: "歌詞が、ぴたりと重なる",
          body: "LRCLIB の同期歌詞がデスクトップに浮かび、いまうたっている一行がゴールドにともる。",
        },
        video: {
          title: "壁紙が、生きている",
          body: "手持ちの動画も、配信も、YouTube も。作業のうしろでずっと流れて、画面が呼吸しはじめる。",
        },
        ripple: {
          title: "カーソルに、さざなみが立つ",
          body: "マウスを走らせるたび、壁紙が水面みたいに波打って追いかける。",
        },
        decode: {
          title: "文字が、解けて歌詞になる",
          body: "一行ごとに緑のコードがカタカタとほどけて、歌詞になる。ターミナル育ちの演出。",
        },
        ai: {
          title: "何の曲かは、Lyra が見抜く",
          body: "OpenAI 互換の AI がタイトルとアーティストを言い当てる。タグがなくても、歌詞はちゃんと出てくる。",
        },
        cli: {
          title: "ターミナルが、いちばんの近道",
          body: "start・stop・config・track のシンプルな CLI と brew services 常駐で、思いどおりに動かせる。",
        },
        spectrum: {
          title: "音が、目に見える",
          body: "cava ゆずりのスペクトラムが、再生中の音を画面のふちで躍らせる。ステレオ対応、色も配置も思いのまま。macOS 14.4+。",
        },
      },
    },
    install: {
      headingHtml: '<span class="text-decode">30秒</span>で使い始める',
      lead: "インストールはコマンドひとつ。あとは流したい曲を再生するだけ。macOS 14+ 対応。",
      installHeading: "Homebrew でインストール",
      readme: { pre: "Mint やソースから入れたい人は ", label: "README", post: " をどうぞ。" },
      cliHeading: "CLI リファレンス",
      cli: [
        { cmd: "lyra start", note: "オーバーレイを起動" },
        { cmd: "lyra stop", note: "オーバーレイを停止" },
        { cmd: "lyra config", note: "設定を編集" },
        { cmd: "lyra track", note: "再生中の曲を指定" },
        { cmd: "lyra daemon", note: "バックグラウンドで常駐" },
      ],
    },
    ecosystem: {
      headingHtml: 'どの画面にも、<span class="text-lyric">おなじ世界を</span>',
      lead: "Lyra には2つの相棒がいる。デスクトップの先——スクリーンセーバー、そしてロック画面まで、この世界観を連れていく。",
      cards: {
        desktop: {
          surface: "作業しているとき",
          body: "すべての起点。動く壁紙のうえに歌詞がともり、スペクトラムが踊る、いつものデスクトップ。",
        },
        screensaver: {
          surface: "席を離れたとき",
          body: "スクリーンセーバーが、デスクトップと同じ壁紙動画をそのまま引き継ぐ。lyra の設定を読むから、こちらで決めることは何もない。",
        },
        lockscreen: {
          surface: "ロックされたときも",
          body: "ロック画面はサードパーティのコードが入れない場所。だから動画を時刻連動の Dynamic Desktop に焼き込んで、macOS 自身に描かせる。朝には朝の、夜には夜のクリップを。",
        },
      },
      recommend: {
        heading: "3つまとめて導入する",
        body: "スクリーンセーバーでもロック画面でも Lyra の世界観を保ちたいなら、3つセットでの導入がおすすめ。相棒たちは lyra の設定とキャッシュに相乗りするので、追加の設定はいらない。",
        note: "相棒2つは lyra も自動で連れてくる。あとはシステム設定で LyraScreenSaver を選び、--apply でロック画面まで染めれば完成。",
      },
    },
    footer: {
      tagline: "歌詞と動く壁紙で、macOS のデスクトップを音楽に。",
      docs: "ドキュメント",
      license: "ライセンス",
      madeWith: "Swift 6 製、macOS のために",
    },
    langSwitcher: { label: "言語切り替え" },
    notFound: {
      title: "404 — Lyra",
      description: "このページは、どこにもデコードされませんでした。",
      message: "このページは、どこにもデコードされませんでした。",
      back: "← Lyra に戻る",
    },
  },
} as const satisfies Record<Locale, Copy>;
